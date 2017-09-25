import { Text, Block, Inline } from 'slate';

const createP = () =>
  ;

const createBlock = (block, props) => {
  let { defaultNodes, kind, type } = block;
  const { isVoid, onInit, key } = block;
  const { blockTypes } = props;
  if (!type) {
    type = key;
  }
  if (!kind && isVoid) {
    kind = 'inline';
  } else if (!kind) {
    kind = 'block';
  }
  if (defaultNodes && typeof defaultNodes === 'function') {
    defaultNodes = defaultNodes();
  }

  let node = {
    type,
    isVoid,
    data: {},
  };
  if (defaultNodes) {
    node.nodes = defaultNodes
      .map((item) => {
        if (typeof item === 'string' && blockTypes[item]) {
          return createBlock(blockTypes[item].slate, props);
        } else if (item.key && blockTypes[item.key]) {
          return createBlock(blockTypes[item.key].slate, props);
        } else if (Block.isBlock(item) || Block.isInline(item)) {
          return item;
        }
        return null;
      })
      .filter(x => x);
  } else if (kind === 'block') {
    node.nodes = [Block.create({
      type: 'paragraph',
      nodes: [Text.create()],
    })];
  } else if (kind === 'inline') {
    node.nodes = [Text.create()];
  }

  const modNode = onInit && onInit(node, props);
  if (modNode) {
    node = modNode;
  }

  if (kind === 'inline') {
    node = Inline.create(node);
  } else if (kind === 'block') {
    node = Block.create(node);
  }

  return node;
};
export default createBlock;
