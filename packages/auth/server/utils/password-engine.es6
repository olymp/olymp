const { randomBytesAsync, pbkdf2Async } = require('bluebird').promisifyAll(
  require('crypto'),
);

export default (config = {}) => {
  const SALT_LENGTH = config.saltLength || 32;
  const KEY_LENGTH = config.keyLength || 128; // more
  const ITERATIONS = config.iterations || 4096; // more.. http://stackoverflow.com/questions/6054082/recommended-of-iterations-when-using-pbkdf2-sha256

  const setPassword = (user, password) => {
    if (!password) {
      throw new Error('Missing password');
    }
    return randomBytesAsync(SALT_LENGTH)
      .then(salt => salt.toString('hex'))
      .then(salt => {
        user.salt = salt;
        return pbkdf2Async(password, salt, ITERATIONS, KEY_LENGTH, 'SHA1');
      })
      .then(crypt => {
        user.hash = new Buffer(crypt, 'binary').toString('hex');
        return user;
      });
  };

  const matchPassword = (user, password) => {
    console.log(user, password);
    if (!password) {
      throw new Error('Missing password');
    }
    return pbkdf2Async(
      password,
      user.salt,
      ITERATIONS,
      KEY_LENGTH,
      'SHA1',
    ).then(crypt => new Buffer(crypt, 'binary').toString('hex') === user.hash);
  };

  return { set: setPassword, match: matchPassword };
};
