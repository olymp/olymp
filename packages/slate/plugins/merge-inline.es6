const Slate = require('slate');

/**
 * Slate plugin to ensure a trailing block.
 * @param {Object} [opts] Options for the plugin
 * @param {String|Function} [opts.match='paragraph'] Match last block
 * @param {String} [opts.type] The type of the trailing block to insert
 * @return {Object}
 */

function Paragrapher(opts) {
  opts = opts || {};
  opts.type = opts.type || 'paragraph';
  opts.match = opts.match || (node => node.type === opts.type);

  return {
    schema: {
      rules: [
        {
          match(node) {
            return Slate.Inline.isInline(node) && (!node.parent || node.parent.type!=='paragraph');
          },
          validate(node) {
            return [];
          },
          normalize(change, node, invalidNodes) {
            change.setNodeByKey(
              x.key,
              'paragraph',
            ),
            return change;
          },
        },
      ],
    },
  };
}

export default Paragrapher;
