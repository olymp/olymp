const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const hasScope = require('express-jwt-authz');

export default () => {
  const ensureAuth = jwt({
    // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),

    // Validate the audience and the issuer.
    audience: process.env.AUTH0_AUDIENCE || 'graphql',
    issuer: process.env.AUTH0_DOMAIN,
    algorithms: ['RS256']
  });

  return [
    ensureAuth,
    (req, res, next) => {
      req.hasScope = hasScope;
      next();
    },
  ];
};
