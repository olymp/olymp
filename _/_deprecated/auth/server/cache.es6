import { get } from 'lodash';
import LRU from 'lru-cache';

const cache = LRU({
  max: 500,
  maxAge: 1000 * 60 * 5,
});

export default auth => (req, res, next) => {
  const authorization =
    req.headers.authorization ||
    req.query.authorization ||
    get(req, 'session.token');

  if (!authorization || req.user) {
    return next();
  }

  const cached = cache.get(authorization);

  if (cached) {
    req.user = cached;
    return next();
  }

  auth
    .verify(req.db, authorization)
    .then(user => {
      if (req.session) {
        req.session.token = user.token;
      }
      req.user = user;
      cache.set(authorization, user);
      next();
    })
    .catch(e => {
      console.log('err', e);
      if (req.session) {
        delete req.session.token;
      }
      delete req.headers.authorization;
      delete req.params.authorization;
      cache.del(authorization);
      next();
    });
};
