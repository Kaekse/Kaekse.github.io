import * as Blockly from "blockly";

export const blocks = [
  // Block for variable getter.
  {
    type: "variables_get",
    message0: "Placeholder %1 Data %2 Value %3 %4 Options %5",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}",
      },
      {
        type: "field_dropdown",
        name: "DATA",
        options: [
          ["transformation_data", "TRANS_DATA"],
          ["function", "FUNC_DATA"],
        ],
      },
      {
        type: "field_dropdown",
        name: "VALUE",
        options: [
          ["plural", "PLURAL"],
          ["singular", "SINGULAR"],
        ],
      },
      { type: "input_dummy" },
      {
        type: "input_statement",
        name: "OPTIONS",
        check: "options",
      },
    ],
    previousStatement: ["description_block", "code_block", "given_code_block"],
    nextStatement: ["description_block", "code_block", "given_code_block"],
    colour: 200,
    inputsInline: true,
  },
  {
    type: "math_change",
    message0: "Placeholder %1 with value %2",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}",
      },
      {
        type: "field_dropdown",
        name: "VALUE",
        options: [
          ["plural", "PLURAL"],
          ["singular", "SINGULAR"],
        ],
      },
    ],
    previousStatement: ["description_block", "code_block", "given_code_block"],
    nextStatement: ["description_block", "code_block", "given_code_block"],
    colour: 200,
  },

  /*
    {
          "type": "field_checkbox",
          "name": "UNIQUE"
        },
        {
          "type": "field_checkbox",
          "name": "INVISIBLE"
        },
        {"type": "input_dummy",},
        {
          "type": "input_value",
          "name": "CONDITION",
        },
        {"type": "input_dummy",},
        {
          "type": "input_value",
          "name": "COUNT",
          "check": "placeholder_set"
        }
    */

  // Block for variable setter.
  {
    type: "variables_set",
    message0: "%{BKY_VARIABLES_SET}",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}",
      },
      {
        type: "field_dropdown",
        name: "VALUE",
        options: [
          ["plural", "PLURAL"],
          ["singular", "SINGULAR"],
        ],
      },
    ],
    colour: 200,
    output: "value",
  },
];
