"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _detail = require("./detail");

var _detail2 = _interopRequireDefault(_detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (_temp = _class = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.patch = function (patch) {
      var user = _this.state.user;

      _this.setState({ user: _extends({}, user, patch) });
    };

    _this.save = function () {
      var user = _this.state.user;
      var store = _this.context.store;


      if (user.password && user.password != user.password2) {
        window.addNotification({
          message: "Die Passwörter stimmen nicht überein.",
          level: "danger",
          title: "Fehler bei Änderung"
        });
      } else {
        delete user.password2;
        store.auth.save(user).then(function (newUser) {
          window.addNotification({
            message: "Die Änderungen an " + newUser.name + " wurden gespeichert.",
            level: "success",
            title: "Änderungen gespeichert"
          });
        }).catch(function (error) {
          return console.error(error);
        });
      }
    };

    _this.state = {
      user: null
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.context.store.auth.loadOne(this.context.store.auth.user.id).then(function (user) {
        _this2.setState({ user: user });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          user = _state.user,
          loading = _state.loading;


      return _react2.default.createElement(
        "div",
        { className: "ui container" + (loading ? " loading" : "") },
        _react2.default.createElement(
          _detail2.default,
          _extends({}, user, { patch: this.patch }),
          _react2.default.createElement(
            "button",
            { className: "ui large green fluid button" + (loading ? ' loading' : ''), onClick: this.save },
            "Speichern"
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component), _class.contextTypes = {
  store: _react.PropTypes.object.isRequired
}, _temp);
exports.default = App;