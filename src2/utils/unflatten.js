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
/*let sortBy = require('lodash/sortBy');

const unflatten = (array, options, parentId, level) => {
  if (!options) options = {};
  if (!options.parentId) options.parentId = 'parentId';
  if (!options.id) options.id = 'id';
  let mapper = options.mapper || (item => item);

  parentId = typeof parentId !== 'undefined' ? parentId : null;
  level = typeof level !== 'undefined' ? level : 0;

  let parent = parentId ? array.filter(x => x[options.id] == parentId)[0] : null;
  let children = array.filter(item => item[options.parentId] == parentId).map(item => mapper(item, parent));
  children = sortBy(children, item => item.order);
  children.forEach(item => {
    item.children = unflatten(array, options, item[options.id], level + 1);
  });
  return children;
};

module.exports = unflatten;*/
