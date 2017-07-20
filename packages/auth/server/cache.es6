import Cache from 'stale-lru-cache';

const cache = new Cache({ maxSize: 100, maxAge: 20 });
export default auth => (req, res, next) => {
  const authorization =
    req.get('authorization') &&
    req.get('authorization').indexOf('Bearer ') === 0
      ? req.get('authorization').split('Bearer ')[1]
      : null;
  if (req.session && req.session.userId) {
    req.user = cache.get(req.session.userId);
    if (req.user) {
      return next();
    }
    auth
      .getUser(req.session.userId)
      .then((x) => {
        req.user = x;
        cache.set(req.session.userId, req.user);
        next();
      })
      .catch(e => next());
  } else if (authorization) {
    req.user = cache.get(authorization);
    if (req.user) {
      return next();
    }
    auth
      .verify(authorization)
      .then((x) => {
        req.user = x.user;
        cache.set(authorization, req.user);
        next();
      })
      .catch(e => next());
  } else {
    next();
  }
};
