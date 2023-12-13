import * as Blockly from "blockly";

export const paraGenerator = new Blockly.Generator("PARA");

const Order = {
  ATOMIC: 0,
};

//#################################################################################################
/*
Generator for description_blocks
*/
paraGenerator.forBlock["task_description"] = function (block, generator) {
  const description = generator.statementToCode(block, "DESCRIPTION");
  const code = "Task Description: " + description + "\n";
  return code;
};
paraGenerator.forBlock["given_code"] = function (block, generator) {
  const description = generator.statementToCode(block, "GIVEN_CODE");
  const code = "Given Code: " + description + "\n";
  return code;
};
paraGenerator.forBlock["code_sollution"] = function (block, generator) {
  const description = generator.statementToCode(block, "CODE_SOLLUTION");
  const code = "Sollution: " + description + "\n";
  return code;
};

//#################################################################################################
/*
Generator for options_blocks 
*/

paraGenerator.forBlock["condition"] = function (block, generator) {
  var value1 = generator.statementToCode(block, "CONDITION_A");

  /*
  var parentBlock = block.getParent();
  while (parentBlock) {
    if (parentBlock.type !== "variables_get") {
      parentBlock = parentBlock.getParent();
    } else {
      break;
    }
  }
  

  if (parentBlock.type == "variables_get") {
    const name = '@' + parentBlock.getField('VAR').getText();
    const value = parentBlock.getFieldValue('VALUE');
    value1 = name + ':' + value;
  }
  */

  const value2 = generator.statementToCode(block, "CONDITION_B");
  const code = " cond=(" + value1.trim() + "==" + value2.trim() + ")";
  return code;
};

paraGenerator.forBlock["unique"] = function (block, generator) {
  /*
  var value = block.getFieldValue("UNIQUE");
  if (value === "TRUE") {
    value = "true";
  } else {
    value = "false";
  }
  */
  const code = " unique=true"
  return code;
};

paraGenerator.forBlock["invisible"] = function (block, generator) {
  /*
  var value = block.getFieldValue("INVISIBLE");
  if (value === "TRUE") {
    value = "true";
  } else {
    value = "false";
  }
  */
  const code = " invisible=true";
  return code;
};

paraGenerator.forBlock["postfix_text"] = function (block, generator) {
  const value = block.getFieldValue("TEXT");
  const code = " postfix=" + value;
  return code;
};

paraGenerator.forBlock["prefix_text"] = function (block, generator) {
  const value = block.getFieldValue("TEXT");
  const code = " prefix=" + value;
  return code;
};

paraGenerator.forBlock["count"] = function (block, generator) {
  const value = generator.statementToCode(block, "COUNT");
  const code = " count=" + value;
  return code;
};

//#################################################################################################
/*
Generator for text_blocks
*/

paraGenerator.forBlock["math_number"] = function (block) {
  const code = String(block.getFieldValue("NUM"));
  return code;
};

paraGenerator.forBlock["text_for_statement"] = function (block, generator) {
  const textValue = block.getFieldValue("TEXT");
  const code = textValue;
  return code;
};

paraGenerator.forBlock["text_for_output"] = function (block) {
  const textValue = block.getFieldValue("TEXT_OUT");
  const code = textValue;
  return code;
};

paraGenerator.forBlock["code_for_statement"] = function (block, generator) {
  //TODO: How to deal with actual new lines in a string from the user
  var codeString = block.getFieldValue('CODE');
  
  /****************/
  // get workspace, all blocks, find the blocks of specific type and than add all the names of those blocks to the list
  var workspace = Blockly.getMainWorkspace();
  var variableList = [];
  var allBlocks = workspace.getAllBlocks();
  for (var i = 0; i < allBlocks.length; i++) {
      var block = allBlocks[i];
      
      // Check if the block is a variable block
      if (block.type == 'variables_get') {
          // Assuming the variable field is the first input
          var variableName = block.getField("VAR").getText();
          variableList.push(variableName);
      }
  }
  /*****************/

  /*****************/
  // TODO: this code is FROM CHAT_GBT, update it to understand it 
  // check for occurences of {{...}} and check its input
  // Regular expression to match occurrences of "{-...-}"
  var regex = /\{\-(.*?)\-\}/g;

  // Array to store matches
  var matches = [];
  var match;
  var counter = 0
  // Iterate over matches
  while ((match = regex.exec(codeString)) !== null) {
      // match[1] contains the content between "{{" and "}}"
      matches.push(match[1]);
  }
  /*****************/

  /*****************/
  // check if mathes are variables
  for (var i = 0; i < matches.length; i++) {
    if (matches[i] == "") {
      codeString = codeString.replace("{--}", "{@}");
      continue;
    }
    if (variableList.includes(matches[i])) {
      codeString = codeString.replace("{-" + matches[i] + "-}", "{@" + matches[i] + "}");
    }else {
      codeString = "Ther is no placeholder with the name \"" + matches[i] + "\" defined";
    };
  } 
  /*****************/

  const replacedNewLine = codeString.replace(/\n/g, '\\n');
  const code = replacedNewLine;
  return code;
};

//#################################################################################################
/*
Generator for placeholder_blocks
*/

//Currently called variables instead of placehodler due to it being easier that way
paraGenerator.forBlock["variables_get"] = function (block, generator) {
  const name = "@" + block.getField("VAR").getText();
  const data = "data=" + block.getFieldValue("DATA");
  const value = "val=:" + block.getFieldValue("VALUE");
  const options = " " + generator.statementToCode(block, "OPTIONS").trim();
  const code = "{" + name + " " + value + " " + data + options + "}";
  return code;
};

paraGenerator.forBlock["variables_set"] = function (block, generator) {
  const name = "@" + block.getField("VAR").getText();
  const value = block.getFieldValue("VALUE");
  const code = name + ":" + value;
  return code;
};

paraGenerator.forBlock["math_change"] = function (block, generator) {

  var workspace = Blockly.getMainWorkspace();
  var variableList = [];
  var allBlocks = workspace.getAllBlocks();
  for (var i = 0; i < allBlocks.length; i++) {
      var block = allBlocks[i];
      
      // Check if the block is a variable block
      if (block.type == 'variables_get') {
          // Assuming the variable field is the first input
          var variableName = block.getField("VAR").getText();
          variableList.push(variableName);
      } 
  }

  const name = block.getField("VAR").getText();
  const name_code = "@" + name;

  if (!variableList.includes(name)) {
    return "Variable " + name + " was used but not defined previously"
  };

  const value = block.getFieldValue("VALUE");
  const code = "{" + "val=" + name_code + ":" + value + "}";
  return code;
};

//#################################################################################################

paraGenerator.forBlock["random_statement"] = function (block, generator) {
  const min = "min=" + generator.statementToCode(block, "MIN").trim();
  const max = "max=" + generator.statementToCode(block, "MAX").trim();
  const code = "[" + "random " + min + " " + max + "]";
  return code;
};


//#################################################################################################

paraGenerator.scrub_ = function (block, code, thisOnly) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    return code + paraGenerator.blockToCode(nextBlock);
  }
  return code;
};
