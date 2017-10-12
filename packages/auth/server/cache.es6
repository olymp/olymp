import { get } from 'lodash';

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
