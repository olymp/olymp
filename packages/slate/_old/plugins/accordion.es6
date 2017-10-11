import ShortID from 'shortid';

const Slate = require('slate');

/**
 * Slate plugin to ensure a trailing block.
 * @param {Object} [opts] Options for the plugin
 * @param {String|Function} [opts.match='paragraph'] Match last block
 * @param {String} [opts.type] The type of the trailing block to insert
 * @return {Object}
 */

function Accordion(opts) {
  opts = opts || {};
  opts.type = opts.type || 'paragraph';
  opts.match = opts.match || (node => node.type === opts.type);

  return {
    schema: {
      rules: [
        {
          match(node) {
            return Slate.Block.isBlock(node) && node.type === 'accordion' && !node.data.get('id');
          },
          validate(node) {
            return [];
          },
          normalize(change, node, invalidNodes) {
            change.setNodeByKey(node.key, {
              data: node.data.set('id', ShortID.generate().substr(0, 4)),
            });
            console.log('CHANGED', node);
            return change;
          },
        },
      ],
    },
  };
}

export default Accordion;
