import { LOCATION_REPLACE, LOCATION_PUSH } from 'olymp-router';
export { default as Auth0 } from './auth0';
export { default as getAuth } from './get-auth';
import Auth0 from './auth0';
import redux, { SET } from './redux';

export const plugin = (options = {}) => ({ history, store, dynamicRedux }) => {
  if (typeof window !== 'undefined') {
    const config = {
      logoutUrl: `${window.location.origin}/logout`,
      redirectUri: `${window.location.origin}/login`,
      ...options,
    };
    const auth0 = new Auth0(config);
    const { reducer, middleware } = redux({
      auth0,
      initialState: { user: auth0.currentUser(), isAuthenticated: true },
    });
    dynamicRedux.inject({ middleware, reducer, name: 'auth' });

    const { pathname, query, url, hash } = history.location;
    const auth_url = localStorage.getItem('auth_url');
    if (pathname === '/logout') {
      if (auth0.isAuthenticated()) {
        auth0.logout();
      } else {
        history.replace(auth_url || '/');
      }
    } else if (pathname === '/login') {
      if (hash && hash.indexOf('access_token') !== -1 ? hash : null) {
        history.replace(auth_url || '/');
        auth0.init(hash).then(payload => {
          store.dispatch({ type: SET, payload });
        });
      } else {
        auth0.login();
      }
    } else {
      auth0.init().then(payload => {
        store.dispatch({ type: SET, payload });
      });
    }
    localStorage.removeItem('auth_url');
    return {};
  } else {
    const { reducer, middleware } = redux({});
    return {};
  }
};
