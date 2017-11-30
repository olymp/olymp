import { withDynamicRedux } from 'olymp';
import Auth0 from './auth0';

export const INIT = 'AUTH_INIT';
export const LOGIN = 'AUTH_LOGIN';
export const LOGOUT = 'AUTH_LOGOUT';
export const SET = 'AUTH_SET';

export const withRedux = config => {
  const name = 'auth';
  const reducer = (state = {}, action) => {
    if (!action || !action.type) {
      return state;
    }
    switch (action.type) {
      case SET:
        return {
          ...state,
          user: action.payload,
          isAuthenticated: !!action.payload,
        };
      default:
        return state;
    }
  };

  let auth0 = null;
  const init = ({ dispatch }) => {
    auth0 = new Auth0(config, payload => {
      dispatch({ type: SET, payload });
    });
  };

  const middleware = () => nextDispatch => action => {
    if (!auth0) {
      return;
    }
    if (action.type === LOGIN) {
      auth0.login();
    } else if (action.type === LOGOUT) {
      auth0.logout();
    } else {
      nextDispatch(action);
    }
  };

  return withDynamicRedux({
    name,
    reducer,
    middleware,
    init,
  });
};
