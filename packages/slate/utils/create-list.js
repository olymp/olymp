import { Block, Raw } from 'slate';
var empty = function () {
    return Raw.deserializeNode({
        kind: 'block',
        type: 'paragraph',
        nodes: [{ kind: 'text', text: '', ranges: [] }],
    });
};
export default function (items) {
    return Block.createList(items
        .map(function (item) {
        if (!item) {
            return empty();
        }
        else if (item.component && item.key) {
            var block = { type: item.key, kind: 'block' };
            if (!item.editable) {
                block.isVoid = true;
            }
            else {
                block.nodes = Block.createList([empty()]);
            }
            return block;
        }
    })
        .filter(function (x) { return x; }));
};
//# sourceMappingURL=create-list.js.map