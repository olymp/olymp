'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTree = undefined;

var _lodash = require('lodash');

var makeTree = exports.makeTree = function makeTree(items, propertyName) {
  var results = items ? (0, _lodash.reduce)((0, _lodash.groupBy)(items, propertyName), function (array, children, key) {
    array.push({ id: key + ' (' + children.length + ')', name: '', children: children });
    return array;
  }, []) : null;
  return results;
};