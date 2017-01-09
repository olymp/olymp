'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePickerInt = function (_Component) {
  _inherits(DatePickerInt, _Component);

  function DatePickerInt() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DatePickerInt);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatePickerInt.__proto__ || Object.getPrototypeOf(DatePickerInt)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (e) {
      var onChange = _this.props.onChange;

      var value = parseInt(e.format('x'));
      onChange(value);
    }, _this.getValue = function () {
      var value = _this.props.value;
      // 2014-09-14T10:32:27.831Z

      if (typeof value === 'string') value = parseInt((0, _moment2.default)(value.replace(/"/g, '')).format('x'));
      return value ? (0, _moment2.default)(value) : undefined;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatePickerInt, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_antd.DatePicker, _extends({}, this.props, { value: this.getValue(), onChange: this.onChange }));
    }
  }]);

  return DatePickerInt;
}(_react.Component);

exports.default = DatePickerInt;