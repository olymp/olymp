import { Text, Block, Inline } from 'slate';
import hasBlock from './utils/has-block';

const addBlock = (value, node, schema, parentKey, index = 0, transform = value.change()) => {
  let { defaultNodes, defaultText } = node;
  const { type, initNode } = node;
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
      if (initNode) {
        node = initNode(node, { value, schema, parentKey, index, transform });
      }
      const block = createBlock(node);

      if (defaultNodes && typeof defaultNodes === 'function') {
        defaultNodes = defaultNodes({ value, node, schema, parentKey, index, transform });
      } else if (!defaultNodes && !block.isVoid) {
        defaultNodes = [Text.create(defaultText)];
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
          if (typeof item === 'string' && schema.nodes[item]) {
            transform = addBlock(
              value,
              schema.nodes[item].slate,
              schema,
              block.key,
              index,
              transform,
            );
          } else if (item.type && schema.nodes[item.type]) {
            transform = addBlock(value, item, schema, block.key, index, transform);
          } else if (Text.isText(item) || Block.isBlock(item) || Inline.isInline(item)) {
            transform = transform.insertNodeByKey(block.key, index, item);
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
    console.log(isList);
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
  const { isVoid, key, kind, data } = block;
  if (!type) {
    type = key;
  }
  if (kind === 'inline' || (!kind && isVoid)) {
    return Inline.create({
      type,
      isVoid,
      kind,
      data: data || {},
    });
  }
  return Block.create({
    type,
    isVoid,
    kind,
    data: data || {},
  });
};
export default addBlock;
