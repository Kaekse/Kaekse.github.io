import * as Blockly from 'blockly';

const main_blocks = [
  {
    'kind': 'block',
    'type': 'task_description'
  },
  {
    'kind': 'block',
    'type': 'code_sollution'
  },
  {
    'kind': 'block',
    'type': 'given_code'
  }
]

const commands = [
  {
      "kind": "block",
      "type": "random_statement",
      "inputs": {
        "MIN": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": 1
            }
          }
        },
        "MAX": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": 10
            }
          }
        }
      }
    },
]

const main_blocks_category = {
  'colour': '230'
}

const text_blocks = [
  {
    'kind': 'block',
    'type': 'text_for_output'
  },
  {
    'kind': "block",
    'type': 'text_for_statement'
  },
]

const code_blocks = [
  {
    'kind': 'block',
    'type': 'code_for_statement'
  }
]

const number_blocks = [
  {
    'kind': 'block',
    'type': 'math_number'
  },
]

const options = [
  {
    'kind': 'block',
    'type': 'condition'
  },
  {
    'kind': 'block',
    'type': 'invisible'
  },
  {
    'kind': 'block',
    'type': 'unique'
  },
  {
    'kind': 'block',
    'type': 'postfix_text'
  },
  {
    'kind': 'block',
    'type': 'prefix_text'
  },
  {
    'kind': 'block',
    'type': 'count'
  }
]

export const toolbox = {
  'kind': 'categoryToolbox',
  'contents': [
    {
      'kind': 'category',
      'name': 'Main Blocks',
      'contents': main_blocks,
      'colour': 230
    },

    {
      "kind": "sep",
    },
    {
      "kind": "category",
      "name": "Placeholder",
      "custom": "VARIABLE"
    },
    {
      "kind": "category",
      "name": "Options",
      'contents': options
    },
    {
      "kind": "sep",
    },
    {
      "kind": "category",
      "name": "Commands",
      'contents': commands
    },
  
    {
      "kind": "sep",
    },
    {
      'kind': 'category',
      'name': 'Text Blocks',
      'contents': text_blocks
    },
    {
      'kind': 'category',
      'name': 'Code Blocks',
      'contents': code_blocks
    },
    {
      'kind': 'category',
      'name': 'Number Blocks',
      'contents': number_blocks
    },  
  ]
}













/*
export const toolbox = {
  'kind': 'flyoutToolbox',
  'contents': [
    
    {
      'kind': 'block',
      'type': 'given_code'
    },
    {
      'kind': 'block',
      'type': 'code_sollution'
    },
    {
      'kind': 'block',
      'type': 'math_number'
    },
    {
      'kind': 'block',
      'type': 'text'
    },
    {
      'kind': 'block',
      'type': 'logic_boolean'
    },
    {
      'kind': 'block',
      'type': 'logic_null'
    },
    {
      'kind': 'block',
      'type': 'lists_create_with'
    },
  ]
}
*/

