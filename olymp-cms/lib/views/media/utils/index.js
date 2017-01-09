'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getColors = require('./get-colors');

Object.defineProperty(exports, 'getColors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getColors).default;
  }
});

var _getImages = require('./get-images');

Object.defineProperty(exports, 'getImages', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getImages).default;
  }
});

var _getTags = require('./get-tags');

Object.defineProperty(exports, 'getTags', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getTags).default;
  }
});

var _upload = require('./upload');

Object.defineProperty(exports, 'upload', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_upload).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }