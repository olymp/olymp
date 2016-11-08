let sortBy = require('lodash/sortBy');

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

module.exports = unflatten;
