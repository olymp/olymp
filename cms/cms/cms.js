import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Fragment } from 'react';
import { compose, withPropsOnChange } from 'recompose';
import { connect } from 'react-redux';
import { ThemeProvider, ScreenLoader, Logo } from 'olymp-fela';
import { useSchema } from 'olymp-slate';
import { withAuth, getAuth } from 'olymp-auth0';
import { LightboxProvider } from 'olymp-cloudinary';
import getNavigation from 'olymp-pages/get-navigation';
import { asyncComponent } from 'react-async-component';

import NoAuth from './cms-noauth';
import { withRedux } from './redux';

var IfAuth = asyncComponent({
  resolve: function resolve() {
    return new Promise(function (resolve) {
      return (
        // Webpack's code splitting API w/naming
        require.ensure([], function (require) {
          resolve(require('./cms-auth'));
        }, 'cms')
      );
    });
  }
});

var _ref3 = React.createElement(Logo, null);

var _ref4 = React.createElement(Logo, { color: 'white' });

var enhance = compose(
// DragDropContext(HTML5Backend),
withPropsOnChange(['auth'], function (_ref) {
  var auth = _ref.auth;
  return {
    auth: {
      attributes: '\n        id\n        name\n        email\n        isAdmin\n        token\n        _appIds\n        ' + _get(auth, 'attributes', '') + '\n      '
    }
  };
}), withAuth({
  title: 'olymp',
  color: 'orange',
  logo: 'http://res.cloudinary.com/djyenzorc/image/upload/v1508057396/qkg/ci3onnwcl2isotkvsvrp.png'
}), withRedux, useSchema, withPropsOnChange(['theme'], function (_ref2) {
  var theme = _ref2.theme;
  return {
    theme: _extends({
      logo: function logo() {
        return _ref3;
      },
      logoWhite: function logoWhite() {
        return _ref4;
      },
      logoTitle: 'olymp cms'
    }, theme)
  };
}));

var Auth = getAuth(function (_ref5) {
  var isAuthenticated = _ref5.isAuthenticated,
      rest = _objectWithoutProperties(_ref5, ['isAuthenticated']);

  return isAuthenticated ? React.createElement(IfAuth, rest) : React.createElement(NoAuth, rest);
});
Auth.displayName = 'CmsAuthSwitch';

var Load = getNavigation(connect(function (_ref6, _ref7) {
  var location = _ref6.location;
  var isNavigationLoading = _ref7.isNavigationLoading;
  return {
    pathname: location.pathname,
    isLoading: isNavigationLoading || location.pathname === '/auth' || typeof window === 'undefined' && !!Object.keys(location.query).find(function (key) {
      return key.indexOf('@') === 0;
    }) || false
  };
})(function (_ref8) {
  var isLoading = _ref8.isLoading,
      pathname = _ref8.pathname,
      rest = _objectWithoutProperties(_ref8, ['isLoading', 'pathname']);

  return React.createElement(
    Fragment,
    null,
    React.createElement(ScreenLoader, { show: isLoading }),
    React.createElement(Auth, rest)
  );
}));
Load.displayName = 'CmsLoadSwitch';

var component = function component(Wrapped) {
  return enhance(function (_ref9) {
    var theme = _ref9.theme,
        rest = _objectWithoutProperties(_ref9, ['theme']);

    return React.createElement(
      ThemeProvider,
      { theme: theme },
      React.createElement(
        LightboxProvider,
        null,
        React.createElement(Load, _extends({}, rest, { Wrapped: Wrapped }))
      )
    );
  });
};
component.displayName = 'Cms';
export default component;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Ntcy9jbXMuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiRnJhZ21lbnQiLCJjb21wb3NlIiwid2l0aFByb3BzT25DaGFuZ2UiLCJjb25uZWN0IiwiVGhlbWVQcm92aWRlciIsIlNjcmVlbkxvYWRlciIsIkxvZ28iLCJ1c2VTY2hlbWEiLCJ3aXRoQXV0aCIsImdldEF1dGgiLCJMaWdodGJveFByb3ZpZGVyIiwiZ2V0TmF2aWdhdGlvbiIsImFzeW5jQ29tcG9uZW50IiwiTm9BdXRoIiwid2l0aFJlZHV4IiwiSWZBdXRoIiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZXF1aXJlIiwiZW5zdXJlIiwiZW5oYW5jZSIsImF1dGgiLCJhdHRyaWJ1dGVzIiwidGl0bGUiLCJjb2xvciIsImxvZ28iLCJ0aGVtZSIsImxvZ29XaGl0ZSIsImxvZ29UaXRsZSIsIkF1dGgiLCJpc0F1dGhlbnRpY2F0ZWQiLCJyZXN0IiwiZGlzcGxheU5hbWUiLCJMb2FkIiwibG9jYXRpb24iLCJpc05hdmlnYXRpb25Mb2FkaW5nIiwicGF0aG5hbWUiLCJpc0xvYWRpbmciLCJ3aW5kb3ciLCJPYmplY3QiLCJrZXlzIiwicXVlcnkiLCJmaW5kIiwia2V5IiwiaW5kZXhPZiIsImNvbXBvbmVudCIsIldyYXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFFBQWhCLFFBQWdDLE9BQWhDO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsaUJBQWxCLFFBQTJDLFdBQTNDO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixhQUF4QjtBQUNBLFNBQVNDLGFBQVQsRUFBd0JDLFlBQXhCLEVBQXNDQyxJQUF0QyxRQUFrRCxZQUFsRDtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7QUFDQSxTQUFTQyxRQUFULEVBQW1CQyxPQUFuQixRQUFrQyxhQUFsQztBQUNBLFNBQVNDLGdCQUFULFFBQWlDLGtCQUFqQztBQUNBLE9BQU9DLGFBQVAsTUFBMEIsNEJBQTFCO0FBQ0EsU0FB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S0FETTtBQUFBLEdBQVIsQ0FEZ0I7QUFBQSxDQUFsQjtBQVFBRCxVQUFVYixXQUFWLEdBQXdCLEtBQXhCO0FBQ0EsZUFBZWEsU0FBZiIsImZpbGUiOiJwYWNrYWdlcy9jbXMvY21zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFByb3BzT25DaGFuZ2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIFNjcmVlbkxvYWRlciwgTG9nbyB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgdXNlU2NoZW1hIH0gZnJvbSAnb2x5bXAtc2xhdGUnO1xuaW1wb3J0IHsgd2l0aEF1dGgsIGdldEF1dGggfSBmcm9tICdvbHltcC1hdXRoMCc7XG5pbXBvcnQgeyBMaWdodGJveFByb3ZpZGVyIH0gZnJvbSAnb2x5bXAtY2xvdWRpbmFyeSc7XG5pbXBvcnQgZ2V0TmF2aWdhdGlvbiBmcm9tICdvbHltcC1wYWdlcy9nZXQtbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBhc3luY0NvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWFzeW5jLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IE5vQXV0aCBmcm9tICcuL2Ntcy1ub2F1dGgnO1xuaW1wb3J0IHsgd2l0aFJlZHV4IH0gZnJvbSAnLi9yZWR1eCc7XG5cbmNvbnN0IElmQXV0aCA9IGFzeW5jQ29tcG9uZW50KHtcbiAgcmVzb2x2ZTogKCkgPT5cbiAgICBuZXcgUHJvbWlzZShyZXNvbHZlID0+XG4gICAgICAvLyBXZWJwYWNrJ3MgY29kZSBzcGxpdHRpbmcgQVBJIHcvbmFtaW5nXG4gICAgICByZXF1aXJlLmVuc3VyZShcbiAgICAgICAgW10sXG4gICAgICAgIHJlcXVpcmUgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVxdWlyZSgnLi9jbXMtYXV0aCcpKTtcbiAgICAgICAgfSxcbiAgICAgICAgJ2NtcycsXG4gICAgICApLFxuICAgICksXG59KTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIC8vIERyYWdEcm9wQ29udGV4dChIVE1MNUJhY2tlbmQpLFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ2F1dGgnXSwgKHsgYXV0aCB9KSA9PiAoe1xuICAgIGF1dGg6IHtcbiAgICAgIGF0dHJpYnV0ZXM6IGBcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBlbWFpbFxuICAgICAgICBpc0FkbWluXG4gICAgICAgIHRva2VuXG4gICAgICAgIF9hcHBJZHNcbiAgICAgICAgJHtnZXQoYXV0aCwgJ2F0dHJpYnV0ZXMnLCAnJyl9XG4gICAgICBgLFxuICAgIH0sXG4gIH0pKSxcbiAgd2l0aEF1dGgoe1xuICAgIHRpdGxlOiAnb2x5bXAnLFxuICAgIGNvbG9yOiAnb3JhbmdlJyxcbiAgICBsb2dvOlxuICAgICAgJ2h0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGp5ZW56b3JjL2ltYWdlL3VwbG9hZC92MTUwODA1NzM5Ni9xa2cvY2kzb25ud2NsMmlzb3RrdnN2cnAucG5nJyxcbiAgfSksXG4gIHdpdGhSZWR1eCxcbiAgdXNlU2NoZW1hLFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ3RoZW1lJ10sICh7IHRoZW1lIH0pID0+ICh7XG4gICAgdGhlbWU6IHtcbiAgICAgIGxvZ286ICgpID0+IDxMb2dvIC8+LFxuICAgICAgbG9nb1doaXRlOiAoKSA9PiA8TG9nbyBjb2xvcj1cIndoaXRlXCIgLz4sXG4gICAgICBsb2dvVGl0bGU6ICdvbHltcCBjbXMnLFxuICAgICAgLi4udGhlbWUsXG4gICAgfSxcbiAgfSkpLFxuKTtcblxuY29uc3QgQXV0aCA9IGdldEF1dGgoXG4gICh7IGlzQXV0aGVudGljYXRlZCwgLi4ucmVzdCB9KSA9PlxuICAgIGlzQXV0aGVudGljYXRlZCA/IDxJZkF1dGggey4uLnJlc3R9IC8+IDogPE5vQXV0aCB7Li4ucmVzdH0gLz4sXG4pO1xuQXV0aC5kaXNwbGF5TmFtZSA9ICdDbXNBdXRoU3dpdGNoJztcblxuY29uc3QgTG9hZCA9IGdldE5hdmlnYXRpb24oXG4gIGNvbm5lY3QoKHsgbG9jYXRpb24gfSwgeyBpc05hdmlnYXRpb25Mb2FkaW5nIH0pID0+ICh7XG4gICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgIGlzTG9hZGluZzpcbiAgICAgIGlzTmF2aWdhdGlvbkxvYWRpbmcgfHxcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSAnL2F1dGgnIHx8XG4gICAgICAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgISFPYmplY3Qua2V5cyhsb2NhdGlvbi5xdWVyeSkuZmluZChrZXkgPT4ga2V5LmluZGV4T2YoJ0AnKSA9PT0gMCkpIHx8XG4gICAgICBmYWxzZSxcbiAgfSkpKCh7IGlzTG9hZGluZywgcGF0aG5hbWUsIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxTY3JlZW5Mb2FkZXIgc2hvdz17aXNMb2FkaW5nfSAvPlxuICAgICAgPEF1dGggey4uLnJlc3R9IC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKSksXG4pO1xuTG9hZC5kaXNwbGF5TmFtZSA9ICdDbXNMb2FkU3dpdGNoJztcblxuY29uc3QgY29tcG9uZW50ID0gV3JhcHBlZCA9PlxuICBlbmhhbmNlKCh7IHRoZW1lLCAuLi5yZXN0IH0pID0+IChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPExpZ2h0Ym94UHJvdmlkZXI+XG4gICAgICAgIDxMb2FkIHsuLi5yZXN0fSBXcmFwcGVkPXtXcmFwcGVkfSAvPlxuICAgICAgPC9MaWdodGJveFByb3ZpZGVyPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKSk7XG5jb21wb25lbnQuZGlzcGxheU5hbWUgPSAnQ21zJztcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudDtcbiJdfQ==
