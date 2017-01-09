'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterV4DecodeUri = require('react-router-v4-decode-uri');

var _antd = require('antd');

var _withAuth = require('./with-auth');

var _withAuth2 = _interopRequireDefault(_withAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;
var modalSettings = { visible: true, style: { top: 20 }, okText: 'Login', cancelText: 'Abbruch', transitionName: 'fade', maskTransitionName: 'fade' };
var formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 20 } };

var ModalForm = (_dec = _antd.Form.create(), _dec(_class = function (_Component) {
  _inherits(ModalForm, _Component);

  function ModalForm() {
    _classCallCheck(this, ModalForm);

    return _possibleConstructorReturn(this, (ModalForm.__proto__ || Object.getPrototypeOf(ModalForm)).apply(this, arguments));
  }

  _createClass(ModalForm, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          email = _props.email,
          form = _props.form,
          onCreate = _props.onCreate,
          onCancel = _props.onCancel,
          saving = _props.saving,
          pathname = _props.pathname;
      var getFieldDecorator = form.getFieldDecorator;


      return _react2.default.createElement(
        _antd.Modal,
        _extends({}, modalSettings, { confirmLoading: saving, title: 'Anmelden', onCancel: onCancel, onOk: onCreate }),
        _react2.default.createElement(
          FormItem,
          _extends({ key: 'email', label: 'E-Mail' }, formItemLayout),
          getFieldDecorator('email', {
            initialValue: email,
            rules: [{ required: true, message: 'Bitte geben Sie Ihre E-Mail an!' }]
          })(_react2.default.createElement(_antd.Input, {
            size: 'large',
            addonBefore: _react2.default.createElement('i', { className: 'fa fa-envelope-o' }),
            type: 'email',
            placeholder: 'E-Mail',
            onKeyPress: function onKeyPress(element) {
              if (element.key === 'Enter' && typeof _this2 !== 'undefined') {
                return _this2.input && _this2.input.refs.input && _this2.input.refs.input.focus();
              }

              return false;
            }
          }))
        ),
        _react2.default.createElement(
          FormItem,
          _extends({ key: 'password', label: 'Name' }, formItemLayout),
          getFieldDecorator('password', {
            rules: [{ required: true, message: 'Bitte das Passwort angeben!' }]
          })(_react2.default.createElement(_antd.Input, {
            size: 'large',
            addonBefore: _react2.default.createElement('i', { className: 'fa fa-lock' }),
            type: 'password',
            placeholder: 'Password',
            onKeyPress: function onKeyPress(element) {
              if (element.key === 'Enter') {
                onCreate();
              }
            },
            ref: function ref(input) {
              _this2.input = input;
            }
          }))
        ),
        _react2.default.createElement(
          _reactRouterV4DecodeUri.Link,
          { to: { pathname: pathname, query: { forgot: null } } },
          'Passwort vergessen?'
        )
      );
    }
  }]);

  return ModalForm;
}(_react.Component)) || _class);

var AuthLogin = (0, _withAuth2.default)(_class2 = function (_Component2) {
  _inherits(AuthLogin, _Component2);

  function AuthLogin() {
    var _ref;

    var _temp, _this3, _ret;

    _classCallCheck(this, AuthLogin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, (_ref = AuthLogin.__proto__ || Object.getPrototypeOf(AuthLogin)).call.apply(_ref, [this].concat(args))), _this3), _this3.handleCancel = function () {
      _this3.props.onClose();
    }, _this3.handleCreate = function () {
      var _this3$props = _this3.props,
          auth = _this3$props.auth,
          onClose = _this3$props.onClose;

      var form = _this3.form;
      form.validateFields(function (err, values) {
        if (err) return;
        auth.login(values.email, values.password).then(function (_ref2) {
          var name = _ref2.name;

          _antd.notification.success({
            message: 'Anmeldung erfolgreich',
            description: 'Wilkommen, ' + name
          });
          onClose();
        }).catch(function (err) {
          _antd.notification.error({
            message: 'Anmeldung fehlgeschlagen',
            description: err.message
          });
        });
      });
    }, _temp), _possibleConstructorReturn(_this3, _ret);
  }

  _createClass(AuthLogin, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(ModalForm, _extends({}, this.props, {
        ref: function ref(form) {
          return _this4.form = form;
        },
        onCancel: this.handleCancel,
        onCreate: this.handleCreate
      }));
    }
  }]);

  return AuthLogin;
}(_react.Component)) || _class2;

exports.default = AuthLogin;