const blocks = {};

const add = block => {
  if (!block.type) {
    throw new Error('Invalid block');
  }
  blocks[block.type] = block;
};

const addAll = (...args) => args.forEach(add);

export default {
  add: addAll,
  remove: () => null,
  blocks,
};
