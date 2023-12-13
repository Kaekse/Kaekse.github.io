import * as Blockly from "blockly";

// TODO: Integer omparison
export const blocks = [
  {
    type: "condition",
    message0: "Condition %1 %2 %3",
    args0: [
      {
        type: "input_value",
        name: "CONDITION_A",
        check: null,
      },
      {
        type: "field_dropdown",
        name: "COMPARISON",
        options: [
          ["==", "EQUAL"],
          ["!=", "UNEQUAL"],
        ],
      },
      {
        type: "input_value",
        name: "CONDITION_B",
        check: null,
      },
    ],
    colour: 270,
    previousStatement: ["options"],
    nextStatement: ["options"],
    inputsInline: true,
  },

  {
    type: "unique",
    message0: "Unique",
    colour: 270,
    previousStatement: ["options"],
    nextStatement: ["options"],
    inputsInline: true,
  },

  {
    type: "invisible",
    message0: "Invisible",
    colour: 270,
    previousStatement: ["options"],
    nextStatement: ["options"],
    inputsInline: true,
  },

  {
    type: "prefix_text",
    message0: "Prefix %1",
    args0: [
      {
        type: "field_input",
        name: "TEXT",
        text: "Type anything here",
      },
    ],
    colour: 270,
    previousStatement: ["options"],
    nextStatement: ["options"],
  },
  {
    type: "postfix_text",
    message0: "Postfix %1",
    args0: [
      {
        type: "field_input",
        name: "TEXT",
        text: "Type anything here",
      },
    ],
    colour: 270,
    previousStatement: ["options"],
    nextStatement: ["options"],
  },
  {
    type: "count",
    message0: "Count %1",
    args0: [
      {
        type: "input_value",
        name: "COUNT",
        check: null,
      },
    ],
    colour: 270,
    previousStatement: ["options"],
    nextStatement: ["options"],
  },
];
