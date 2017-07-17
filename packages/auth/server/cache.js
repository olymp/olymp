import Cache from 'stale-lru-cache';

const cache = new Cache({ maxSize: 100, maxAge: 20 });
export default auth => (req, res, next) => {
  if (req.session && req.session.userId) {
    req.user = cache.get(req.session.userId);
    if (req.user) {
      return next();
    }
    auth.getUser(req.session.userId).then((x) => {
      req.user = x;
      cache.set(req.session.userId, req.user);
      next();
    });
  } else {
    next();
  }
};
