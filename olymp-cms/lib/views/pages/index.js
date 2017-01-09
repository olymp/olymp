'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _page = require('./page');

Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_page).default;
  }
});

var _modals = require('./modals');

Object.defineProperty(exports, 'PageModal', {
  enumerable: true,
  get: function get() {
    return _modals.PageModal;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }