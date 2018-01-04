'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRedux = exports.SET = exports.LOGOUT = exports.LOGIN = exports.INIT = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _olympRedux = require('olymp-redux');

var _olympRouter = require('olymp-router');

var _auth = require('./auth0');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INIT = exports.INIT = 'AUTH_INIT';
var LOGIN = exports.LOGIN = 'AUTH_LOGIN';
var LOGOUT = exports.LOGOUT = 'AUTH_LOGOUT';
var SET = exports.SET = 'AUTH_SET';

var withRedux = exports.withRedux = function withRedux(config) {
  var name = 'auth';
  var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (!action || !action.type) {
      return state;
    }
    switch (action.type) {
      case SET:
        return _extends({}, state, {
          user: action.payload,
          isAuthenticated: !!action.payload
        });
      default:
        return state;
    }
  };

  var auth0 = null;
  var init = function init(_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;

    if (auth0 || !process.env.AUTH0_CLIENT_ID) {
      return;
    }
    auth0 = new _auth2.default(config, function (payload) {
      if (payload !== false) {
        dispatch({ type: SET, payload: payload });
      }
      var _getState$location = getState().location,
          pathname = _getState$location.pathname,
          query = _getState$location.query;

      if (pathname === '/auth') {
        dispatch({
          type: _olympRouter.LOCATION_REPLACE,
          payload: { pathname: query.pathname || '/', query: {}, hash: '' }
        });
      }
    });
    var _getState$location2 = getState().location,
        pathname = _getState$location2.pathname,
        hashQuery = _getState$location2.hashQuery;

    if (pathname === '/auth' && hashQuery && hashQuery.access_token) {
      auth0.login(false);
    } else if (pathname === '/auth') {
      auth0.login(true);
    }
  };

  var middleware = function middleware(_ref2) {
    var dispatch = _ref2.dispatch,
        getState = _ref2.getState;
    return function (nextDispatch) {
      return function (action) {
        if (!auth0) {
          return;
        }
        if (action.type === LOGIN) {
          var pathname = getState().location.pathname;

          dispatch({
            type: _olympRouter.LOCATION_REPLACE,
            payload: { pathname: '/auth', query: { pathname: pathname } }
          });
          setTimeout(function () {
            auth0.login();
          });
        } else if (action.type === LOGOUT) {
          auth0.logout();
        } else {
          nextDispatch(action);
        }
      };
    };
  };

  return (0, _olympRedux.withDynamicRedux)({
    name: name,
    reducer: reducer,
    middleware: middleware,
    init: init
  });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9hdXRoMC9yZWR1eC5lczYiXSwibmFtZXMiOlsiSU5JVCIsIkxPR0lOIiwiTE9HT1VUIiwiU0VUIiwid2l0aFJlZHV4IiwibmFtZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ1c2VyIiwicGF5bG9hZCIsImlzQXV0aGVudGljYXRlZCIsImF1dGgwIiwiaW5pdCIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJwcm9jZXNzIiwiZW52IiwiQVVUSDBfQ0xJRU5UX0lEIiwiY29uZmlnIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInF1ZXJ5IiwiaGFzaCIsImhhc2hRdWVyeSIsImFjY2Vzc190b2tlbiIsImxvZ2luIiwibWlkZGxld2FyZSIsInNldFRpbWVvdXQiLCJsb2dvdXQiLCJuZXh0RGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxzQkFBTyxXQUFiO0FBQ0EsSUFBTUMsd0JBQVEsWUFBZDtBQUNBLElBQU1DLDBCQUFTLGFBQWY7QUFDQSxJQUFNQyxvQkFBTSxVQUFaOztBQUVBLElBQU1DLGdDQUFZLFNBQVpBLFNBQVksU0FBVTtBQUNqQyxNQUFNQyxPQUFPLE1BQWI7QUFDQSxNQUFNQyxVQUFVLFNBQVZBLE9BQVUsR0FBd0I7QUFBQSxRQUF2QkMsS0FBdUIsdUVBQWYsRUFBZTtBQUFBLFFBQVhDLE1BQVc7O0FBQ3RDLFFBQUksQ0FBQ0EsTUFBRCxJQUFXLENBQUNBLE9BQU9DLElBQXZCLEVBQTZCO0FBQzNCLGFBQU9GLEtBQVA7QUFDRDtBQUNELFlBQVFDLE9BQU9DLElBQWY7QUFDRSxXQUFLTixHQUFMO0FBQ0UsNEJBQ0tJLEtBREw7QUFFRUcsZ0JBQU1GLE9BQU9HLE9BRmY7QUFHRUMsMkJBQWlCLENBQUMsQ0FBQ0osT0FBT0c7QUFINUI7QUFLRjtBQUNFLGVBQU9KLEtBQVA7QUFSSjtBQVVELEdBZEQ7O0FBZ0JBLE1BQUlNLFFBQVEsSUFBWjtBQUNBLE1BQU1DLE9BQU8sU0FBUEEsSUFBTyxPQUE0QjtBQUFBLFFBQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxRQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQ3ZDLFFBQUlILFNBQVMsQ0FBQ0ksUUFBUUMsR0FBUixDQUFZQyxlQUExQixFQUEyQztBQUN6QztBQUNEO0FBQ0ROLFlBQVEsbUJBQVVPLE1BQVYsRUFBa0IsbUJBQVc7QUFDbkMsVUFBSVQsWUFBWSxLQUFoQixFQUF1QjtBQUNyQkksaUJBQVMsRUFBRU4sTUFBTU4sR0FBUixFQUFhUSxnQkFBYixFQUFUO0FBQ0Q7QUFIa0MsK0JBSVBLLFdBQVdLLFFBSko7QUFBQSxVQUkzQkMsUUFKMkIsc0JBSTNCQSxRQUoyQjtBQUFBLFVBSWpCQyxLQUppQixzQkFJakJBLEtBSmlCOztBQUtuQyxVQUFJRCxhQUFhLE9BQWpCLEVBQTBCO0FBQ3hCUCxpQkFBUztBQUNQTiw2Q0FETztBQUVQRSxtQkFBUyxFQUFFVyxVQUFVQyxNQUFNRCxRQUFOLElBQWtCLEdBQTlCLEVBQW1DQyxPQUFPLEVBQTFDLEVBQThDQyxNQUFNLEVBQXBEO0FBRkYsU0FBVDtBQUlEO0FBQ0YsS0FYTyxDQUFSO0FBSnVDLDhCQWdCUFIsV0FBV0ssUUFoQko7QUFBQSxRQWdCL0JDLFFBaEIrQix1QkFnQi9CQSxRQWhCK0I7QUFBQSxRQWdCckJHLFNBaEJxQix1QkFnQnJCQSxTQWhCcUI7O0FBaUJ2QyxRQUFJSCxhQUFhLE9BQWIsSUFBd0JHLFNBQXhCLElBQXFDQSxVQUFVQyxZQUFuRCxFQUFpRTtBQUMvRGIsWUFBTWMsS0FBTixDQUFZLEtBQVo7QUFDRCxLQUZELE1BRU8sSUFBSUwsYUFBYSxPQUFqQixFQUEwQjtBQUMvQlQsWUFBTWMsS0FBTixDQUFZLElBQVo7QUFDRDtBQUNGLEdBdEJEOztBQXdCQSxNQUFNQyxhQUFhLFNBQWJBLFVBQWE7QUFBQSxRQUFHYixRQUFILFNBQUdBLFFBQUg7QUFBQSxRQUFhQyxRQUFiLFNBQWFBLFFBQWI7QUFBQSxXQUE0QjtBQUFBLGFBQWdCLGtCQUFVO0FBQ3ZFLFlBQUksQ0FBQ0gsS0FBTCxFQUFZO0FBQ1Y7QUFDRDtBQUNELFlBQUlMLE9BQU9DLElBQVAsS0FBZ0JSLEtBQXBCLEVBQTJCO0FBQUEsY0FDakJxQixRQURpQixHQUNKTixXQUFXSyxRQURQLENBQ2pCQyxRQURpQjs7QUFFekJQLG1CQUFTO0FBQ1BOLCtDQURPO0FBRVBFLHFCQUFTLEVBQUVXLFVBQVUsT0FBWixFQUFxQkMsT0FBTyxFQUFFRCxrQkFBRixFQUE1QjtBQUZGLFdBQVQ7QUFJQU8scUJBQVcsWUFBTTtBQUNmaEIsa0JBQU1jLEtBQU47QUFDRCxXQUZEO0FBR0QsU0FURCxNQVNPLElBQUluQixPQUFPQyxJQUFQLEtBQWdCUCxNQUFwQixFQUE0QjtBQUNqQ1csZ0JBQU1pQixNQUFOO0FBQ0QsU0FGTSxNQUVBO0FBQ0xDLHVCQUFhdkIsTUFBYjtBQUNEO0FBQ0YsT0FsQjhDO0FBQUEsS0FBNUI7QUFBQSxHQUFuQjs7QUFvQkEsU0FBTyxrQ0FBaUI7QUFDdEJILGNBRHNCO0FBRXRCQyxvQkFGc0I7QUFHdEJzQiwwQkFIc0I7QUFJdEJkO0FBSnNCLEdBQWpCLENBQVA7QUFNRCxDQXJFTSIsImZpbGUiOiJjbXMvYXV0aDAvcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoRHluYW1pY1JlZHV4IH0gZnJvbSAnb2x5bXAtcmVkdXgnO1xuaW1wb3J0IHsgTE9DQVRJT05fUkVQTEFDRSB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgQXV0aDAgZnJvbSAnLi9hdXRoMCc7XG5cbmV4cG9ydCBjb25zdCBJTklUID0gJ0FVVEhfSU5JVCc7XG5leHBvcnQgY29uc3QgTE9HSU4gPSAnQVVUSF9MT0dJTic7XG5leHBvcnQgY29uc3QgTE9HT1VUID0gJ0FVVEhfTE9HT1VUJztcbmV4cG9ydCBjb25zdCBTRVQgPSAnQVVUSF9TRVQnO1xuXG5leHBvcnQgY29uc3Qgd2l0aFJlZHV4ID0gY29uZmlnID0+IHtcbiAgY29uc3QgbmFtZSA9ICdhdXRoJztcbiAgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgICBpZiAoIWFjdGlvbiB8fCAhYWN0aW9uLnR5cGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBTRVQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgaXNBdXRoZW50aWNhdGVkOiAhIWFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICBsZXQgYXV0aDAgPSBudWxsO1xuICBjb25zdCBpbml0ID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IHtcbiAgICBpZiAoYXV0aDAgfHwgIXByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9JRCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhdXRoMCA9IG5ldyBBdXRoMChjb25maWcsIHBheWxvYWQgPT4ge1xuICAgICAgaWYgKHBheWxvYWQgIT09IGZhbHNlKSB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogU0VULCBwYXlsb2FkIH0pO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IGdldFN0YXRlKCkubG9jYXRpb247XG4gICAgICBpZiAocGF0aG5hbWUgPT09ICcvYXV0aCcpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IExPQ0FUSU9OX1JFUExBQ0UsXG4gICAgICAgICAgcGF5bG9hZDogeyBwYXRobmFtZTogcXVlcnkucGF0aG5hbWUgfHwgJy8nLCBxdWVyeToge30sIGhhc2g6ICcnIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHsgcGF0aG5hbWUsIGhhc2hRdWVyeSB9ID0gZ2V0U3RhdGUoKS5sb2NhdGlvbjtcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvYXV0aCcgJiYgaGFzaFF1ZXJ5ICYmIGhhc2hRdWVyeS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIGF1dGgwLmxvZ2luKGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKHBhdGhuYW1lID09PSAnL2F1dGgnKSB7XG4gICAgICBhdXRoMC5sb2dpbih0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiBuZXh0RGlzcGF0Y2ggPT4gYWN0aW9uID0+IHtcbiAgICBpZiAoIWF1dGgwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gTE9HSU4pIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IGdldFN0YXRlKCkubG9jYXRpb247XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IExPQ0FUSU9OX1JFUExBQ0UsXG4gICAgICAgIHBheWxvYWQ6IHsgcGF0aG5hbWU6ICcvYXV0aCcsIHF1ZXJ5OiB7IHBhdGhuYW1lIH0gfSxcbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGF1dGgwLmxvZ2luKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBMT0dPVVQpIHtcbiAgICAgIGF1dGgwLmxvZ291dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0RGlzcGF0Y2goYWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHdpdGhEeW5hbWljUmVkdXgoe1xuICAgIG5hbWUsXG4gICAgcmVkdWNlcixcbiAgICBtaWRkbGV3YXJlLFxuICAgIGluaXQsXG4gIH0pO1xufTtcbiJdfQ==
