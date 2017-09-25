import { hasBlock } from './has';
import { Text, Block, Inline } from 'slate';
import createBlock from './create-block';

export default (value, node, props) => {
  let { defaultNodes } = node;
  const { type, isVoid, isAtomic, onInsert } = node;
  const defaultNode = 'paragraph';

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
    } else {
      const block = createBlock(node, props);
      if (block && Block.isBlock(block)) {
        transform = transform.insertBlock(node);
      } else if (block && Inline.isInline(block)) {
        transform = transform.insertInline(node);
      }
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

  const changed = onInsert && onInsert(transform);
  if (changed) {
    return changed;
  }
  return transform;
};
