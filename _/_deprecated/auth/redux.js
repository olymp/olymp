var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { pending, rejected, resolved } from 'olymp-graphql';

export var VERIFY = 'AUTH_VERIFY';
export var LOGIN = 'AUTH_LOGIN';
export var LOGOUT = 'AUTH_LOGOUT';
export var SKIP = 'AUTH_SKIP';

var attributes = '\n  id\n  name\n  email\n  isAdmin\n  token\n';

export var setAttributes = function setAttributes(newAttributes) {
  return attributes = newAttributes;
};
export var getAttributes = function getAttributes() {
  return attributes;
};

export var authReducer = function authReducer() {
  var def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : def;
    var action = arguments[1];

    if (!action || !action.type) {
      return state;
    }
    switch (action.type) {
      case SKIP:
        return _extends({}, state, {
          verifying: false
        });
      case pending(VERIFY):
        return _extends({}, state, {
          verifying: true
        });
      case resolved(VERIFY):
        return _extends({}, state, {
          user: action.payload,
          verifying: false
        });
      case rejected(VERIFY):
        return _extends({}, state, {
          verifying: false
        });
      case resolved(LOGIN):
        return _extends({}, state, { user: action.payload });
      case resolved(LOGOUT):
        return _extends({}, state, { user: null });
      default:
        return state;
    }
  };
};

export var authMiddleware = function authMiddleware(_ref) {
  var dispatch = _ref.dispatch,
      getState = _ref.getState;
  return function (nextDispatch) {
    return function (action) {
      if (typeof localStorage !== 'undefined' && action.type === resolved(VERIFY)) {
        if (action.payload) {
          localStorage.setItem('token', action.payload.token);
        } else {
          localStorage.removeItem('token');
        }
      }
      if (typeof localStorage !== 'undefined' && action.type === rejected(VERIFY)) {
        localStorage.removeItem('token');
      }
      if (typeof localStorage !== 'undefined' && action.type === resolved(LOGIN)) {
        localStorage.setItem('token', action.payload.token);
      }
      if (typeof localStorage !== 'undefined' && action.type === rejected(LOGIN)) {
        localStorage.removeItem('token');
      }
      if (typeof localStorage !== 'undefined' && action.type === resolved(LOGOUT)) {
        localStorage.removeItem('token');
      }

      return nextDispatch(action);
    };
  };
};

export var createVerify = function createVerify(dispatch) {
  return function () {
    return dispatch({
      type: VERIFY,
      query: '\n    query verify {\n      user: verify {\n        ' + attributes + '\n      }\n    }\n  '
    });
  };
};
export var createSave = function createSave(dispatch) {
  return function (payload) {
    return dispatch({
      type: 'AUTH_SAVE',
      payload: payload,
      mutation: '\n      mutation user($user: UserInput, $id: String) {\n        user(input: $user, id: $id) {\n          ' + attributes + '\n        }\n      }\n    '
    });
  };
};

export var createCheckToken = function createCheckToken(dispatch) {
  return function (payload) {
    return dispatch({
      type: 'AUTH_CHECK_TOKEN',
      mutation: '\n      query checkToken($token: String!) {\n        checkToken(token: $token)\n      }\n    ',
      payload: payload
    });
  };
};

export var createTotpConfirm = function createTotpConfirm(dispatch) {
  return function (payload) {
    return dispatch({
      type: 'AUTH_TOTP_CONFIRM',
      mutation: '\n      mutation totpConfirm($token: String, $totp: String) {\n        totpConfirm(token: $token, totp: $totp)\n      }\n    ',
      payload: payload
    });
  };
};

export var createRegister = function createRegister(dispatch) {
  return function (payload) {
    return dispatch({
      type: 'AUTH_REGISTER',
      mutation: '\n      mutation register($user: UserInput, $password: String, $token: String) {\n        register(input: $user, password: $password, token: $token) {\n          ' + attributes + '\n        }\n      }\n    ',
      payload: payload
    });
  };
};

export var createLogin = function createLogin(dispatch) {
  return function (payload) {
    return dispatch({
      type: LOGIN,
      mutation: '\n      mutation login($email: Email, $password: String, $totp: String) {\n        user: login(email: $email, password: $password, totp: $totp) {\n          ' + attributes + '\n        }\n      }\n    ',
      payload: payload
    });
  };
};

