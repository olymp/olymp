'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n        query verify {\n          user: verifyCookie {\n            ', '\n          }\n        }\n      '], ['\n        query verify {\n          user: verifyCookie {\n            ', '\n          }\n        }\n      ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        mutation logout {\n          logoutCookie\n        }\n      '], ['\n        mutation logout {\n          logoutCookie\n        }\n      ']),
    _templateObject3 = _taggedTemplateLiteral(['\n        mutation forgot {\n          forgot(email:"', '")\n        }\n      '], ['\n        mutation forgot {\n          forgot(email:"', '")\n        }\n      ']),
    _templateObject4 = _taggedTemplateLiteral(['\n        mutation reset {\n          reset(token:"', '", password:"', '")\n        }\n      '], ['\n        mutation reset {\n          reset(token:"', '", password:"', '")\n        }\n      ']),
    _templateObject5 = _taggedTemplateLiteral(['\n        mutation login {\n          user: loginCookie(email:"', '", password:"', '") {\n            ', '\n          }\n        }\n      '], ['\n        mutation login {\n          user: loginCookie(email:"', '", password:"', '") {\n            ', '\n          }\n        }\n      ']),
    _templateObject6 = _taggedTemplateLiteral(['\n        mutation register($user: userInput) {\n          register(input: $user, password: "', '")\n        }\n      '], ['\n        mutation register($user: userInput) {\n          register(input: $user, password: "', '")\n        }\n      ']),
    _templateObject7 = _taggedTemplateLiteral(['\n        query checkToken {\n          checkToken(token:"', '")\n        }\n      '], ['\n        query checkToken {\n          checkToken(token:"', '")\n        }\n      ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var baseAttributes = 'id, name, email';
var attributes = baseAttributes;

var auth = exports.auth = function auth(obj) {
  return function (WrappedComponent) {
    var _class, _temp;

    if (obj && obj.extraAttributes) attributes = baseAttributes + ', ' + obj.extraAttributes;
    var inner = function inner(WrappedComponent) {
      var component = function component(props) {
        var auth = _extends({
          user: props.data.user,
          loading: props.data.loading
        }, authMethods(props.client, props.data.refetch));
        return _react2.default.createElement(WrappedComponent, _extends({ auth: auth }, props));
      };
      return (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject, attributes), {
        // forceFetch: true,
      })((0, _reactApollo.withApollo)(component));
    };
    var UserProvider = (_temp = _class = function (_Component) {
      _inherits(UserProvider, _Component);

      function UserProvider() {
        _classCallCheck(this, UserProvider);

        return _possibleConstructorReturn(this, (UserProvider.__proto__ || Object.getPrototypeOf(UserProvider)).apply(this, arguments));
      }

      _createClass(UserProvider, [{
        key: 'getChildContext',
        value: function getChildContext() {
          return {
            auth: this.props.auth
          };
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, this.props);
        }
      }]);

      return UserProvider;
    }(_react.Component), _class.childContextTypes = {
      auth: _react2.default.PropTypes.object
    }, _temp);
    return inner(UserProvider);
  };
};

exports.default = function (WrappedComponent) {
  var withUserRenderer = function withUserRenderer(props, context) {
    return _react2.default.createElement(WrappedComponent, _extends({}, context, props));
  };
  withUserRenderer.contextTypes = {
    auth: _react2.default.PropTypes.object
  };
  return withUserRenderer;
};

/////////////////


var authMethods = function authMethods(client, refetch) {
  return {
    logout: function logout() {
      return client.mutate({
        mutation: (0, _graphqlTag2.default)(_templateObject2)
      }).then(function (_ref) {
        var data = _ref.data;

        if (refetch) refetch({});
      });
    },
    forgot: function forgot(email) {
      return client.mutate({
        mutation: (0, _graphqlTag2.default)(_templateObject3, email)
      }).then(function (_ref2) {
        var data = _ref2.data;

        return data.forgot;
      });
    },
    reset: function reset(token, password) {
      if (typeof localStorage === 'undefined') return;
      return client.mutate({
        mutation: (0, _graphqlTag2.default)(_templateObject4, token, password)
      }).then(function (_ref3) {
        var data = _ref3.data;

        return data.reset;
      }).catch(function (err) {});
    },
    login: function login(email, password) {
      if (typeof localStorage === 'undefined') return;
      return client.mutate({
        mutation: (0, _graphqlTag2.default)(_templateObject5, email, password, attributes)
      }).then(function (_ref4) {
        var data = _ref4.data;
        var user = data.user;

        if (refetch) refetch({});
        return user;
      }).catch(function (err) {});
    },
    register: function register(user, password) {
      return client.mutate({
        mutation: (0, _graphqlTag2.default)(_templateObject6, password), variables: { user: user }
      }).then(function (_ref5) {
        var data = _ref5.data;

        return data.register;
      });
    },
    checkToken: function checkToken(key) {
      return client.mutate({
        query: (0, _graphqlTag2.default)(_templateObject7, key)
      }).then(function (_ref6) {
        var data = _ref6.data;

        return data.checkToken;
      });
    }
  };
};