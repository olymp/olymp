import { Text, Block, Inline } from 'slate';
import { hasBlock } from './has';

const addBlock = (value, node, blockTypes, parentKey, index = 0, transform = value.change()) => {
  let { defaultNodes } = node;
  const { type } = node;
  const defaultNode = 'paragraph';

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
      const block = createBlock(node);

      if (defaultNodes && typeof defaultNodes === 'function') {
        defaultNodes = defaultNodes();
      } else if (!defaultNodes && !block.isVoid) {
        defaultNodes = [
          {
            type: 'paragraph',
            nodes: [Text.create()],
          },
        ];
      }

      if (block && block.kind === 'block') {
        transform = parentKey
          ? transform.insertNodeByKey(parentKey, index, block)
          : transform.insertBlock(block);
      } else if (block) {
        transform = parentKey
          ? transform.insertNodeByKey(parentKey, index, block)
          : transform.insertInline(block);
      }

      if (defaultNodes) {
        defaultNodes.forEach((item, index) => {
          if (typeof item === 'string' && blockTypes[item]) {
            transform = addBlock(
              value,
              blockTypes[item].slate,
              blockTypes,
              block.key,
              index,
              transform,
            );
          } else if (item.type && blockTypes[item.type]) {
            transform = addBlock(value, item, blockTypes, block.key, index, transform);
          } else {
            transform =
              block.kind === 'block'
                ? transform.insertNodeByKey(block.key, index, Block.create(item))
                : transform.insertNodeByKey(block.key, index, Inline.create(item));
          }
        });
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

  return transform;
};

const createBlock = (block) => {
  let { type } = block;
  const { isVoid, key, kind } = block;
  if (!type) {
    type = key;
  }
  if (kind === 'inline' || (!kind && isVoid)) {
    return Inline.create({
      type,
      isVoid,
      kind,
      data: {},
    });
  }
  return Block.create({
    type,
    isVoid,
    kind,
    data: {},
  });
};
export default addBlock;
