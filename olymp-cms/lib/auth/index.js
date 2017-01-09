'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _register = require('./register');

Object.defineProperty(exports, 'AuthRegister', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_register).default;
  }
});

var _login = require('./login');

Object.defineProperty(exports, 'AuthLogin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_login).default;
  }
});

var _confirm = require('./confirm');

Object.defineProperty(exports, 'AuthConfirm', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_confirm).default;
  }
});

var _forgot = require('./forgot');

Object.defineProperty(exports, 'AuthForgot', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_forgot).default;
  }
});

var _reset = require('./reset');

Object.defineProperty(exports, 'AuthReset', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reset).default;
  }
});

var _invite = require('./invite');

Object.defineProperty(exports, 'AuthInvite', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_invite).default;
  }
});

var _withAuth = require('./with-auth');

Object.defineProperty(exports, 'auth', {
  enumerable: true,
  get: function get() {
    return _withAuth.auth;
  }
});
Object.defineProperty(exports, 'setAuthFields', {
  enumerable: true,
  get: function get() {
    return _withAuth.setAuthFields;
  }
});
Object.defineProperty(exports, 'withAuth', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withAuth).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }