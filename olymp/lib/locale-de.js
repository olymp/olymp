'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moment = exports.withLocale = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _en_US = require('antd/lib/locale-provider/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

var _localeProvider = require('antd/lib/locale-provider');

var _localeProvider2 = _interopRequireDefault(_localeProvider);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/de');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('de');

var withLocale = exports.withLocale = function withLocale(WrappedComponent) {
  return function (props) {
    return _react2.default.createElement(
      _localeProvider2.default,
      { locale: _en_US2.default },
      _react2.default.createElement(WrappedComponent, props)
    );
  };
};

var moment = exports.moment = function moment(x1, x2, x3, x4, x5) {
  return (0, _moment2.default)(x1, x2, x3, x4, x5).utcOffset('+01:00');
};

exports.default = function (props) {
  return _react2.default.createElement(
    _localeProvider2.default,
    { locale: _en_US2.default },
    props.children
  );
};