import * as Blockly from "blockly";

export const blocks = [
  {
    type: "task_description",
    message0: "Task Description %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "DESCRIPTION",
        check: "description_block",
      },
    ],
    nextStatement: ["given_code", "code_sollution"],
    colour: 230,
  },
  {
    type: "given_code",
    message0: "Given Code %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "GIVEN_CODE",
        check: "given_code_block",
      },
    ],
    previousStatement: "given_code",
    nextStatement: "code_sollution",
    colour: 230,
  },
  {
    type: "code_sollution",
    message0: "Sollution %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "CODE_SOLLUTION",
        check: "code_block",
      },
    ],
    previousStatement: "code_sollution",
    colour: 230,
  },
];
