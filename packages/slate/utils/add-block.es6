import { hasBlock } from './has';
import { Text, Block } from 'slate';

const createP = () =>
  Block.create({
    type: 'paragraph',
    nodes: [Text.create()],
  });

export default (value, { type, isVoid, isAtomic, defaultNodes }, { defaultNode }) => {
  if (!defaultNode) {
    defaultNode = 'paragraph';
  }
  if (defaultNodes && typeof defaultNodes === 'function') {
    defaultNodes = defaultNodes();
  }

  let transform = value.change();
  const { document, blocks } = value;

  // Handle everything but list buttons.
  if (type !== 'bulleted-list' && type !== 'numbered-list') {
    const isActive = hasBlock(value, type);
    const isList = hasBlock(value, 'bulleted-list-item') || hasBlock(value, 'numbered-list-item');

    if (isList) {
      transform = transform
        .setBlock(isActive ? defaultNode : type)
        .unwrapBlock('bulleted-list')
        .unwrapBlock('numbered-list');
    } else if (isAtomic) {
      transform = transform.insertInline({
        type,
        isVoid,
        data: {},
        nodes: defaultNodes || Block.createList([createP()]),
      });
    } else if (isAtomic) {
      transform = transform.insertBlock({
        type,
        isVoid,
        data: {},
        nodes: defaultNodes || Block.createList([createP()]),
      });
    } else {
      transform = transform.setBlock(isActive ? defaultNode : type);
    }
  } else {
    // Handle the extra wrapping required for list buttons.
    const isList = hasBlock(value, 'bulleted-list-item') || hasBlock(value, 'numbered-list-item');
    const isType = blocks.some(
      block => !!document.getClosest(block, parent => parent.type === type),
    );

    if (isList && isType) {
      transform = transform
        .setBlock(defaultNode)
        .unwrapBlock('bulleted-list')
        .unwrapBlock('numbered-list');
    } else if (isList) {
      transform = transform
        .unwrapBlock(type === 'bulleted-list' ? 'bulleted-list' : 'numbered-list')
        .wrapBlock(type);
    } else {
      transform = transform
        .setBlock(type === 'bulleted-list' ? 'bulleted-list-item' : 'numbered-list-item')
        .wrapBlock(type);
    }
  }

  return transform;
};
