const sortBy = require('lodash/sortBy');

const unflatten = (
  items,
  { id, parentId, setPath, pathProp, mapper, sort },
  parentItem,
  level,
  currentPath
) => {
  const parent = parentItem ? parentItem[id] : null;
  let children = items
    .filter(item => item[parentId] === parent)
    .map(item =>
      mapper(item, parent ? items.find(x => x[id] === parent) : null)
    );
  if (sort) {
    children = sort(children, parentItem);
  } else {
    // Sortieren nach Order-Nummer
    children = sortBy(children, [item => item.order]);
  }

  // Rekursion
  return children.map((item) => {
    const path = setPath ? setPath(currentPath, item) : undefined;

    return {
      ...item,
      [pathProp]: path,
      children: unflatten(
        items,
        { id, parentId, setPath, pathProp, mapper, sort },
        item,
        level + 1,
        path
      ),
    };
  });
};

export default (
  items,
  {
    id = 'id',
    parentId = 'parentId',
    setPath,
    pathProp = 'path',
    mapper = item => item,
    sort,
  } = {},
  parent = null,
  level = 0,
  currentPath = ''
) =>
  unflatten(
    items,
    { id, parentId, setPath, pathProp, mapper, sort },
    parent,
    level,
    currentPath
  );
