var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import withAuth from '../with-auth';
import AuthProfile from './profile';

var AuthUsers = withAuth(_class = function (_Component) {
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
          auth = _props.auth;


      return React.createElement(AuthProfile, { user: auth.user, extraFields: extraFields });
    }
  }]);

  return AuthUsers;
}(Component)) || _class;

export { AuthUsers as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvYWRtaW4vdXNlci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ3aXRoQXV0aCIsIkF1dGhQcm9maWxlIiwiQXV0aFVzZXJzIiwicHJvcHMiLCJleHRyYUZpZWxkcyIsImF1dGgiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGNBQXJCO0FBQ0EsT0FBT0MsV0FBUCxNQUF3QixXQUF4Qjs7SUFHcUJDLFMsR0FEcEJGLFE7Ozs7Ozs7Ozs7OzZCQUVVO0FBQUEsbUJBQ3VCLEtBQUtHLEtBRDVCO0FBQUEsVUFDQ0MsV0FERCxVQUNDQSxXQUREO0FBQUEsVUFDY0MsSUFEZCxVQUNjQSxJQURkOzs7QUFHUCxhQUFPLG9CQUFDLFdBQUQsSUFBYSxNQUFNQSxLQUFLQyxJQUF4QixFQUE4QixhQUFhRixXQUEzQyxHQUFQO0FBQ0Q7Ozs7RUFMb0NMLFM7O1NBQWxCRyxTIiwiZmlsZSI6InBhY2thZ2VzL2F1dGgvYWRtaW4vdXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vd2l0aC1hdXRoJztcbmltcG9ydCBBdXRoUHJvZmlsZSBmcm9tICcuL3Byb2ZpbGUnO1xuXG5Ad2l0aEF1dGhcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhVc2VycyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGV4dHJhRmllbGRzLCBhdXRoIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIDxBdXRoUHJvZmlsZSB1c2VyPXthdXRoLnVzZXJ9IGV4dHJhRmllbGRzPXtleHRyYUZpZWxkc30gLz47XG4gIH1cbn1cbiJdfQ==
