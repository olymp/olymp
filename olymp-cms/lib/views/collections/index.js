'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _list = require('./list');

Object.defineProperty(exports, 'CollectionList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_list).default;
  }
});

var _detail = require('./detail');

Object.defineProperty(exports, 'CollectionDetail', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_detail).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }