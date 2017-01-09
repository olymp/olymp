'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sortBy = require('lodash/sortBy');

var unflatten = function unflatten(items) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$id = _ref.id,
      id = _ref$id === undefined ? 'id' : _ref$id,
      _ref$parentId = _ref.parentId,
      parentId = _ref$parentId === undefined ? 'parentId' : _ref$parentId,
      setPath = _ref.setPath,
      _ref$pathProp = _ref.pathProp,
      pathProp = _ref$pathProp === undefined ? 'path' : _ref$pathProp,
      _ref$mapper = _ref.mapper,
      mapper = _ref$mapper === undefined ? function (item) {
    return item;
  } : _ref$mapper;

  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var currentPath = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';

  var children = items.filter(function (item) {
    return item[parentId] === parent;
  }).map(function (item) {
    return mapper(item, parent ? items.filter(function (x) {
      return x[id] === parent;
    })[0] : null);
  });

  // Sortieren nach Order-Nummer
  children = sortBy(children, [function (item) {
    return item.order;
  }]);

  // Rekursion
  children.forEach(function (item) {
    if (setPath) item[pathProp] = setPath(currentPath, item);
    item.children = unflatten(items, { id: id, parentId: parentId, mapper: mapper, pathProp: pathProp, setPath: setPath }, item[id], level + 1, item[pathProp]);
  });

  return children;
};

exports.default = unflatten;