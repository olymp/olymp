'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olymp = require('olymp');

var _form = require('./form');

require('./detail.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainDetail = (_dec = (0, _olymp.withItem)({}), (0, _olymp.withCollection)(_class = _dec(_class = function (_Component) {
  _inherits(MainDetail, _Component);

  function MainDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MainDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MainDetail.__proto__ || Object.getPrototypeOf(MainDetail)).call.apply(_ref, [this].concat(args))), _this), _this.handleCancel = function () {
      _this.props.onClose();
    }, _this.handleCreate = function () {
      var _this$props = _this.props,
          save = _this$props.save,
          onClose = _this$props.onClose;

      var form = _this.form;
      form.validateFields(function (err, values) {
        if (err) {
          return;
        }

        // console.log('Received values of form: ', values);
        save(values, { commit: false }).then(onClose);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MainDetail, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var item = this.props.item;

      if (!item) return null;
      return _react2.default.createElement(_form.Form, _extends({}, this.props, {
        ref: function ref(form) {
          return _this2.form = form;
        },
        onCancel: this.handleCancel,
        onCreate: this.handleCreate
      }));
    }
  }]);

  return MainDetail;
}(_react.Component)) || _class) || _class);
exports.default = MainDetail;