var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { Link } from 'olymp-router';
import withAuth from '../with-auth';
import Base from './base';

var AuthStatus = withAuth(_class = function (_Component) {
  _inherits(AuthStatus, _Component);

  function AuthStatus() {
    _classCallCheck(this, AuthStatus);

    return _possibleConstructorReturn(this, (AuthStatus.__proto__ || Object.getPrototypeOf(AuthStatus)).apply(this, arguments));
  }

  _createClass(AuthStatus, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          pathname = _props.pathname,
          onClose = _props.onClose,
          text = _props.text;


      return React.createElement(
        Base,
        {
          isOpen: isOpen,
          title: 'Status',
          onOk: this.ok,
          onCancel: onClose,
          cancelText: 'Schlie\xDFen'
        },
        React.createElement(
          'p',
          { style: { textAlign: 'center' } },
          text
        ),
        React.createElement(
          Base.Links,
          null,
          React.createElement(
            Link,
            { to: { pathname: pathname, query: { login: null, register: undefined } } },
            'Zur Anmeldung'
          )
        )
      );
    }
  }]);

  return AuthStatus;
}(Component)) || _class;

export { AuthStatus as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvdmlld3Mvc3RhdHVzLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxpbmsiLCJ3aXRoQXV0aCIsIkJhc2UiLCJBdXRoU3RhdHVzIiwicHJvcHMiLCJpc09wZW4iLCJwYXRobmFtZSIsIm9uQ2xvc2UiLCJ0ZXh0Iiwib2siLCJ0ZXh0QWxpZ24iLCJxdWVyeSIsImxvZ2luIiwicmVnaXN0ZXIiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGNBQXJCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixRQUFqQjs7SUFHcUJDLFUsR0FEcEJGLFE7Ozs7Ozs7Ozs7OzZCQUVVO0FBQUEsbUJBQ3FDLEtBQUtHLEtBRDFDO0FBQUEsVUFDQ0MsTUFERCxVQUNDQSxNQUREO0FBQUEsVUFDU0MsUUFEVCxVQUNTQSxRQURUO0FBQUEsVUFDbUJDLE9BRG5CLFVBQ21CQSxPQURuQjtBQUFBLFVBQzRCQyxJQUQ1QixVQUM0QkEsSUFENUI7OztBQUdQLGFBQ0U7QUFBQyxZQUFEO0FBQUE7QUFDRSxrQkFBUUgsTUFEVjtBQUVFLGlCQUFNLFFBRlI7QUFHRSxnQkFBTSxLQUFLSSxFQUhiO0FBSUUsb0JBQVVGLE9BSlo7QUFLRSxzQkFBVztBQUxiO0FBT0U7QUFBQTtBQUFBLFlBQUcsT0FBTyxFQUFFRyxXQUFXLFFBQWIsRUFBVjtBQUFvQ0Y7QUFBcEMsU0FQRjtBQVFFO0FBQUMsY0FBRCxDQUFNLEtBQU47QUFBQTtBQUNFO0FBQUMsZ0JBQUQ7QUFBQSxjQUFNLElBQUksRUFBRUYsa0JBQUYsRUFBWUssT0FBTyxFQUFFQyxPQUFPLElBQVQsRUFBZUMsVUFBVUMsU0FBekIsRUFBbkIsRUFBVjtBQUFBO0FBQUE7QUFERjtBQVJGLE9BREY7QUFnQkQ7Ozs7RUFwQnFDZixTOztTQUFuQkksVSIsImZpbGUiOiJwYWNrYWdlcy9hdXRoL3ZpZXdzL3N0YXR1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi93aXRoLWF1dGgnO1xuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuQHdpdGhBdXRoXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoU3RhdHVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNPcGVuLCBwYXRobmFtZSwgb25DbG9zZSwgdGV4dCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8QmFzZVxuICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgdGl0bGU9XCJTdGF0dXNcIlxuICAgICAgICBvbk9rPXt0aGlzLm9rfVxuICAgICAgICBvbkNhbmNlbD17b25DbG9zZX1cbiAgICAgICAgY2FuY2VsVGV4dD1cIlNjaGxpZcOfZW5cIlxuICAgICAgPlxuICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19Pnt0ZXh0fTwvcD5cbiAgICAgICAgPEJhc2UuTGlua3M+XG4gICAgICAgICAgPExpbmsgdG89e3sgcGF0aG5hbWUsIHF1ZXJ5OiB7IGxvZ2luOiBudWxsLCByZWdpc3RlcjogdW5kZWZpbmVkIH0gfX0+XG4gICAgICAgICAgICBadXIgQW5tZWxkdW5nXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0Jhc2UuTGlua3M+XG4gICAgICA8L0Jhc2U+XG4gICAgKTtcbiAgfVxufVxuIl19
