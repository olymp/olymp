'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _container = require('./container');

Object.defineProperty(exports, 'ErrorContainer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_container).default;
  }
});

var _ = require('./404');

Object.defineProperty(exports, 'Error404', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }