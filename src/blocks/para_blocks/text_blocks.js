import * as Blockly from "blockly";

export const blocks = [
  {
    type: "text_for_statement",
    message0: "Text %1",
    args0: [
      {
        type: "field_input",
        name: "TEXT",
        text: "Type anything here",
      },
    ],
    previousStatement: ["description_block", "code_block", "given_code_block"],
    nextStatement: ["description_block", "code_block", "given_code_block"],
    colour: 100,
  },
  {
    type: "text_for_output",
    message0: "%1",
    args0: [
      {
        type: "field_input",
        name: "TEXT_OUT",
        text: "Text",
      },
    ],
    colour: 100,
    output: "string",
  },
  {
    type: "code_for_statement",
    message0: "Code %1",
    args0: [
      {
        type: "field_multilinetext",
        name: "CODE",
        text: "name = 'Hello, World!\nif name == 'Hello, World!'\n   print(name)",
        spellcheck: false
      },
    ],
    previousStatement: ["description_block", "code_block", "given_code_block"],
    nextStatement: ["description_block", "code_block", "given_code_block"],
    colour: 120,
  },
];
