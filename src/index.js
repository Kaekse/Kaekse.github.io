/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
import {blocks} from './blocks/para';
import {paraGenerator} from './generators/para';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);


// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {toolbox});

// This function resets the code div and shows the
// generated code from the workspace.
const runCode = () => {
  const code = paraGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;
};

// Load the initial state from storage and run the code.
load(ws);
runCode();

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
  // UI events are things like scrolling, zooming, etc.
  // No need to save after one of these.
  if (e.isUiEvent) return;
  save(ws);
});


// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
  // Don't run the code when the workspace finishes loading; we're
  // already running it once when the application starts.
  // Don't run the code during drags; we might have invalid state.
  if (e.isUiEvent || e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()) {
    return;
  }
  runCode();
});



/*
You cant have placeholders with the same ID using different data tables. 
Therefore, if there is more than one placeholder with the same name, if any 
of those placeholders change their data, all need to change.

Therefore, this listener checks if a block changes.
It then checks every other block for its type. 
If it is a placeholder, it checks its name and if it matches, it changes the data 
value to the same value.
*/
function change_all_placeholder(block){
  if (block) {
    if (block.type == 'variables_get') {
      var name_id = block.getField("VAR").getText();

      var allBlocks = ws.getAllBlocks();
      for (var i = 0; i < allBlocks.length; i++) {
        var block_new = allBlocks[i];
        // Check if the block is a variable block
        if (block_new.type == 'variables_get') {
          if (block_new.getField("VAR").getText() == name_id) {
            block_new.getField('DATA').setValue(block.getFieldValue("DATA"));
          }
        } 
      }
    };
  };
}
function change_newly_created_placeholder(block) {
  if (block) {
    if (block.type == 'variables_get') {
      var name_id = block.getField("VAR").getText();

      var allBlocks = ws.getAllBlocks();
      for (var i = 0; i < allBlocks.length; i++) {
        var block_new = allBlocks[i];
        // Check if the block is a variable block
        if (block_new.type == 'variables_get') {
          if (block_new.getField("VAR").getText() == name_id) {
            block.getField('DATA').setValue(block_new.getFieldValue("DATA"));
          }
        } 
      }
    };
  };
}
ws.addChangeListener(function (event) {
  if (event.type == Blockly.Events.BLOCK_CHANGE) {
    // change all blocks
    var block = ws.getBlockById(event.blockId);
    if (event.name == "DATA") {
      change_all_placeholder(block);
    } else if (event.name == "VAR") {
      // only the name of the block changed: change its value to the 
      change_newly_created_placeholder(block);
    }
    
  } else if (event.type == Blockly.Events.BLOCK_CREATE) {
    // change new block 
    var block = ws.getBlockById(event.blockId);
    change_newly_created_placeholder(block);
  }
});






