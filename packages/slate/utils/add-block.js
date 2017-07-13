import { hasBlock } from './has';
import { Raw, Block } from 'slate';
var createP = function () {
    return Raw.deserializeNode({
        kind: 'block',
        type: 'paragraph',
        nodes: [{ kind: 'text', text: '', ranges: [] }],
    });
};
export default function (value, _a, _b) {
    var type = _a.type, isVoid = _a.isVoid, isAtomic = _a.isAtomic, defaultNodes = _a.defaultNodes;
    var defaultNode = _b.defaultNode;
    if (!defaultNode) {
        defaultNode = 'paragraph';
    }
    if (defaultNodes && typeof defaultNodes === 'function') {
        defaultNodes = defaultNodes();
    }
    var transform = value.transform();
    var document = value.document, blocks = value.blocks;
    if (type !== 'bulleted-list' && type !== 'numbered-list') {
        var isActive = hasBlock(value, type);
        var isList = hasBlock(value, 'bulleted-list-item') ||
            hasBlock(value, 'numbered-list-item');
        if (isList) {
            transform = transform
                .setBlock(isActive ? defaultNode : type)
                .unwrapBlock('bulleted-list')
                .unwrapBlock('numbered-list');
        }
        else if (isAtomic) {
            transform = transform.insertBlock({
                type: type,
                isVoid: isVoid,
                data: {},
                nodes: defaultNodes || Block.createList([createP()]),
            });
        }
        else {
            transform = transform.setBlock(isActive ? defaultNode : type);
        }
    }
    else {
        var isList = hasBlock(value, 'bulleted-list-item') ||
            hasBlock(value, 'numbered-list-item');
        var isType = blocks.some(function (block) { return !!document.getClosest(block, function (parent) { return parent.type === type; }); });
        if (isList && isType) {
            transform = transform
                .setBlock(defaultNode)
                .unwrapBlock('bulleted-list')
                .unwrapBlock('numbered-list');
        }
        else if (isList) {
            transform = transform
                .unwrapBlock(type === 'bulleted-list' ? 'bulleted-list' : 'numbered-list')
                .wrapBlock(type);
        }
        else {
            transform = transform
                .setBlock(type === 'bulleted-list' ? 'bulleted-list-item' : 'numbered-list-item')
                .wrapBlock(type);
        }
    }
    return transform.apply();
};
//# sourceMappingURL=add-block.js.map