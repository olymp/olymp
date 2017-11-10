const jwt = require('jsonwebtoken');
jwt.verify = require('bluebird').promisify(jwt.verify);

const getDays = (days = 1) =>
  Math.floor(Date.now() / 1000) + 60 * 60 * 24 * days;
export default ({ secret } = {}) => {
  const SECRET = secret || process.env.AUTH_SECRET || 'abc';

  const createFromUser = ({ id, orgId, scopes }, { days = 1 } = {}) =>
    jwt.sign({ id, orgId, scopes, exp: getDays(days) }, SECRET);

  const create = (data, { days = 7 } = {}) => {
    if (!data.exp) {
      data.exp = getDays(days);
    }
    return jwt.sign(data, SECRET);
  };

  const verify = token => jwt.verify(token, SECRET);

  return { createFromUser, create, verify };
};
