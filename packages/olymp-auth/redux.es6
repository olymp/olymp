import { withDynamicRedux } from 'olymp-redux';
import { LOCATION_REPLACE, LOCATION_PUSH } from 'olymp-router';
import Auth0 from './auth0';

export const INIT = 'AUTH_INIT';
export const LOGIN = 'AUTH_LOGIN';
export const LOGOUT = 'AUTH_LOGOUT';
export const SET = 'AUTH_SET';

export default config => {
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
  const init = ({ dispatch, getState }) => {
    if (auth0 || !process.env.AUTH0_CLIENT_ID) {
      return;
    }
    config.logoutUrl = `${window.location.origin}/logout`;
    config.redirectUri = `${window.location.origin}/login`;
    auth0 = new Auth0(config);

    const { pathname, hash, hashQuery, url } = getState().location;
    const auth_url = localStorage.getItem('auth_url');
    if (pathname === '/login' && !hashQuery.access_token) {
      auth0.login();
    } else if (pathname === '/logout') {
      dispatch({
        type: LOCATION_REPLACE,
        payload: auth_url || '/',
      });
    } else {
      auth0.init(hash).then(payload => {
        dispatch({ type: SET, payload });
        if (pathname === '/login') {
          setTimeout(() => {
            dispatch({
              type: LOCATION_REPLACE,
              payload: auth_url || '/',
            });
          }, 1000);
        }
      });
    }
    localStorage.removeItem('auth_url');
  };

  const middleware = ({ dispatch, getState }) => nextDispatch => action => {
    if (!auth0) {
      return nextDispatch(action);
    }
    if (action.type === LOGIN) {
      localStorage.setItem('auth_url', getState().location.url);
      dispatch({
        type: LOCATION_PUSH,
        payload: {
          pathname: '/login',
        },
      });
      auth0.login();
    } else if (action.type === LOGOUT) {
      localStorage.setItem('auth_url', getState().location.url);
      dispatch({
        type: LOCATION_PUSH,
        payload: {
          pathname: '/logout',
        },
      });
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
