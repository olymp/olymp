import Cache from 'stale-lru-cache';
import { get } from 'lodash';

const cache = new Cache({ maxSize: 100, maxAge: 20 });
export default auth => (req, res, next) => {
  const authorization = req.headers.authorization || get(req, 'session.token');
  if (!authorization) {
    return next();
  }
  auth
    .verify(authorization)
    .then(({ user, token }) => {
      if (req.session) {
        req.session.token = token;
      }
      user.token = token;
      req.user = user;
      // cache.set(authorization, req.user);
      next();
    })
    .catch(e => {
      if (req.session) {
        delete req.session.token;
      }
      delete req.headers.authorization;
      next();
    });
  /* let authorization = req.headers.authorization;
  if (!authorization && req.session && req.session.token) {
    authorization = req.headers.authorization = req.session.token;
  }

  if (authorization) {
    if (req.session) {
      req.session.token = req.header.authorization;
    }
    req.user = cache.get(authorization);
    if (req.user) {
      return next();
    }
    auth
      .verify(authorization)
      .then(x => {
        req.user = x.user;
        cache.set(authorization, req.user);
        next();
      })
      .catch(e => next());
  } else {
    next();
  }*/
};