export var createLogout = function createLogout(dispatch) {
  return function () {
    return dispatch({
      type: LOGOUT,
      mutation: '\n      mutation logout {\n        logout\n      }\n    ',
      payload: {}
    });
  };
};

export var createForgot = function createForgot(dispatch) {
  return function (payload) {
    return dispatch({
      type: 'AUTH_FORGOT',
      mutation: '\n      mutation forgot($email: String!) {\n        forgot(email: $email)\n      }\n    ',
      payload: payload
    });
  };
};

export var createReset = function createReset(dispatch) {
  return function (payload) {
    return dispatch({
      type: 'AUTH_RESET',
      mutation: '\n      mutation reset($token: String!, $password: String!) {\n        reset(token: $token, password: $password) {\n          email\n        }\n      }\n    ',
      payload: payload
    });
  };
};

export var createConfirm = function createConfirm(dispatch) {
  return function (payload) {
    return dispatch({
      type: 'AUTH_CONFIRM',
      mutation: '\n      mutation confirm($token: String!) {\n        confirm(token: $token) {\n          email\n        }\n      }\n    ',
      payload: payload
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvcmVkdXguZXM2Il0sIm5hbWVzIjpbInBlbmRpbmciLCJyZWplY3RlZCIsInJlc29sdmVkIiwiVkVSSUZZIiwiTE9HSU4iLCJMT0dPVVQiLCJTS0lQIiwiYXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZXMiLCJuZXdBdHRyaWJ1dGVzIiwiZ2V0QXR0cmlidXRlcyIsImF1dGhSZWR1Y2VyIiwiZGVmIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidmVyaWZ5aW5nIiwidXNlciIsInBheWxvYWQiLCJhdXRoTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJyZW1vdmVJdGVtIiwibmV4dERpc3BhdGNoIiwiY3JlYXRlVmVyaWZ5IiwicXVlcnkiLCJjcmVhdGVTYXZlIiwibXV0YXRpb24iLCJjcmVhdGVDaGVja1Rva2VuIiwiY3JlYXRlVG90cENvbmZpcm0iLCJjcmVhdGVSZWdpc3RlciIsImNyZWF0ZUxvZ2luIiwiY3JlYXRlTG9nb3V0IiwiY3JlYXRlRm9yZ290IiwiY3JlYXRlUmVzZXQiLCJjcmVhdGVDb25maXJtIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLE9BQVQsRUFBa0JDLFFBQWxCLEVBQTRCQyxRQUE1QixRQUE0QyxlQUE1Qzs7QUFFQSxPQUFPLElBQU1DLFNBQVMsYUFBZjtBQUNQLE9BQU8sSUFBTUMsUUFBUSxZQUFkO0FBQ1AsT0FBTyxJQUFNQyxTQUFTLGFBQWY7QUFDUCxPQUFPLElBQU1DLE9BQU8sV0FBYjs7QUFFUCxJQUFJQyw0REFBSjs7QUFRQSxPQUFPLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0I7QUFBQSxTQUFrQkQsYUFBYUUsYUFBL0I7QUFBQSxDQUF0QjtBQUNQLE9BQU8sSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLFNBQU1ILFVBQU47QUFBQSxDQUF0Qjs7QUFFUCxPQUFPLElBQU1JLGNBQWMsU0FBZEEsV0FBYztBQUFB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QUFBQSxTQUFZO0FBQUEsV0FDckNqQixTQUFTO0FBQ1BMLFlBQU0sWUFEQztBQUVQZSwrS0FGTztBQVNQWjtBQVRPLEtBQVQsQ0FEcUM7QUFBQSxHQUFaO0FBQUEsQ0FBcEI7O0FBYVAsT0FBTyxJQUFNb0IsZ0JBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLFNBQVk7QUFBQSxXQUN2Q2xCLFNBQVM7QUFDUEwsWUFBTSxjQURDO0FBRVBlLDBJQUZPO0FBU1BaO0FBVE8sS0FBVCxDQUR1QztBQUFBLEdBQVo7QUFBQSxDQUF0QiIsImZpbGUiOiJwYWNrYWdlcy9hdXRoL3JlZHV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGVuZGluZywgcmVqZWN0ZWQsIHJlc29sdmVkIH0gZnJvbSAnb2x5bXAtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBWRVJJRlkgPSAnQVVUSF9WRVJJRlknO1xuZXhwb3J0IGNvbnN0IExPR0lOID0gJ0FVVEhfTE9HSU4nO1xuZXhwb3J0IGNvbnN0IExPR09VVCA9ICdBVVRIX0xPR09VVCc7XG5leHBvcnQgY29uc3QgU0tJUCA9ICdBVVRIX1NLSVAnO1xuXG5sZXQgYXR0cmlidXRlcyA9IGBcbiAgaWRcbiAgbmFtZVxuICBlbWFpbFxuICBpc0FkbWluXG4gIHRva2VuXG5gO1xuXG5leHBvcnQgY29uc3Qgc2V0QXR0cmlidXRlcyA9IG5ld0F0dHJpYnV0ZXMgPT4gKGF0dHJpYnV0ZXMgPSBuZXdBdHRyaWJ1dGVzKTtcbmV4cG9ydCBjb25zdCBnZXRBdHRyaWJ1dGVzID0gKCkgPT4gYXR0cmlidXRlcztcblxuZXhwb3J0IGNvbnN0IGF1dGhSZWR1Y2VyID0gKGRlZiA9IHt9KSA9PiAoc3RhdGUgPSBkZWYsIGFjdGlvbikgPT4ge1xuICBpZiAoIWFjdGlvbiB8fCAhYWN0aW9uLnR5cGUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0tJUDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2ZXJpZnlpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIHBlbmRpbmcoVkVSSUZZKTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2ZXJpZnlpbmc6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgcmVzb2x2ZWQoVkVSSUZZKTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgdmVyaWZ5aW5nOiBmYWxzZSxcbiAgICAgIH07XG4gICAgY2FzZSByZWplY3RlZChWRVJJRlkpOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZlcmlmeWluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIGNhc2UgcmVzb2x2ZWQoTE9HSU4pOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSByZXNvbHZlZChMT0dPVVQpOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IG51bGwgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYXV0aE1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gbmV4dERpc3BhdGNoID0+IChhY3Rpb24pID0+IHtcbiAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnICYmIGFjdGlvbi50eXBlID09PSByZXNvbHZlZChWRVJJRlkpKSB7XG4gICAgaWYgKGFjdGlvbi5wYXlsb2FkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBhY3Rpb24ucGF5bG9hZC50b2tlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgYWN0aW9uLnR5cGUgPT09IHJlamVjdGVkKFZFUklGWSkpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgfVxuICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgYWN0aW9uLnR5cGUgPT09IHJlc29sdmVkKExPR0lOKSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGFjdGlvbi5wYXlsb2FkLnRva2VuKTtcbiAgfVxuICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgYWN0aW9uLnR5cGUgPT09IHJlamVjdGVkKExPR0lOKSkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICB9XG4gIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJyAmJiBhY3Rpb24udHlwZSA9PT0gcmVzb2x2ZWQoTE9HT1VUKSkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICB9XG5cbiAgcmV0dXJuIG5leHREaXNwYXRjaChhY3Rpb24pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVZlcmlmeSA9IGRpc3BhdGNoID0+ICgpID0+XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBWRVJJRlksXG4gICAgcXVlcnk6IGBcbiAgICBxdWVyeSB2ZXJpZnkge1xuICAgICAgdXNlcjogdmVyaWZ5IHtcbiAgICAgICAgJHthdHRyaWJ1dGVzfVxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAgfSk7XG5leHBvcnQgY29uc3QgY3JlYXRlU2F2ZSA9IGRpc3BhdGNoID0+IHBheWxvYWQgPT5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6ICdBVVRIX1NBVkUnLFxuICAgIHBheWxvYWQsXG4gICAgbXV0YXRpb246IGBcbiAgICAgIG11dGF0aW9uIHVzZXIoJHVzZXI6IFVzZXJJbnB1dCwgJGlkOiBTdHJpbmcpIHtcbiAgICAgICAgdXNlcihpbnB1dDogJHVzZXIsIGlkOiAkaWQpIHtcbiAgICAgICAgICAke2F0dHJpYnV0ZXN9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNoZWNrVG9rZW4gPSBkaXNwYXRjaCA9PiBwYXlsb2FkID0+XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiAnQVVUSF9DSEVDS19UT0tFTicsXG4gICAgbXV0YXRpb246IGBcbiAgICAgIHF1ZXJ5IGNoZWNrVG9rZW4oJHRva2VuOiBTdHJpbmchKSB7XG4gICAgICAgIGNoZWNrVG9rZW4odG9rZW46ICR0b2tlbilcbiAgICAgIH1cbiAgICBgLFxuICAgIHBheWxvYWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVG90cENvbmZpcm0gPSBkaXNwYXRjaCA9PiBwYXlsb2FkID0+XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiAnQVVUSF9UT1RQX0NPTkZJUk0nLFxuICAgIG11dGF0aW9uOiBgXG4gICAgICBtdXRhdGlvbiB0b3RwQ29uZmlybSgkdG9rZW46IFN0cmluZywgJHRvdHA6IFN0cmluZykge1xuICAgICAgICB0b3RwQ29uZmlybSh0b2tlbjogJHRva2VuLCB0b3RwOiAkdG90cClcbiAgICAgIH1cbiAgICBgLFxuICAgIHBheWxvYWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVnaXN0ZXIgPSBkaXNwYXRjaCA9PiBwYXlsb2FkID0+XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiAnQVVUSF9SRUdJU1RFUicsXG4gICAgbXV0YXRpb246IGBcbiAgICAgIG11dGF0aW9uIHJlZ2lzdGVyKCR1c2VyOiBVc2VySW5wdXQsICRwYXNzd29yZDogU3RyaW5nLCAkdG9rZW46IFN0cmluZykge1xuICAgICAgICByZWdpc3RlcihpbnB1dDogJHVzZXIsIHBhc3N3b3JkOiAkcGFzc3dvcmQsIHRva2VuOiAkdG9rZW4pIHtcbiAgICAgICAgICAke2F0dHJpYnV0ZXN9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHBheWxvYWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTG9naW4gPSBkaXNwYXRjaCA9PiBwYXlsb2FkID0+XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBMT0dJTixcbiAgICBtdXRhdGlvbjogYFxuICAgICAgbXV0YXRpb24gbG9naW4oJGVtYWlsOiBFbWFpbCwgJHBhc3N3b3JkOiBTdHJpbmcsICR0b3RwOiBTdHJpbmcpIHtcbiAgICAgICAgdXNlcjogbG9naW4oZW1haWw6ICRlbWFpbCwgcGFzc3dvcmQ6ICRwYXNzd29yZCwgdG90cDogJHRvdHApIHtcbiAgICAgICAgICAke2F0dHJpYnV0ZXN9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHBheWxvYWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTG9nb3V0ID0gZGlzcGF0Y2ggPT4gKCkgPT5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IExPR09VVCxcbiAgICBtdXRhdGlvbjogYFxuICAgICAgbXV0YXRpb24gbG9nb3V0IHtcbiAgICAgICAgbG9nb3V0XG4gICAgICB9XG4gICAgYCxcbiAgICBwYXlsb2FkOiB7fSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVGb3Jnb3QgPSBkaXNwYXRjaCA9PiBwYXlsb2FkID0+XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiAnQVVUSF9GT1JHT1QnLFxuICAgIG11dGF0aW9uOiBgXG4gICAgICBtdXRhdGlvbiBmb3Jnb3QoJGVtYWlsOiBTdHJpbmchKSB7XG4gICAgICAgIGZvcmdvdChlbWFpbDogJGVtYWlsKVxuICAgICAgfVxuICAgIGAsXG4gICAgcGF5bG9hZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZXNldCA9IGRpc3BhdGNoID0+IHBheWxvYWQgPT5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6ICdBVVRIX1JFU0VUJyxcbiAgICBtdXRhdGlvbjogYFxuICAgICAgbXV0YXRpb24gcmVzZXQoJHRva2VuOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgICAgICAgcmVzZXQodG9rZW46ICR0b2tlbiwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xuICAgICAgICAgIGVtYWlsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHBheWxvYWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29uZmlybSA9IGRpc3BhdGNoID0+IHBheWxvYWQgPT5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6ICdBVVRIX0NPTkZJUk0nLFxuICAgIG11dGF0aW9uOiBgXG4gICAgICBtdXRhdGlvbiBjb25maXJtKCR0b2tlbjogU3RyaW5nISkge1xuICAgICAgICBjb25maXJtKHRva2VuOiAkdG9rZW4pIHtcbiAgICAgICAgICBlbWFpbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICBwYXlsb2FkLFxuICB9KTtcbiJdfQ==
