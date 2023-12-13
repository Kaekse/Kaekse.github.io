import * as Blockly from "blockly";

export const blocks = [
  {
    type: "random_statement",
    message0: "Random value between %1 and %2",
    args0: [
      {
        type: "input_value",
        name: "MIN",
        check: "Number"
      },
      {
        type: "input_value",
        name: "MAX",
        check: "Number",
      },
    ],
    previousStatement: ["description_block", "code_block", "given_code_block"],
    nextStatement: ["description_block", "code_block", "given_code_block"],
    colour: 350,
    inputsInline: true,
  },
];
