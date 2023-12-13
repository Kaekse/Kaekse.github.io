import * as Blockly from "blockly";

import * as description from "./para_blocks/description_blocks";
import * as text from "./para_blocks/text_blocks";
import * as options from "./para_blocks/options_blocks";
import * as placeholder from "./para_blocks/placeholder_blocks";
import * as commands from "./para_blocks/command_blocks"
export { description, text, options, placeholder };

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
  description.blocks.concat(text.blocks, options.blocks, placeholder.blocks, commands.blocks)
);
