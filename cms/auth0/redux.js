var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { withDynamicRedux } from 'olymp-redux';
import { LOCATION_REPLACE } from 'olymp-router';
import Auth0 from './auth0';

export var INIT = 'AUTH_INIT';
export var LOGIN = 'AUTH_LOGIN';
export var LOGOUT = 'AUTH_LOGOUT';
export var SET = 'AUTH_SET';

export var withRedux = function withRedux(config) {
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
    auth0 = new Auth0(config, function (payload) {
      if (payload !== false) {
        dispatch({ type: SET, payload: payload });
      }
      var _getState$location = getState().location,
          pathname = _getState$location.pathname,
          query = _getState$location.query;

      if (pathname === '/auth') {
        dispatch({
          type: LOCATION_REPLACE,
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
            type: LOCATION_REPLACE,
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

  return withDynamicRedux({
    name: name,
    reducer: reducer,
    middleware: middleware,
    init: init
  });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9hdXRoMC9yZWR1eC5lczYiXSwibmFtZXMiOlsid2l0aER5bmFtaWNSZWR1eCIsIkxPQ0FUSU9OX1JFUExBQ0UiLCJBdXRoMCIsIklOSVQiLCJMT0dJTiIsIkxPR09VVCIsIlNFVCIsIndpdGhSZWR1eCIsIm5hbWUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidXNlciIsInBheWxvYWQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJhdXRoMCIsImluaXQiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwicHJvY2VzcyIsImVudiIsIkFVVEgwX0NMSUVOVF9JRCIsImNvbmZpZyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJxdWVyeSIsImhhc2giLCJoYXNoUXVlcnkiLCJhY2Nlc3NfdG9rZW4iLCJsb2dpbiIsIm1pZGRsZXdhcmUiLCJzZXRUaW1lb3V0IiwibG9nb3V0IiwibmV4dERpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLGdCQUFULFFBQWlDLGFBQWpDO0FBQ0EsU0FBU0MsZ0JBQVQsUUFBaUMsY0FBakM7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLFNBQWxCOztBQUVBLE9BQU8sSUFBTUMsT0FBTyxXQUFiO0FBQ1AsT0FBTyxJQUFNQyxRQUFRLFlBQWQ7QUFDUCxPQUFPLElBQU1DLFNBQVMsYUFBZjtBQUNQLE9BQU8sSUFBTUMsTUFBTSxVQUFaOztBQUVQLE9BQU8sSUFBTUMsWUFBWSxTQUFaQSxTQUFZLFNBQVU7QUFDakMsTUFBTUMsT0FBTyxNQUFiO0FBQ0EsTUFBTUMsVUFBVSxTQUFWQSxPQUFVLEdBQXdCO0FBQUEsUUFBdkJDLEtBQXVCLHVFQUFmLEVBQWU7QUFBQSxRQUFYQyxNQUFXOztBQUN0QyxRQUFJLENBQUNBLE1BQUQsSUFBVyxDQUFDQSxPQUFPQyxJQUF2QixFQUE2QjtBQUMzQixhQUFPRixLQUFQO0FBQ0Q7QUFDRCxZQUFRQyxPQUFPQyxJQUFmO0FBQ0UsV0FBS04sR0FBTDtBQUNFLDRCQUNLSSxLQURMO0FBRUVHLGdCQUFNRixPQUFPRyxPQUZmO0FBR0VDLDJCQUFpQixDQUFDLENBQUNKLE9BQU9HO0FBSDVCO0FBS0Y7QUFDRSxlQUFPSixLQUFQO0FBUko7QUFVRCxHQWREOztBQWdCQSxNQUFJTSxRQUFRLElBQVo7QUFDQSxNQUFNQyxPQUFPLFNBQVBBLElBQU8sT0FBNEI7QUFBQSxRQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsUUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUN2QyxRQUFJSCxTQUFTLENBQUNJLFFBQVFDLEdBQVIsQ0FBWUMsZUFBMUIsRUFBMkM7QUFDekM7QUFDRDtBQUNETixZQUFRLElBQUlkLEtBQUosQ0FBVXFCLE1BQVYsRUFBa0IsbUJBQVc7QUFDbkMsVUFBSVQsWUFBWSxLQUFoQixFQUF1QjtBQUNyQkksaUJBQVMsRUFBRU4sTUFBTU4sR0FBUixFQUFhUSxnQkFBYixFQUFUO0FBQ0Q7QUFIa0MsK0JBSVBLLFdBQVdLLFFBSko7QUFBQSxVQUkzQkMsUUFKMkIsc0JBSTNCQSxRQUoyQjtBQUFBLFVBSWpCQyxLQUppQixzQkFJakJBLEtBSmlCOztBQUtuQyxVQUFJRCxhQUFhLE9BQWpCLEVBQTBCO0FBQ3hCUCxpQkFBUztBQUNQTixnQkFBTVgsZ0JBREM7QUFFUGEsbUJBQVMsRUFBRVcsVUFBVUMsTUFBTUQsUUFBTixJQUFrQixHQUE5QixFQUFtQ0MsT0FBTyxFQUExQyxFQUE4Q0MsTUFBTSxFQUFwRDtBQUZGLFNBQVQ7QUFJRDtBQUNGLEtBWE8sQ0FBUjtBQUp1Qyw4QkFnQlBSLFdBQVdLLFFBaEJKO0FBQUEsUUFnQi9CQyxRQWhCK0IsdUJBZ0IvQkEsUUFoQitCO0FBQUEsUUFnQnJCRyxTQWhCcUIsdUJBZ0JyQkEsU0FoQnFCOztBQWlCdkMsUUFBSUgsYUFBYSxPQUFiLElBQXdCRyxTQUF4QixJQUFxQ0EsVUFBVUMsWUFBbkQsRUFBaUU7QUFDL0RiLFlBQU1jLEtBQU4sQ0FBWSxLQUFaO0FBQ0QsS0FGRCxNQUVPLElBQUlMLGFBQWEsT0FBakIsRUFBMEI7QUFDL0JULFlBQU1jLEtBQU4sQ0FBWSxJQUFaO0FBQ0Q7QUFDRixHQXRCRDs7QUF3QkEsTUFBTUMsYUFBYSxTQUFiQSxVQUFhO0FBQUEsUUFBR2IsUUFBSCxTQUFHQSxRQUFIO0FBQUEsUUFBYUMsUUFBYixTQUFhQSxRQUFiO0FBQUEsV0FBNEI7QUFBQSxhQUFnQixrQkFBVTtBQUN2RSxZQUFJLENBQUNILEtBQUwsRUFBWTtBQUNWO0FBQ0Q7QUFDRCxZQUFJTCxPQUFPQyxJQUFQLEtBQWdCUixLQUFwQixFQUEyQjtBQUFBLGNBQ2pCcUIsUUFEaUIsR0FDSk4sV0FBV0ssUUFEUCxDQUNqQkMsUUFEaUI7O0FBRXpCUCxtQkFBUztBQUNQTixrQkFBTVgsZ0JBREM7QUFFUGEscUJBQVMsRUFBRVcsVUFBVSxPQUFaLEVBQXFCQyxPQUFPLEVBQUVELGtCQUFGLEVBQTVCO0FBRkYsV0FBVDtBQUlBTyxxQkFBVyxZQUFNO0FBQ2ZoQixrQkFBTWMsS0FBTjtBQUNELFdBRkQ7QUFHRCxTQVRELE1BU08sSUFBSW5CLE9BQU9DLElBQVAsS0FBZ0JQLE1BQXBCLEVBQTRCO0FBQ2pDVyxnQkFBTWlCLE1BQU47QUFDRCxTQUZNLE1BRUE7QUFDTEMsdUJBQWF2QixNQUFiO0FBQ0Q7QUFDRixPQWxCOEM7QUFBQSxLQUE1QjtBQUFBLEdBQW5COztBQW9CQSxTQUFPWCxpQkFBaUI7QUFDdEJRLGNBRHNCO0FBRXRCQyxvQkFGc0I7QUFHdEJzQiwwQkFIc0I7QUFJdEJkO0FBSnNCLEdBQWpCLENBQVA7QUFNRCxDQXJFTSIsImZpbGUiOiJjbXMvYXV0aDAvcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoRHluYW1pY1JlZHV4IH0gZnJvbSAnb2x5bXAtcmVkdXgnO1xuaW1wb3J0IHsgTE9DQVRJT05fUkVQTEFDRSB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgQXV0aDAgZnJvbSAnLi9hdXRoMCc7XG5cbmV4cG9ydCBjb25zdCBJTklUID0gJ0FVVEhfSU5JVCc7XG5leHBvcnQgY29uc3QgTE9HSU4gPSAnQVVUSF9MT0dJTic7XG5leHBvcnQgY29uc3QgTE9HT1VUID0gJ0FVVEhfTE9HT1VUJztcbmV4cG9ydCBjb25zdCBTRVQgPSAnQVVUSF9TRVQnO1xuXG5leHBvcnQgY29uc3Qgd2l0aFJlZHV4ID0gY29uZmlnID0+IHtcbiAgY29uc3QgbmFtZSA9ICdhdXRoJztcbiAgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgICBpZiAoIWFjdGlvbiB8fCAhYWN0aW9uLnR5cGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBTRVQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgaXNBdXRoZW50aWNhdGVkOiAhIWFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICBsZXQgYXV0aDAgPSBudWxsO1xuICBjb25zdCBpbml0ID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IHtcbiAgICBpZiAoYXV0aDAgfHwgIXByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9JRCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhdXRoMCA9IG5ldyBBdXRoMChjb25maWcsIHBheWxvYWQgPT4ge1xuICAgICAgaWYgKHBheWxvYWQgIT09IGZhbHNlKSB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogU0VULCBwYXlsb2FkIH0pO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IGdldFN0YXRlKCkubG9jYXRpb247XG4gICAgICBpZiAocGF0aG5hbWUgPT09ICcvYXV0aCcpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IExPQ0FUSU9OX1JFUExBQ0UsXG4gICAgICAgICAgcGF5bG9hZDogeyBwYXRobmFtZTogcXVlcnkucGF0aG5hbWUgfHwgJy8nLCBxdWVyeToge30sIGhhc2g6ICcnIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHsgcGF0aG5hbWUsIGhhc2hRdWVyeSB9ID0gZ2V0U3RhdGUoKS5sb2NhdGlvbjtcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvYXV0aCcgJiYgaGFzaFF1ZXJ5ICYmIGhhc2hRdWVyeS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIGF1dGgwLmxvZ2luKGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKHBhdGhuYW1lID09PSAnL2F1dGgnKSB7XG4gICAgICBhdXRoMC5sb2dpbih0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiBuZXh0RGlzcGF0Y2ggPT4gYWN0aW9uID0+IHtcbiAgICBpZiAoIWF1dGgwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gTE9HSU4pIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IGdldFN0YXRlKCkubG9jYXRpb247XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IExPQ0FUSU9OX1JFUExBQ0UsXG4gICAgICAgIHBheWxvYWQ6IHsgcGF0aG5hbWU6ICcvYXV0aCcsIHF1ZXJ5OiB7IHBhdGhuYW1lIH0gfSxcbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGF1dGgwLmxvZ2luKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBMT0dPVVQpIHtcbiAgICAgIGF1dGgwLmxvZ291dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0RGlzcGF0Y2goYWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHdpdGhEeW5hbWljUmVkdXgoe1xuICAgIG5hbWUsXG4gICAgcmVkdWNlcixcbiAgICBtaWRkbGV3YXJlLFxuICAgIGluaXQsXG4gIH0pO1xufTtcbiJdfQ==
