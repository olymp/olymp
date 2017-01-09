'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthLogin = function (_Component) {
  _inherits(AuthLogin, _Component);

  function AuthLogin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AuthLogin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AuthLogin.__proto__ || Object.getPrototypeOf(AuthLogin)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      email: null,
      password: null
    }, _this.confirm = function (key) {
      _this.props.auth.confirm(key).then(function (user) {
        window.addSuccess('Registrierung abgeschlossen', 'Sie können sich jetzt anmelden');
        _this.props.onDone({ email: user.email });
      }).catch(function (err) {
        window.addDanger('Fehler', err.message);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AuthLogin, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.activationKey) {
        this.confirm(this.props.activationKey);
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(props) {
      if (props.activationKey && !this.props.activationKey) {
        this.confirm(props.activationKey);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onClose = _props.onClose,
          activationKey = _props.activationKey;


      return _react2.default.createElement(
        Modal,
        { title: 'Bestätigen', onClose: onClose },
        activationKey ? _react2.default.createElement(
          'p',
          null,
          'Wird best\xE4tigt ...'
        ) : null,
        !activationKey ? _react2.default.createElement(
          'p',
          null,
          'Eine E-Mail wurde von diego.one an Sie verschickt. Mit einem Klick auf den Link in dieser E-Mail best\xE4tigen Sie die Registrierung, dann k\xF6nnen Sie loslegen.'
        ) : null
      );
    }
  }]);

  return AuthLogin;
}(_react.Component);

exports.default = AuthLogin;