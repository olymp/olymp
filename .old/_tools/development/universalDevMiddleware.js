/* eslint-disable import/no-unresolved */

// We have to use this wrapper for our universalMiddleware in development mode
// as webpack has it's own module require/resolver system which can get in the
// way when we try to flush our node js module cache in the hope that our
// server will then use the newly built version of our middleware bundle.
// Having this wrapped version allows us to "dodge" webpack taking over the
// module resolution.
const universalDevMiddleware = (req, resp) => {
  const wrappedMiddleware = require('universalDevMiddleware_build').default;

  wrappedMiddleware(req, resp);
};

module.exports = universalDevMiddleware;
