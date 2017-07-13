import Block from 'slate/lib/models/block';
import Text from 'slate/lib/models/text';
import focusAtEnd from './utils/focus-at-end';
function TrailingBlock(opts) {
    opts = opts || {};
    opts.type = opts.type || 'paragraph';
    opts.match = opts.match || (function (node) { return node.type === opts.type; });
    return {
        schema: {
            rules: [
                {
                    match: function (node) {
                        return node.kind === 'document';
                    },
                    validate: function (node) {
                        var lastNode = node.nodes.last();
                        return (!lastNode || !opts.match(lastNode)) ?
                            true : null;
                    },
                    normalize: function (transform, node, value) {
                        var lastIndex = node.nodes.count();
                        var block = Block.create({
                            type: opts.type,
                            nodes: [Text.create()]
                        });
                        return transform.insertNodeByKey(node.key, lastIndex, block);
                    }
                }
            ]
        },
        transforms: {
            focusAtEnd: focusAtEnd
        }
    };
}
export default TrailingBlock;
//# sourceMappingURL=plugin-trailing-block.js.map