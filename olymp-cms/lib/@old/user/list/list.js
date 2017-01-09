'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _edits = require('../../../edits');

var _reactRouterV4DecodeUri = require('react-router-v4-decode-uri');

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_Component) {
  _inherits(User, _Component);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      willDelete: false
    }, _this.del = function () {
      _this.setState({ willDelete: false });
      _this.props.del();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(User, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          image = _props.image,
          name = _props.name,
          description = _props.description,
          isAdmin = _props.isAdmin,
          isActive = _props.isActive,
          isMyself = _props.isMyself,
          patch = _props.patch,
          del = _props.del;
      var willDelete = this.state.willDelete;


      return _react2.default.createElement(
        'tr',
        { key: id, className: isMyself ? 'warning' : '' },
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'h4',
            { className: 'ui image header' },
            image ? _react2.default.createElement('img', { src: image.url, className: 'ui mini rounded image' }) : null,
            _react2.default.createElement(
              'div',
              { className: 'content' },
              name,
              _react2.default.createElement(
                'div',
                { className: 'sub header' },
                description
              )
            )
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'center aligned' },
          _react2.default.createElement(_edits.Check, { value: isAdmin, updateValue: function updateValue(value) {
              return patch({ isAdmin: value });
            },
            disabled: isMyself
          })
        ),
        _react2.default.createElement(
          'td',
          { className: 'center aligned' },
          _react2.default.createElement(_edits.Check, { value: isActive, updateValue: function updateValue(value) {
              return patch({ isActive: value });
            },
            disabled: isMyself
          })
        ),
        _react2.default.createElement(
          'td',
          { className: 'right aligned' },
          _react2.default.createElement(
            _reactRouterV4DecodeUri.Link,
            { to: '/c/user/' + id, className: 'ui icon primary button' },
            _react2.default.createElement('i', { className: 'edit icon' })
          )
        ),
        !isMyself ? _react2.default.createElement(
          'td',
          null,
          !willDelete ? _react2.default.createElement(
            'button',
            { className: 'ui icon red button', onClick: function onClick() {
                return _this2.setState({ willDelete: true });
              } },
            _react2.default.createElement('i', { className: 'trash icon' })
          ) : _react2.default.createElement(
            'button',
            { className: 'ui red button', onClick: this.del },
            'Wirklich?'
          )
        ) : _react2.default.createElement('td', null)
      );
    }
  }]);

  return User;
}(_react.Component);

var Users = function (_Component2) {
  _inherits(Users, _Component2);

  function Users() {
    _classCallCheck(this, Users);

    return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).apply(this, arguments));
  }

  _createClass(Users, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          users = _props2.users,
          userId = _props2.userId,
          edit = _props2.edit,
          _del = _props2.del;


      if (!users) {
        return _react2.default.createElement('div', { className: 'ui vertical segment loading' });
      }
      var userMap = users.map(function (user) {
        return _react2.default.createElement(User, _extends({}, user, { isMyself: userId == user.id, del: function del() {
            return _del(user);
          },
          patch: function patch(_patch) {
            return edit(_extends({}, user, _patch));
          }, key: user.id
        }));
      });

      return _react2.default.createElement(
        'div',
        { className: 'ui container' },
        _react2.default.createElement(
          'div',
          { className: 'ui vertical segment' },
          _react2.default.createElement(
            'table',
            { className: 'ui very basic table' },
            _react2.default.createElement(
              'thead',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement('th', null),
                _react2.default.createElement(
                  'th',
                  { className: 'center aligned' },
                  'Admin'
                ),
                _react2.default.createElement(
                  'th',
                  { className: 'center aligned' },
                  'Aktiv'
                ),
                _react2.default.createElement('th', null),
                _react2.default.createElement('th', null)
              )
            ),
            _react2.default.createElement(
              'tbody',
              null,
              userMap
            ),
            _react2.default.createElement(
              'tfoot',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement('th', null),
                _react2.default.createElement('th', null),
                _react2.default.createElement('th', null),
                _react2.default.createElement('th', { width: 50 }),
                _react2.default.createElement(
                  'th',
                  { width: 150 },
                  _react2.default.createElement(
                    _reactRouterV4DecodeUri.Link,
                    { to: "/c/user/new", className: 'ui icon green button' },
                    _react2.default.createElement('i', { className: 'plus icon' })
                  )
                )
              )
            )
          ),
          children
        )
      );
    }
  }]);

  return Users;
}(_react.Component);

//export default observer(Users);


exports.default = Users;