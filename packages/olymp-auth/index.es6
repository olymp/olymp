import { LOCATION_REPLACE, LOCATION_PUSH } from 'olymp-router';
export { default as getAuth } from './get-auth';
import redux, { SET } from './redux';

let Auth0;
if (process.env.IS_ELECTRON) {
  Auth0 = require('./auth0-electron').default;
} else {
  Auth0 = require('./auth0').default;
}

export const plugin = (options = {}) => ({ history, store, dynamicRedux }) => {
  if (typeof window !== 'undefined') {
    const config = {
      redirectUri: options.redirectUri || process.env.AUTH0_REDIRECT_URI,
      domain: options.domain || process.env.AUTH0_DOMAIN,
      clientID: options.clientID || process.env.AUTH0_CLIENT_ID,
      audience: options.audience || process.env.AUTH0_AUDIENCE,
      scope: options.scope || process.env.AUTH0_SCOPE || 'openid email profile',
    };
    const auth0 = new Auth0(config);
    auth0.on('profile', payload => {
      store.dispatch({ type: SET, payload });
    });

    const { pathname, query } = store.getState().location;
    let user;
    if (pathname === '/logout') {
      if (user) {
        auth0.logout();
      } else {
        history.replace(query.state || '/');
      }
    } else if (pathname === '/login') {
      if (query.state === '/__silent') {
      } else if (query.code) {
        history.replace(query.state || '/');
        auth0.login({ code: query.code });
      } else if (query.state || process.env.IS_ELECTRON) {
        history.replace(query.state || '/');
      } else {
        auth0.login({ state: '/' });
      }
    } else {
      user = auth0.getProfile();
    }

    const { reducer, middleware } = redux({
      auth0,
      initialState: { user, isAuthenticated: !!user },
    });
    dynamicRedux.inject({ middleware, reducer, name: 'auth' });

    return {};
  } else {
    const { reducer, middleware } = redux({});
    return {};
  }
};
