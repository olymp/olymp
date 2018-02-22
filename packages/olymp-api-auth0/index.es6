import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import { ManagementClient } from 'auth0';
import getToken from './get-token';
import transformUser from './transform-user';

export default options => {
  const MANAGEMENT_CLIENT_ID = options.managementClientId;
  const MANAGEMENT_CLIENT_SECRET = options.managementClientSecret;
  const MANAGEMENT_CLIENT_AUDIENCE = options.managementClientAudience;
  const DOMAIN = options.domain;
  const AUDIENCE = options.audience;
  const ACCESS = options.access || `https://${options.domain}/access`;
  const TOKEN_ISSUER = options.issuer || `https://${options.domain}/`;
  const JWKS_URI =
    options.jwks || `https://${options.domain}/.well-known/jwks.json`;
  const MANAGEMENT_SCOPES = options.managementScopes || 'read:users';

  let auth0;
  const getManagementClient = () => {
    if (!auth0) {
      auth0 = new ManagementClient({
        domain: DOMAIN,
        clientId: MANAGEMENT_CLIENT_ID,
        clientSecret: MANAGEMENT_CLIENT_SECRET,
        audience: MANAGEMENT_CLIENT_AUDIENCE || `https://${DOMAIN}/api/v2/`,
        scope: MANAGEMENT_SCOPES,
      });
    }
    return Promise.resolve(auth0);
  };

  const cache = {};
  // Reusable Authorizer function, set on `authorizer` field in serverless.yml
  const auth = tokenString => {
    if (!tokenString) {
      return Promise.resolve(null);
    }
    if (cache[tokenString]) {
      return Promise.resolve(cache[tokenString]);
    }
    const token = getToken(tokenString);
    const client = jwksClient({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 10, // Default value
      jwksUri: JWKS_URI,
    });

    return new Promise((yay, nay) => {
      const decoded = jwt.decode(token, { complete: true });
      if (!decoded) {
        return nay(new Error('Malformed jwt'));
      }
      const { kid } = decoded.header;

      client.getSigningKey(kid, (err, key) => {
        if (err) {
          nay(err);
        } else {
          const signingKey = key.publicKey || key.rsaPublicKey;
          jwt.verify(
            token,
            signingKey,
            { audience: AUDIENCE, issuer: TOKEN_ISSUER, algorithms: ['RS256'] },
            (err, decoded) => {
              if (err) {
                nay(err);
              } else {
                cache[tokenString] = {
                  isAuthenticated: true,
                  userId: decoded.sub,
                  access: decoded[ACCESS] ? decoded[ACCESS] : {},
                  scope: decoded.scope,
                  token,
                };
                yay(cache[tokenString]);
              }
            }
          );
        }
      });
    });
  };

  const context = async ({ event }) => {
    const accessToken =
      event.headers.Authorization || event.headers.authorization;
    const promises = [getManagementClient()];
    if (accessToken) {
      promises.push(
        auth(accessToken).catch(err => {
          return {};
        })
      );
    }
    const [auth0, context] = await Promise.all(promises);
    return {
      ...context,
      auth0,
      getUser: async () => {
        if (!context.userId) {
          return null;
        }
        const user = await auth0.getUser({ id: context.userId });
        return transformUser(user);
      },
    };
  };

  return { context };
};
