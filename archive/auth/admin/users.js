var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _templateObject = _taggedTemplateLiteral(['\n      query userList {\n        users: userList {\n          id\n          name\n          email\n          isAdmin\n        }\n      }\n    '], ['\n      query userList {\n        users: userList {\n          id\n          name\n          email\n          isAdmin\n        }\n      }\n    ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Sidebar, Menu, Avatar, Container } from 'olymp-fela';
import FaUsers from 'olymp-icons/lib/fa-users';

import { compose, withState } from 'recompose';
import AuthProfile from './profile';

var enhance = compose(graphql(gql(_templateObject)), withState('user', 'setUser', {}));

var _ref = React.createElement(
  Menu.Item,
  { icon: React.createElement(FaUsers, null), large: true },
  'Benutzerverwaltung'
);

var AuthUsers = enhance(_class = function (_Component) {
  _inherits(AuthUsers, _Component);

  function AuthUsers() {
    _classCallCheck(this, AuthUsers);

    return _possibleConstructorReturn(this, (AuthUsers.__proto__ || Object.getPrototypeOf(AuthUsers)).apply(this, arguments));
  }

  _createClass(AuthUsers, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          extraFields = _props.extraFields,
          data = _props.data,
          query = _props.query,
          user = _props.user,
          setUser = _props.setUser;

      var users = data.users || [];

      return React.createElement(
        Sidebar,
        {
          left: 72,
          menu: React.createElement(
            Menu,
            {
              header: _ref
            },
            users.map(function (u) {
              return React.createElement(
                Menu.Item,
                {
                  key: u.id,
                  onClick: function onClick() {
                    return setUser(u);
                  },
                  icon: React.createElement(Avatar, {
                    email: u.email,
                    name: u.name,
                    size: 40,
                    'default': 'blank'
                  }),
                  active: u.id === (user.id || query['@users']),
                  large: true
                },
                u.name,
                React.createElement(
                  'small',
                  null,
                  u.isAdmin ? 'Administrator' : 'Benutzer'
                )
              );
            })
          )
        },
        React.createElement(AuthProfile, {
          user: user.id ? user : undefined,
          extraFields: extraFields
        })
      );
    }
  }]);

  return AuthUsers;
}(Component)) || _class;

