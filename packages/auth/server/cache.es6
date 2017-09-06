// import Cache from 'stale-lru-cache';
import { get } from 'lodash';

// const cache = new Cache({ maxSize: 100, maxAge: 20 });
export default auth => (req, res, next) => {
  const authorization =
    req.headers.authorization || req.params.authorization || get(req, 'session.token');
  if (!authorization) {
    return next();
  }
  auth
    .verify(authorization)
    .then((user) => {
      if (req.session) {
        req.session.token = user.token;
      }
      req.user = user;
      // cache.set(authorization, req.user);
      next();
    })
    .catch((e) => {
      console.log('err', e);
      if (req.session) {
        delete req.session.token;
      }
      delete req.headers.authorization;
      delete req.params.authorization;
      next();
    });
};
