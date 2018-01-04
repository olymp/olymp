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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgwL3JlZHV4LmVzNiJdLCJuYW1lcyI6WyJJTklUIiwiTE9HSU4iLCJMT0dPVVQiLCJTRVQiLCJ3aXRoUmVkdXgiLCJuYW1lIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInVzZXIiLCJwYXlsb2FkIiwiaXNBdXRoZW50aWNhdGVkIiwiYXV0aDAiLCJpbml0IiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsInByb2Nlc3MiLCJlbnYiLCJBVVRIMF9DTElFTlRfSUQiLCJjb25maWciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicXVlcnkiLCJoYXNoIiwiaGFzaFF1ZXJ5IiwiYWNjZXNzX3Rva2VuIiwibG9naW4iLCJtaWRkbGV3YXJlIiwic2V0VGltZW91dCIsImxvZ291dCIsIm5leHREaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLHNCQUFPLFdBQWI7QUFDQSxJQUFNQyx3QkFBUSxZQUFkO0FBQ0EsSUFBTUMsMEJBQVMsYUFBZjtBQUNBLElBQU1DLG9CQUFNLFVBQVo7O0FBRUEsSUFBTUMsZ0NBQVksU0FBWkEsU0FBWSxTQUFVO0FBQ2pDLE1BQU1DLE9BQU8sTUFBYjtBQUNBLE1BQU1DLFVBQVUsU0FBVkEsT0FBVSxHQUF3QjtBQUFBLFFBQXZCQyxLQUF1Qix1RUFBZixFQUFlO0FBQUEsUUFBWEMsTUFBVzs7QUFDdEMsUUFBSSxDQUFDQSxNQUFELElBQVcsQ0FBQ0EsT0FBT0MsSUFBdkIsRUFBNkI7QUFDM0IsYUFBT0YsS0FBUDtBQUNEO0FBQ0QsWUFBUUMsT0FBT0MsSUFBZjtBQUNFLFdBQUtOLEdBQUw7QUFDRSw0QkFDS0ksS0FETDtBQUVFRyxnQkFBTUYsT0FBT0csT0FGZjtBQUdFQywyQkFBaUIsQ0FBQyxDQUFDSixPQUFPRztBQUg1QjtBQUtGO0FBQ0UsZUFBT0osS0FBUDtBQVJKO0FBVUQsR0FkRDs7QUFnQkEsTUFBSU0sUUFBUSxJQUFaO0FBQ0EsTUFBTUMsT0FBTyxTQUFQQSxJQUFPLE9BQTRCO0FBQUEsUUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLFFBQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDdkMsUUFBSUgsU0FBUyxDQUFDSSxRQUFRQyxHQUFSLENBQVlDLGVBQTFCLEVBQTJDO0FBQ3pDO0FBQ0Q7QUFDRE4sWUFBUSxtQkFBVU8sTUFBVixFQUFrQixtQkFBVztBQUNuQyxVQUFJVCxZQUFZLEtBQWhCLEVBQXVCO0FBQ3JCSSxpQkFBUyxFQUFFTixNQUFNTixHQUFSLEVBQWFRLGdCQUFiLEVBQVQ7QUFDRDtBQUhrQywrQkFJUEssV0FBV0ssUUFKSjtBQUFBLFVBSTNCQyxRQUoyQixzQkFJM0JBLFFBSjJCO0FBQUEsVUFJakJDLEtBSmlCLHNCQUlqQkEsS0FKaUI7O0FBS25DLFVBQUlELGFBQWEsT0FBakIsRUFBMEI7QUFDeEJQLGlCQUFTO0FBQ1BOLDZDQURPO0FBRVBFLG1CQUFTLEVBQUVXLFVBQVVDLE1BQU1ELFFBQU4sSUFBa0IsR0FBOUIsRUFBbUNDLE9BQU8sRUFBMUMsRUFBOENDLE1BQU0sRUFBcEQ7QUFGRixTQUFUO0FBSUQ7QUFDRixLQVhPLENBQVI7QUFKdUMsOEJBZ0JQUixXQUFXSyxRQWhCSjtBQUFBLFFBZ0IvQkMsUUFoQitCLHVCQWdCL0JBLFFBaEIrQjtBQUFBLFFBZ0JyQkcsU0FoQnFCLHVCQWdCckJBLFNBaEJxQjs7QUFpQnZDLFFBQUlILGFBQWEsT0FBYixJQUF3QkcsU0FBeEIsSUFBcUNBLFVBQVVDLFlBQW5ELEVBQWlFO0FBQy9EYixZQUFNYyxLQUFOLENBQVksS0FBWjtBQUNELEtBRkQsTUFFTyxJQUFJTCxhQUFhLE9BQWpCLEVBQTBCO0FBQy9CVCxZQUFNYyxLQUFOLENBQVksSUFBWjtBQUNEO0FBQ0YsR0F0QkQ7O0FBd0JBLE1BQU1DLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFFBQUdiLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFFBQWFDLFFBQWIsU0FBYUEsUUFBYjtBQUFBLFdBQTRCO0FBQUEsYUFBZ0Isa0JBQVU7QUFDdkUsWUFBSSxDQUFDSCxLQUFMLEVBQVk7QUFDVjtBQUNEO0FBQ0QsWUFBSUwsT0FBT0MsSUFBUCxLQUFnQlIsS0FBcEIsRUFBMkI7QUFBQSxjQUNqQnFCLFFBRGlCLEdBQ0pOLFdBQVdLLFFBRFAsQ0FDakJDLFFBRGlCOztBQUV6QlAsbUJBQVM7QUFDUE4sK0NBRE87QUFFUEUscUJBQVMsRUFBRVcsVUFBVSxPQUFaLEVBQXFCQyxPQUFPLEVBQUVELGtCQUFGLEVBQTVCO0FBRkYsV0FBVDtBQUlBTyxxQkFBVyxZQUFNO0FBQ2ZoQixrQkFBTWMsS0FBTjtBQUNELFdBRkQ7QUFHRCxTQVRELE1BU08sSUFBSW5CLE9BQU9DLElBQVAsS0FBZ0JQLE1BQXBCLEVBQTRCO0FBQ2pDVyxnQkFBTWlCLE1BQU47QUFDRCxTQUZNLE1BRUE7QUFDTEMsdUJBQWF2QixNQUFiO0FBQ0Q7QUFDRixPQWxCOEM7QUFBQSxLQUE1QjtBQUFBLEdBQW5COztBQW9CQSxTQUFPLGtDQUFpQjtBQUN0QkgsY0FEc0I7QUFFdEJDLG9CQUZzQjtBQUd0QnNCLDBCQUhzQjtBQUl0QmQ7QUFKc0IsR0FBakIsQ0FBUDtBQU1ELENBckVNIiwiZmlsZSI6InBhY2thZ2VzL2F1dGgwL3JlZHV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aER5bmFtaWNSZWR1eCB9IGZyb20gJ29seW1wLXJlZHV4JztcbmltcG9ydCB7IExPQ0FUSU9OX1JFUExBQ0UgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IEF1dGgwIGZyb20gJy4vYXV0aDAnO1xuXG5leHBvcnQgY29uc3QgSU5JVCA9ICdBVVRIX0lOSVQnO1xuZXhwb3J0IGNvbnN0IExPR0lOID0gJ0FVVEhfTE9HSU4nO1xuZXhwb3J0IGNvbnN0IExPR09VVCA9ICdBVVRIX0xPR09VVCc7XG5leHBvcnQgY29uc3QgU0VUID0gJ0FVVEhfU0VUJztcblxuZXhwb3J0IGNvbnN0IHdpdGhSZWR1eCA9IGNvbmZpZyA9PiB7XG4gIGNvbnN0IG5hbWUgPSAnYXV0aCc7XG4gIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgaWYgKCFhY3Rpb24gfHwgIWFjdGlvbi50eXBlKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgU0VUOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIGlzQXV0aGVudGljYXRlZDogISFhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IGF1dGgwID0gbnVsbDtcbiAgY29uc3QgaW5pdCA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiB7XG4gICAgaWYgKGF1dGgwIHx8ICFwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfSUQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXV0aDAgPSBuZXcgQXV0aDAoY29uZmlnLCBwYXlsb2FkID0+IHtcbiAgICAgIGlmIChwYXlsb2FkICE9PSBmYWxzZSkge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFNFVCwgcGF5bG9hZCB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBnZXRTdGF0ZSgpLmxvY2F0aW9uO1xuICAgICAgaWYgKHBhdGhuYW1lID09PSAnL2F1dGgnKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBMT0NBVElPTl9SRVBMQUNFLFxuICAgICAgICAgIHBheWxvYWQ6IHsgcGF0aG5hbWU6IHF1ZXJ5LnBhdGhuYW1lIHx8ICcvJywgcXVlcnk6IHt9LCBoYXNoOiAnJyB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCB7IHBhdGhuYW1lLCBoYXNoUXVlcnkgfSA9IGdldFN0YXRlKCkubG9jYXRpb247XG4gICAgaWYgKHBhdGhuYW1lID09PSAnL2F1dGgnICYmIGhhc2hRdWVyeSAmJiBoYXNoUXVlcnkuYWNjZXNzX3Rva2VuKSB7XG4gICAgICBhdXRoMC5sb2dpbihmYWxzZSk7XG4gICAgfSBlbHNlIGlmIChwYXRobmFtZSA9PT0gJy9hdXRoJykge1xuICAgICAgYXV0aDAubG9naW4odHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gbmV4dERpc3BhdGNoID0+IGFjdGlvbiA9PiB7XG4gICAgaWYgKCFhdXRoMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IExPR0lOKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBnZXRTdGF0ZSgpLmxvY2F0aW9uO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBMT0NBVElPTl9SRVBMQUNFLFxuICAgICAgICBwYXlsb2FkOiB7IHBhdGhuYW1lOiAnL2F1dGgnLCBxdWVyeTogeyBwYXRobmFtZSB9IH0sXG4gICAgICB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhdXRoMC5sb2dpbigpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gTE9HT1VUKSB7XG4gICAgICBhdXRoMC5sb2dvdXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dERpc3BhdGNoKGFjdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB3aXRoRHluYW1pY1JlZHV4KHtcbiAgICBuYW1lLFxuICAgIHJlZHVjZXIsXG4gICAgbWlkZGxld2FyZSxcbiAgICBpbml0LFxuICB9KTtcbn07XG4iXX0=
