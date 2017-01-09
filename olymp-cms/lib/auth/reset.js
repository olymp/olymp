'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _templateObject = _taggedTemplateLiteral(['\n  query checkToken($token: String) {\n    checkToken(token: $token)\n  }\n'], ['\n  query checkToken($token: String) {\n    checkToken(token: $token)\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _antd = require('antd');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _withAuth = require('./with-auth');

var _withAuth2 = _interopRequireDefault(_withAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AuthReset = (_dec = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject), {
  options: function options(_ref) {
    var token = _ref.token;
    return {
      variables: { token: token }
    };
  }
}), (0, _withAuth2.default)(_class = _dec(_class = function (_Component) {
  _inherits(AuthReset, _Component);

  function AuthReset() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, AuthReset);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = AuthReset.__proto__ || Object.getPrototypeOf(AuthReset)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {}, _this.save = function () {
      var _this$props = _this.props,
          auth = _this$props.auth,
          onClose = _this$props.onClose,
          token = _this$props.token;
      var _this$state = _this.state,
          password = _this$state.password,
          password2 = _this$state.password2;

      if (password !== password2) return;
      auth.reset(token, password).then(function (user) {
        _antd.notification.success({ message: 'Reset erfolgreich', description: 'Wilkommen, ' + user.name });
        onClose();
      }).catch(function (err) {
        _antd.notification.error({ message: 'Reset fehlgeschlagen', description: err.message });
      });
    }, _this.getInner = function () {
      var _this$state2 = _this.state,
          password = _this$state2.password,
          password2 = _this$state2.password2;

      if (_this.props.data.checkToken === undefined) {
        return _react2.default.createElement(LoadingScreen, { style: { minHeight: '200px' } });
      } else if (_this.props.data.checkToken === false) {
        return _react2.default.createElement(
          'p',
          { className: 'text-center' },
          'Best\xE4tigung ung\xFCltig oder abgelaufen.'
        );
      } else if (_this.props.data.checkToken === true) {
        return _react2.default.createElement(
          Form,
          null,
          _react2.default.createElement(
            FormGroup,
            { row: true },
            _react2.default.createElement(
              Label,
              { sm: 4 },
              'Passwort'
            ),
            _react2.default.createElement(
              Col,
              { sm: 8 },
              _react2.default.createElement(Input, { type: 'password', placeholder: 'Passwort', value: password || '', onChange: function onChange(v) {
                  return _this.setState({ password: v || null });
                }, className: 'uk-width-1-1' })
            )
          ),
          _react2.default.createElement(
            FormGroup,
            { row: true },
            _react2.default.createElement(
              Label,
              { sm: 4 },
              'Passwort wiederholen'
            ),
            _react2.default.createElement(
              Col,
              { sm: 8 },
              _react2.default.createElement(Input, { type: 'password', placeholder: 'Passwort', value: password2 || '', onChange: function onChange(v) {
                  return _this.setState({ password2: v || null });
                }, className: 'uk-width-1-1' })
            )
          )
        );
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AuthReset, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onClose = _props.onClose,
          pathname = _props.pathname;
      var _state = this.state,
          password = _state.password,
          password2 = _state.password2;


      var buttons = [_react2.default.createElement(
        Button,
        { key: '1', color: 'secondary', onClick: onClose },
        'Abbruch'
      ), _react2.default.createElement(
        'span',
        { key: '1.5' },
        '\xA0'
      ), _react2.default.createElement(
        Button,
        { key: '2', disabled: !password || password !== password2 || this.props.data.checkToken !== true, color: 'primary', onClick: this.save },
        'Abschicken'
      )];

      return _react2.default.createElement(
        Modal,
        { title: 'Passwort zur\xFCcksetzen', buttons: buttons, onClose: onClose },
        this.getInner()
      );
    }
  }]);

  return AuthReset;
}(_react.Component)) || _class) || _class);
exports.default = AuthReset;