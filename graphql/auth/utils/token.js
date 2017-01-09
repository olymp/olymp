const jwt = require('jsonwebtoken');
jwt.verify = require('bluebird').promisify(jwt.verify);

module.exports = (config = {}) => {
  const SECRET = config['secret'] || process.env.AUTH_SECRET || 'abc';

  const createFromUser = user => {
    var str = user.id;
    if (user.roles) str = `${user.roles}/${str}`;
    if (user.realm) str = `${user.realm}/${str}`;
    return jwt.sign(str, SECRET, {});
  };

  const readUser = token => jwt.verify(token, SECRET).then(content => {
    const split = content.split('/');
    return {
      id: split[split.length - 1],
      realm: split.length > 1 ? split[0] : null,
      role: split.length > 2 ? split[1] : null,
      content: content
    }
  });

  const create = data => jwt.sign(data, SECRET);

  return {createFromUser, readUser, create};
}
