export { default as Auth0 } from './auth0';
export { default as getAuth } from './get-auth';

import enhance from './redux';
export const plugin = (options = {}) => {
  if (typeof window !== 'undefined') {
    return {
      decorate: enhance(options),
    };
  } else {
    return {
      decorate: enhance(options),
    };
  }
};
