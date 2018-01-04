'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _redux = require('./redux');

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var auth = _ref.auth;
  return {
    user: auth.user,
    isAuthenticated: !!auth.user
  };
}, function (dispatch) {
  return {
    login: function login(payload) {
      return dispatch({ type: _redux.LOGIN, payload: payload });
    },
    logout: function logout(payload) {
      return dispatch({ type: _redux.LOGOUT, payload: payload });
    },
    setUser: function setUser(payload) {
      return dispatch({ type: _redux.SET, payload: payload });
    },
    initAuth: function initAuth(payload) {
      return dispatch({ type: _redux.INIT, payload: payload });
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgwL2dldC1hdXRoLmVzNiJdLCJuYW1lcyI6WyJhdXRoIiwidXNlciIsImlzQXV0aGVudGljYXRlZCIsImxvZ2luIiwiZGlzcGF0Y2giLCJ0eXBlIiwicGF5bG9hZCIsImxvZ291dCIsInNldFVzZXIiLCJpbml0QXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7O2tCQUVlLHlCQUNiO0FBQUEsTUFBR0EsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBZTtBQUNiQyxVQUFNRCxLQUFLQyxJQURFO0FBRWJDLHFCQUFpQixDQUFDLENBQUNGLEtBQUtDO0FBRlgsR0FBZjtBQUFBLENBRGEsRUFLYjtBQUFBLFNBQWE7QUFDWEUsV0FBTztBQUFBLGFBQVdDLFNBQVMsRUFBRUMsa0JBQUYsRUFBZUMsZ0JBQWYsRUFBVCxDQUFYO0FBQUEsS0FESTtBQUVYQyxZQUFRO0FBQUEsYUFBV0gsU0FBUyxFQUFFQyxtQkFBRixFQUFnQkMsZ0JBQWhCLEVBQVQsQ0FBWDtBQUFBLEtBRkc7QUFHWEUsYUFBUztBQUFBLGFBQVdKLFNBQVMsRUFBRUMsZ0JBQUYsRUFBYUMsZ0JBQWIsRUFBVCxDQUFYO0FBQUEsS0FIRTtBQUlYRyxjQUFVO0FBQUEsYUFBV0wsU0FBUyxFQUFFQyxpQkFBRixFQUFjQyxnQkFBZCxFQUFULENBQVg7QUFBQTtBQUpDLEdBQWI7QUFBQSxDQUxhLEMiLCJmaWxlIjoicGFja2FnZXMvYXV0aDAvZ2V0LWF1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgU0VULCBJTklULCBMT0dJTiwgTE9HT1VUIH0gZnJvbSAnLi9yZWR1eCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICh7IGF1dGggfSkgPT4gKHtcbiAgICB1c2VyOiBhdXRoLnVzZXIsXG4gICAgaXNBdXRoZW50aWNhdGVkOiAhIWF1dGgudXNlcixcbiAgfSksXG4gIGRpc3BhdGNoID0+ICh7XG4gICAgbG9naW46IHBheWxvYWQgPT4gZGlzcGF0Y2goeyB0eXBlOiBMT0dJTiwgcGF5bG9hZCB9KSxcbiAgICBsb2dvdXQ6IHBheWxvYWQgPT4gZGlzcGF0Y2goeyB0eXBlOiBMT0dPVVQsIHBheWxvYWQgfSksXG4gICAgc2V0VXNlcjogcGF5bG9hZCA9PiBkaXNwYXRjaCh7IHR5cGU6IFNFVCwgcGF5bG9hZCB9KSxcbiAgICBpbml0QXV0aDogcGF5bG9hZCA9PiBkaXNwYXRjaCh7IHR5cGU6IElOSVQsIHBheWxvYWQgfSksXG4gIH0pLFxuKTtcbiJdfQ==
