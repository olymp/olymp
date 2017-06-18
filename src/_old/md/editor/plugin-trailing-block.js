import Block from 'slate/lib/models/block';
import Text from 'slate/lib/models/text';
import focusAtEnd from './utils/focus-at-end';

function TrailingBlock(opts) {
  opts = opts || {};
  opts.type = opts.type || 'paragraph';
  opts.match = opts.match || (node => node.type === opts.type);

  return {
    schema: {
      rules: [
        {
          match(node) {
            return node.kind === 'document';
          },
          validate(node) {
            const lastNode = node.nodes.last();

            return !lastNode || !opts.match(lastNode) ? true : null;
          },
          normalize(transform, node, value) {
            const lastIndex = node.nodes.count();
            const block = Block.create({
              type: opts.type,
              nodes: [Text.create()],
            });

            return transform.insertNodeByKey(node.key, lastIndex, block);
          },
        },
      ],
    },

    transforms: {
      focusAtEnd,
    },
  };
}

export default TrailingBlock;
