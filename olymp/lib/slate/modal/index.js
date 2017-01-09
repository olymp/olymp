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

var _editor = require('../editor');

var _editor2 = _interopRequireDefault(_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var modalSettings = { visible: true, okText: 'Speichern', cancelText: 'Abbruch', wrapClassName: 'fullscreen-wrap', className: 'fullscreen frontend' };

var SlateModal = function (_Component) {
  _inherits(SlateModal, _Component);

  function SlateModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SlateModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SlateModal.__proto__ || Object.getPrototypeOf(SlateModal)).call.apply(_ref, [this].concat(args))), _this), _this.handleCancel = function () {
      var onClose = _this.props.onClose;

      onClose();
    }, _this.handleCreate = function () {
      var onClose = _this.props.onClose;

      onClose(_this.value);
    }, _this.onChange = function (value) {
      _this.value = value;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SlateModal, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _antd.Modal,
        _extends({}, modalSettings, {
          title: 'Text',
          onCancel: this.handleCancel,
          onCreate: this.handleCreate,
          footer: [_react2.default.createElement(
            _antd.Button,
            { key: 'back', type: 'ghost', size: 'large', onClick: this.handleCancel },
            'Abbrechen'
          ), _react2.default.createElement(
            _antd.Button,
            { key: 'submit', type: 'primary', size: 'large', onClick: this.handleCreate },
            'Speichern'
          )]
        }),
        _react2.default.createElement(_editor2.default, _extends({ className: 'frontend-editor' }, this.props, { onChange: this.onChange }))
      );
    }
  }]);

  return SlateModal;
}(_react.Component);

exports.default = SlateModal;