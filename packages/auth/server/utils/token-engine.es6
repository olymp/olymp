const jwt = require('jsonwebtoken');
jwt.verify = require('bluebird').promisify(jwt.verify);

const getOneDay = () => Math.floor(Date.now() / 1000) + 60 * 60 * 24;
export default (config = {}) => {
  const SECRET = config.secret || process.env.AUTH_SECRET || 'abc';

  const createFromUser = (user, { days } = {}) => {
    const str = user.id;
    // if (user.roles) str = `${user.roles}/${str}`;
    // if (user.realm) str = `${user.realm}/${str}`;
    return jwt.sign({ id: str, exp: getOneDay() * (days || 1) }, SECRET);
  };

  const readUser = token => jwt.verify(token, SECRET).then(x => ({ id: x.id }));

  const create = (data, { days }) => {
    if (!data.exp) {
      data.exp = getOneDay() * (days || 1);
    }
    return jwt.sign(data, SECRET);
  };

  const verify = token => jwt.verify(token, SECRET);

  return { createFromUser, readUser, create, verify };
};
