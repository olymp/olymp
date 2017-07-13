var _a = require('bluebird').promisifyAll(require('crypto')), randomBytesAsync = _a.randomBytesAsync, pbkdf2Async = _a.pbkdf2Async;
export default function (config) {
    if (config === void 0) { config = {}; }
    var SALT_LENGTH = config.saltLength || 32;
    var KEY_LENGTH = config.keyLength || 128;
    var ITERATIONS = config.iterations || 4096;
    var setPassword = function (user, password) {
        if (!password) {
            throw new Error('Missing password');
        }
        return randomBytesAsync(SALT_LENGTH)
            .then(function (salt) { return salt.toString('hex'); })
            .then(function (salt) {
            user.salt = salt;
            return pbkdf2Async(password, salt, ITERATIONS, KEY_LENGTH, 'SHA1');
        })
            .then(function (crypt) {
            user.hash = new Buffer(crypt, 'binary').toString('hex');
            return user;
        });
    };
    var matchPassword = function (user, password) {
        if (!password) {
            throw new Error('Missing password');
        }
        return pbkdf2Async(password, user.salt, ITERATIONS, KEY_LENGTH, 'SHA1').then(function (crypt) { return new Buffer(crypt, 'binary').toString('hex') === user.hash; });
    };
    return { set: setPassword, match: matchPassword };
};
//# sourceMappingURL=password-engine.js.map