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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9hdXRoMC9nZXQtYXV0aC5lczYiXSwibmFtZXMiOlsiYXV0aCIsInVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJsb2dpbiIsImRpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJsb2dvdXQiLCJzZXRVc2VyIiwiaW5pdEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOztrQkFFZSx5QkFDYjtBQUFBLE1BQUdBLElBQUgsUUFBR0EsSUFBSDtBQUFBLFNBQWU7QUFDYkMsVUFBTUQsS0FBS0MsSUFERTtBQUViQyxxQkFBaUIsQ0FBQyxDQUFDRixLQUFLQztBQUZYLEdBQWY7QUFBQSxDQURhLEVBS2I7QUFBQSxTQUFhO0FBQ1hFLFdBQU87QUFBQSxhQUFXQyxTQUFTLEVBQUVDLGtCQUFGLEVBQWVDLGdCQUFmLEVBQVQsQ0FBWDtBQUFBLEtBREk7QUFFWEMsWUFBUTtBQUFBLGFBQVdILFNBQVMsRUFBRUMsbUJBQUYsRUFBZ0JDLGdCQUFoQixFQUFULENBQVg7QUFBQSxLQUZHO0FBR1hFLGFBQVM7QUFBQSxhQUFXSixTQUFTLEVBQUVDLGdCQUFGLEVBQWFDLGdCQUFiLEVBQVQsQ0FBWDtBQUFBLEtBSEU7QUFJWEcsY0FBVTtBQUFBLGFBQVdMLFNBQVMsRUFBRUMsaUJBQUYsRUFBY0MsZ0JBQWQsRUFBVCxDQUFYO0FBQUE7QUFKQyxHQUFiO0FBQUEsQ0FMYSxDIiwiZmlsZSI6ImNtcy9hdXRoMC9nZXQtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTRVQsIElOSVQsIExPR0lOLCBMT0dPVVQgfSBmcm9tICcuL3JlZHV4JztcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHsgYXV0aCB9KSA9PiAoe1xuICAgIHVzZXI6IGF1dGgudXNlcixcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6ICEhYXV0aC51c2VyLFxuICB9KSxcbiAgZGlzcGF0Y2ggPT4gKHtcbiAgICBsb2dpbjogcGF5bG9hZCA9PiBkaXNwYXRjaCh7IHR5cGU6IExPR0lOLCBwYXlsb2FkIH0pLFxuICAgIGxvZ291dDogcGF5bG9hZCA9PiBkaXNwYXRjaCh7IHR5cGU6IExPR09VVCwgcGF5bG9hZCB9KSxcbiAgICBzZXRVc2VyOiBwYXlsb2FkID0+IGRpc3BhdGNoKHsgdHlwZTogU0VULCBwYXlsb2FkIH0pLFxuICAgIGluaXRBdXRoOiBwYXlsb2FkID0+IGRpc3BhdGNoKHsgdHlwZTogSU5JVCwgcGF5bG9hZCB9KSxcbiAgfSksXG4pO1xuIl19
