const sortBy = require('lodash/sortBy');

const unflatten = (items, { id, parentId, setPath, pathProp, mapper }, parent, level, currentPath) => {
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
    if (setPath) item[pathProp] = setPath(currentPath, item);
    item.children = unflatten(items, { id, parentId, mapper, pathProp, setPath }, item[id], level + 1, item[pathProp]);
  });

  return children;
};

export default (items, { id = 'id', parentId = 'parentId', setPath, pathProp = 'path', mapper = item => item } = {}, parent = null, level = 0, currentPath = '') => {
  return unflatten(items.map(x => Object.assign({}, x)), { id, parentId, setPath, pathProp, mapper }, parent, level, currentPath);
};
