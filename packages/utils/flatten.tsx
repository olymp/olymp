const flatten = (items = [], options = {}) => {
  const flattenArr = [];
  const helper = (node, parent, order) => {
    const newNode = {
      ...node,
      [options.parentId]: parent && parent[options.id],
      order,
    };

    newNode.children.forEach((node, index) => helper(node, newNode, index));
    delete newNode.children;

    flattenArr.push(newNode);
  };

  items.forEach((item, index) =>
    helper(item, null, index, {
      parentId: 'parentId',
      id: 'id',
      ...options,
    })
  );

  return flattenArr;
};

export default (items, options) => flatten(items, options);
