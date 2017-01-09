'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _detailModal = require('./../detail/detail-modal');

var _detailModal2 = _interopRequireDefault(_detailModal);

var _registerModal = require('./../../auth/register-modal');

var _registerModal2 = _interopRequireDefault(_registerModal);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersWrapper = (_temp2 = _class = function (_Component) {
  _inherits(UsersWrapper, _Component);

  function UsersWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UsersWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UsersWrapper.__proto__ || Object.getPrototypeOf(UsersWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.edit = function (user) {
      var auth = _this.context.store.auth;


      auth.save(user).then(function (newUser) {
        window.addNotification({
          message: "Die Änderungen an " + newUser.name + " wurden gespeichert.",
          level: "success",
          title: "Änderungen gespeichert"
        });
      }).catch(function (error) {
        return console.error(error);
      });

      _this.close();
    }, _this.add = function (user) {
      var _this$context = _this.context,
          store = _this$context.store,
          router = _this$context.router;


      var name = user.name;
      var email = user.email;
      var password = user.password;
      var password2 = user.password2;

      if (password != password2) {
        window.addNotification({
          message: "Die Passwörter stimmen nicht überein.",
          level: "danger",
          title: "Fehler bei Registrierung"
        });
      } else if (!password) {
        window.addNotification({
          message: "Es wurde kein Passwort angegeben.",
          level: "danger",
          title: "Fehler bei Registrierung"
        });
      } else if (!email) {
        window.addNotification({
          message: "Es wurde keine E-Mail-Adresse angegeben.",
          level: "danger",
          title: "Fehler bei Registrierung"
        });
      } else if (!name) {
        window.addNotification({
          message: "Es wurde kein Name angegeben.",
          level: "danger",
          title: "Fehler bei Registrierung"
        });
      } else {
        store.auth.register(name, email, password, true).then(function (user) {
          router.push('/c/users');
          window.addNotification({
            message: "Erfolgreich angelegt!",
            level: "success",
            title: "User-Anlegen erfolgreich"
          });
        }).catch(function (err) {
          window.addNotification({
            message: "User konnte nicht angelegt werden, bitte erneut versuchen!",
            level: "danger",
            title: "User-Anlegen fehlgeschlagen"
          });
        });
      }

      _this.close();
    }, _this.del = function (user) {
      var auth = _this.context.store.auth;


      auth.del(user.id).then(function () {
        window.addNotification({
          message: "Benutzer " + user.name + " wurde gelöscht.",
          level: "success",
          title: "Benutzer gelöscht!"
        });
      }).catch(function (error) {
        return console.error(error);
      });
    }, _this.close = function () {
      var push = _this.context.router.push;


      push({ pathname: '/c/users', query: _extends({}, _this.props.location.query) });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UsersWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.context.store.auth.loadUsers();
    }
  }, {
    key: 'render',
    value: function render() {
      var auth = this.context.store.auth;
      var params = this.props.params;


      return auth.user && auth.user.id ? _react2.default.createElement(
        _list2.default,
        { users: auth.users, userId: auth.user.id, edit: this.edit, del: this.del },
        params.id && params.id !== "new" ? _react2.default.createElement(_detailModal2.default, _extends({}, this.props, {
          save: this.edit,
          close: this.close })) : null,
        params.id === "new" ? _react2.default.createElement(_registerModal2.default, _extends({}, this.props, {
          save: this.add,
          close: this.close })) : null
      ) : _react2.default.createElement('div', null);
    }
  }], [{
    key: 'onEnter',
    value: function onEnter(next, transition, store) {
      if (!store.auth.user.isAdmin) {
        transition("/error");
      }
    }
  }]);

  return UsersWrapper;
}(_react.Component), _class.contextTypes = {
  store: _react.PropTypes.object.isRequired,
  router: _react.PropTypes.object.isRequired
}, _temp2);
exports.default = (0, _mobxReact.observer)(UsersWrapper);