export { AuthUsers as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvYWRtaW4vdXNlcnMuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZ3FsIiwiZ3JhcGhxbCIsIlNpZGViYXIiLCJNZW51IiwiQXZhdGFyIiwiQ29udGFpbmVyIiwiY29tcG9zZSIsIndpdGhTdGF0ZSIsIkF1dGhQcm9maWxlIiwiZW5oYW5jZSIsIkF1dGhVc2VycyIsInByb3BzIiwiZXh0cmFGaWVsZHMiLCJkYXRhIiwicXVlcnkiLCJ1c2VyIiwic2V0VXNlciIsInVzZXJzIiwibWFwIiwidSIsImlkIiwiZW1haWwiLCJuYW1lIiwiaXNBZG1pbiIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsYUFBaEI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGNBQXhCO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsSUFBbEIsRUFBd0JDLE1BQXhCLEVBQWdDQyxTQUFoQyxRQUFpRCxZQUFqRDs7O0FBRUEsU0FBU0MsT0FBVCxFQUFrQkMsU0FBbEIsUUFBbUMsV0FBbkM7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLFdBQXhCOztBQUVBLElBQU1DLFVBQVVILFFBQ2RMLFFBQ0VELEdBREYsa0JBRGMsRUFhZE8sVUFBVSxNQUFWLEVBQWtCLFNBQWxCLEVBQTZCLEVBQTdCLENBYmMsQ0FBaEI7O1dBNEJjO0FBQUMsTUFBRCxDQUFNLElBQU47QUFBQSxJQUFXLE1BQU0sb0JBQUMsT0FBRCxPQUFqQixFQUE4QixXQUE5QjtBQUFBO0FBQUEsQzs7SUFYT0csUyxHQURwQkQsTzs7Ozs7Ozs7Ozs7NkJBRVU7QUFBQSxtQkFDNkMsS0FBS0UsS0FEbEQ7QUFBQSxVQUNDQyxXQURELFVBQ0NBLFdBREQ7QUFBQSxVQUNjQyxJQURkLFVBQ2NBLElBRGQ7QUFBQSxVQUNvQkMsS0FEcEIsVUFDb0JBLEtBRHBCO0FBQUEsVUFDMkJDLElBRDNCLFVBQzJCQSxJQUQzQjtBQUFBLFVBQ2lDQyxPQURqQyxVQUNpQ0EsT0FEakM7O0FBRVAsVUFBTUMsUUFBUUosS0FBS0ksS0FBTCxJQUFjLEVBQTVCOztBQUVBLGFBQ0U7QUFBQyxlQUFEO0FBQUE7QUFDRSxnQkFBTSxFQURSO0FBRUUsZ0JBQ0U7QUFBQyxnQkFBRDtBQUFBO0FBQ0U7QUFERjtBQU9HQSxrQkFBTUMsR0FBTixDQUFVO0FBQUEscUJBQ1Q7QUFBQyxvQkFBRCxDQUFNLElBQU47QUFBQTtBQUNFLHVCQUFLQyxFQUFFQyxFQURUO0FBRUUsMkJBQVM7QUFBQSwyQkFBTUosUUFBUUcsQ0FBUixDQUFOO0FBQUEsbUJBRlg7QUFHRSx3QkFDRSxvQkFBQyxNQUFEO0FBQ0UsMkJBQU9BLEVBQUVFLEtBRFg7QUFFRSwwQkFBTUYsRUFBRUcsSUFGVjtBQUdFLDBCQUFNLEVBSFI7QUFJRSwrQkFBUTtBQUpWLG9CQUpKO0FBV0UsMEJBQVFILEVBQUVDLEVBQUYsTUFBVUwsS0FBS0ssRUFBTCxJQUFXTixNQUFNLFFBQU4sQ0FBckIsQ0FYVjtBQVlFO0FBWkY7QUFjR0ssa0JBQUVHLElBZEw7QUFlRTtBQUFBO0FBQUE7QUFBUUgsb0JBQUVJLE9BQUYsR0FBWSxlQUFaLEdBQThCO0FBQXRDO0FBZkYsZUFEUztBQUFBLGFBQVY7QUFQSDtBQUhKO0FBZ0NFLDRCQUFDLFdBQUQ7QUFDRSxnQkFBTVIsS0FBS0ssRUFBTCxHQUFVTCxJQUFWLEdBQWlCUyxTQUR6QjtBQUVFLHVCQUFhWjtBQUZmO0FBaENGLE9BREY7QUF1Q0Q7Ozs7RUE1Q29DYixTOztTQUFsQlcsUyIsImZpbGUiOiJwYWNrYWdlcy9hdXRoL2FkbWluL3VzZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBTaWRlYmFyLCBNZW51LCBBdmF0YXIsIENvbnRhaW5lciB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgRmFVc2VycyB9IGZyb20gJ29seW1wLWljb25zJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhTdGF0ZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgQXV0aFByb2ZpbGUgZnJvbSAnLi9wcm9maWxlJztcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIGdyYXBocWwoXG4gICAgZ3FsYFxuICAgICAgcXVlcnkgdXNlckxpc3Qge1xuICAgICAgICB1c2VyczogdXNlckxpc3Qge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGVtYWlsXG4gICAgICAgICAgaXNBZG1pblxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgKSxcbiAgd2l0aFN0YXRlKCd1c2VyJywgJ3NldFVzZXInLCB7fSksXG4pO1xuXG5AZW5oYW5jZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aFVzZXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZXh0cmFGaWVsZHMsIGRhdGEsIHF1ZXJ5LCB1c2VyLCBzZXRVc2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHVzZXJzID0gZGF0YS51c2VycyB8fCBbXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2lkZWJhclxuICAgICAgICBsZWZ0PXs3Mn1cbiAgICAgICAgbWVudT17XG4gICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgIGhlYWRlcj17XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0gaWNvbj17PEZhVXNlcnMgLz59IGxhcmdlPlxuICAgICAgICAgICAgICAgIEJlbnV0emVydmVyd2FsdHVuZ1xuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dXNlcnMubWFwKHUgPT4gKFxuICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAga2V5PXt1LmlkfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFVzZXIodSl9XG4gICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsPXt1LmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXt1Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezQwfVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0PVwiYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWN0aXZlPXt1LmlkID09PSAodXNlci5pZCB8fCBxdWVyeVsnQHVzZXJzJ10pfVxuICAgICAgICAgICAgICAgIGxhcmdlXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dS5uYW1lfVxuICAgICAgICAgICAgICAgIDxzbWFsbD57dS5pc0FkbWluID8gJ0FkbWluaXN0cmF0b3InIDogJ0JlbnV0emVyJ308L3NtYWxsPlxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8QXV0aFByb2ZpbGVcbiAgICAgICAgICB1c2VyPXt1c2VyLmlkID8gdXNlciA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBleHRyYUZpZWxkcz17ZXh0cmFGaWVsZHN9XG4gICAgICAgIC8+XG4gICAgICA8L1NpZGViYXI+XG4gICAgKTtcbiAgfVxufVxuIl19
