import { hasBlock } from './has';
import { Raw, Block } from 'slate';
const createP = () =>
  Raw.deserializeNode({
    kind: 'block',
    type: 'line',
    nodes: [{ kind: 'text', text: '', ranges: [] }],
  });

export default (
  value,
  { type, isVoid, isAtomic, defaultNodes },
  { defaultNode }
) => {
  console.log(defaultNodes, isAtomic);
  if (!defaultNode) {
    defaultNode = 'line';
  }

  let transform = value.transform();
  const { document, blocks } = value;

  // Handle everything but list buttons.
  if (type !== 'bulleted-list' && type !== 'numbered-list') {
    const isActive = hasBlock(value, type);
    const isList =
      hasBlock(value, 'bulleted-list-item') ||
      hasBlock(value, 'numbered-list-item');

    if (isList) {
      transform = transform
        .setBlock(isActive ? defaultNode : type)
        .unwrapBlock('bulleted-list')
        .unwrapBlock('numbered-list');
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
    const isList =
      hasBlock(value, 'bulleted-list-item') ||
      hasBlock(value, 'numbered-list-item');
    const isType = blocks.some(
      block => !!document.getClosest(block, parent => parent.type === type)
    );

    if (isList && isType) {
      transform = transform
        .setBlock(defaultNode)
        .unwrapBlock('bulleted-list')
        .unwrapBlock('numbered-list');
    } else if (isList) {
      transform = transform
        .unwrapBlock(
          type === 'bulleted-list' ? 'bulleted-list' : 'numbered-list'
        )
        .wrapBlock(type);
    } else {
      transform = transform
        .setBlock(
          type === 'bulleted-list' ? 'bulleted-list-item' : 'numbered-list-item'
        )
        .wrapBlock(type);
    }
  }

  return transform.apply();
};
