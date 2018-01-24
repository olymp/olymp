import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import { ManagementClient } from 'auth0';

const MANAGEMENT_CLIENT_ID = process.env.AUTH0_MANAGEMENT_CLIENT_ID;
const MANAGEMENT_CLIENT_SECRET = process.env.AUTH0_MANAGEMENT_CLIENT_SECRET;
const MANAGEMENT_CLIENT_AUDIENCE = process.env.AUTH0_MANAGEMENT_CLIENT_AUDIENCE;
const DOMAIN = process.env.AUTH0_DOMAIN;
const AUDIENCE = process.env.AUTH0_AUDIENCE;

const ACCESS = `https://diego.one/`;
const TOKEN_ISSUER = `https://${process.env.AUTH0_DOMAIN}/`;
const JWKS_URI = `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`;
const MANAGEMENT_SCOPES = 'read:users';

let auth0;
const getManagementClient = () => {
  if (!auth0) {
    auth0 = new ManagementClient({
      domain: DOMAIN,
      clientId: MANAGEMENT_CLIENT_ID,
      clientSecret: MANAGEMENT_CLIENT_SECRET,
      audience: MANAGEMENT_CLIENT_AUDIENCE || `https://${DOMAIN}/api/v2/`,
      scope: MANAGEMENT_SCOPES
    });
  }
  return Promise.resolve(auth0);
};

// extract and return the Bearer Token from the Lambda event parameters
const getToken = tokenString => {
  if (!tokenString) {
    throw new Error("Expected 'event.authorizationToken' parameter to be set");
  }

  const match = tokenString.match(/^Bearer (.*)$/);
  if (!match || match.length < 2) {
    throw new Error(
      `Invalid Authorization token - '${tokenString}' does not match 'Bearer .*'`
    );
  }
  return match[1];
};

// Reusable Authorizer function, set on `authorizer` field in serverless.yml
const auth = tokenString => {
  if (!tokenString) {
    return Promise.resolve(null);
  }
  const token = getToken(tokenString);
  const client = jwksClient({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10, // Default value
    jwksUri: JWKS_URI
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
              yay({
                isAuthenticated: true,
                userId: decoded.sub,
                access: decoded[`${ACCESS}access`]
                  ? decoded[`${ACCESS}access`]
                  : {},
                scope: decoded.scope,
                token
              });
            }
          }
        );
      }
    });
  });
};
export default auth;

export const lambdaHandler = async event => {
  const accessToken =
    event.headers.Authorization || event.headers.authorization;
  let context = {};
  const promises = [getManagementClient().then(x => (context.auth0 = x))];
  if (accessToken) {
    promises.push(
      auth(accessToken)
        .then(x => (context = { ...context, ...x }))
        .catch(err => {
          console.log(err);
          return {};
        })
    );
  }
  await Promise.all(promises);
  return context;
};

export const transformUser = user => {
  if (!user) {
    return user;
  }
  return {
    ...user.app_metadata,
    ...user.user_metadata,
    email: user.email,
    username: user.username,
    name: user.name,
    image: user.picture,
    id: user.user_id
  };
};

/*
"email": "john.doe@gmail.com",
    "email_verified": false,
    "username": "johndoe",
    "phone_number": "+199999999999999",
    "phone_verified": false,
    "user_id": "usr_5457edea1b8f33391a000004",
    "created_at": "",
    "updated_at": "",
    "identities": [
      {
        "connection": "Initial-Connection",
        "user_id": "5457edea1b8f22891a000004",
        "provider": "auth0",
        "isSocial": false
      }
    ],
    "app_metadata": {},
    "user_metadata": {},
    "picture": "",
    "name": "",
    "nickname": "",
    "multifactor": [
      ""
    ],
    "last_ip": "",
    "last_login": "",
    "logins_count": 0,
    "blocked": false,
    "given_name": "",
    "family_name": ""
*/
