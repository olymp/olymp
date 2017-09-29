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
            return Slate.Block.isBlock(node) && node.type !== 'paragraph' && node.isVoid === false;
          },
          validate(node) {
            const invalidNodes = node.nodes.filter(x => Slate.Text.isText(x) && x.text.length > 0);
            return invalidNodes.size === 0 ? null : invalidNodes;
          },
          normalize(change, node, invalidNodes) {
            invalidNodes.forEach(x =>
              change.wrapBlockByKey(
                x.key,
                Slate.Block.create({
                  type: opts.type,
                }),
              ),
            );

            return change;
          },
        },
      ],
    },
  };
}

module.exports = Paragrapher;
