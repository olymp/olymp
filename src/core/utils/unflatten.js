const sortBy = require('lodash/sortBy');

const unflatten = (items, { id = 'id', parentId = 'parentId', setPath, pathProp = 'path', mapper = item => item } = {}, parent = null, level = 0, currentPath = '') => {
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

export default unflatten;
