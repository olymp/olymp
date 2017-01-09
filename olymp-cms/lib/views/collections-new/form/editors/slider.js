'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === undefined ? [] : _ref$value;

  return _react2.default.createElement(
    'div',
    null,
    value.map(function (v, i) {
      return _react2.default.createElement(
        'div',
        { style: { marginBottom: '30px' }, key: i },
        _react2.default.createElement(_antd.Slider, { marks: { 8: '08:00', 13: '13:00', 18: '18:00' }, range: 3, min: 7, max: 19, step: 0.5,
          tipFormatter: function tipFormatter(v) {
            return v % 1 === 0 ? v + ':00' : Math.floor(v) + ':30';
          } })
      );
    })
  );
};