const Slate = require('slate');

/**
 * Slate plugin to ensure a trailing block.
 * @param {Object} [opts] Options for the plugin
 * @param {String|Function} [opts.match='paragraph'] Match last block
 * @param {String} [opts.type] The type of the trailing block to insert
 * @return {Object}
 */

function NoParagrapher(opts) {
  opts = opts || {};
  opts.type = opts.type || 'paragraph';
  opts.match = opts.match || (node => node.type === opts.type);

  return {
    schema: {
      rules: [
        {
          match(node) {
            return (
              Slate.Block.isBlock(node) &&
              node.isVoid === false &&
              (node.type === 'paragraph' ||
                node.type === 'block-quote' ||
                node.type === 'link' ||
                node.type === 'bulleted-list' ||
                node.type === 'bulleted-list-item' ||
                node.type.indexOf('heading') === 0 ||
                node.type === 'numbered-list' ||
                node.type === 'numbered-list-item')
            );
          },
          validate(node) {
            const invalidNodes = node.nodes.filter(
              x => Slate.Block.isBlock(x) && x.type === 'paragraph',
            );
            return invalidNodes.size === 0 ? null : invalidNodes;
          },
          normalize(change, node, invalidNodes) {
            invalidNodes.forEach(x => change.unwrapNodeByKey(x.key));
            return change;
          },
        },
      ],
    },
  };
}

export default NoParagrapher;
