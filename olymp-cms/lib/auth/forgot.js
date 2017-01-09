'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterV4DecodeUri = require('react-router-v4-decode-uri');

var _withAuth = require('./with-auth');

var _withAuth2 = _interopRequireDefault(_withAuth);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthForgot = (0, _withAuth2.default)(_class = function (_Component) {
  _inherits(AuthForgot, _Component);

  function AuthForgot(props) {
    _classCallCheck(this, AuthForgot);

    var _this = _possibleConstructorReturn(this, (AuthForgot.__proto__ || Object.getPrototypeOf(AuthForgot)).call(this, props));

    _this.save = function () {
      var _this$props = _this.props,
          auth = _this$props.auth,
          onClose = _this$props.onClose;
      var email = _this.state.email;

      auth.forgot(email).then(function (user) {
        _antd.notification.success({ message: 'Reset abgeschickt', description: 'Bitte Mails checken!' });
        onClose();
      }).catch(function (err) {
        _antd.notification.error({ message: 'Reset fehlgeschlagen', description: err.message });
      });
    };

    _this.state = {
      email: props.email
    };
    return _this;
  }

  _createClass(AuthForgot, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          onClose = _props.onClose,
          pathname = _props.pathname;
      var email = this.state.email;


      var buttons = [_react2.default.createElement(
        _reactRouterV4DecodeUri.Link,
        { key: '0', className: 'pull-left', style: { marginTop: '5px' }, to: { pathname: pathname, query: { login: email || null } } },
        'Zur\xFCck zur Anmeldung'
      ), _react2.default.createElement(
        'span',
        { key: '0.5' },
        '\xA0'
      ), _react2.default.createElement(
        Button,
        { key: '1', color: 'secondary', onClick: onClose },
        'Abbruch'
      ), _react2.default.createElement(
        'span',
        { key: '1.5' },
        '\xA0'
      ), _react2.default.createElement(
        Button,
        { key: '2', disabled: !email, color: 'primary', onClick: this.save },
        'Abschicken'
      )];

      return _react2.default.createElement(
        Modal,
        { title: 'Passwort vergessen', buttons: buttons, onClose: onClose },
        _react2.default.createElement(
          Form,
          null,
          _react2.default.createElement(
            FormGroup,
            { row: true },
            _react2.default.createElement(
              Label,
              { sm: 4 },
              'E-Mail'
            ),
            _react2.default.createElement(
              Col,
              { sm: 8 },
              _react2.default.createElement(Input, { id: 'email', type: 'text', name: 'email', placeholder: 'max@mustermann.de', value: email || '', onChange: function onChange(v) {
                  return _this2.setState({ email: v || null });
                }, className: 'uk-width-1-1' })
            )
          )
        )
      );
    }
  }]);

  return AuthForgot;
}(_react.Component)) || _class;

exports.default = AuthForgot;