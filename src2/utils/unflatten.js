const sortBy = require('lodash/sortBy');

const unflatten = (items, { id = 'id', parentId = 'parentId', mapper = item => item }, parent = null, level = 0) => {
  let children = items
    .filter(item => item[parentId] === parent)
    .map(item => mapper(
      item,
      parent ? items.filter(x => x[id] === parent)[0] : null
    ));

  // Sortieren nach Order-Nummer
  children = sortBy(children, [item => item.order]);

  // Rekursion
  children.forEach((item) => {
    item.children = unflatten(items, { id, parentId, mapper }, item[id], level + 1);
  });

  return children;
};

module.exports = unflatten;
