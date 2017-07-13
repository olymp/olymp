var jwt = require('jsonwebtoken');
jwt.verify = require('bluebird').promisify(jwt.verify);
export default function (config) {
    if (config === void 0) { config = {}; }
    var SECRET = config.secret || process.env.AUTH_SECRET || 'abc';
    var createFromUser = function (user, expiry) {
        var str = user.id;
        return jwt.sign({ id: str, exp: expiry || Math.floor(Date.now() / 1000) + 60 * 60 }, SECRET);
    };
    var readUser = function (token) { return jwt.verify(token, SECRET).then(function (x) { return ({ id: x.id }); }); };
    var create = function (data, expiry) {
        if (!data.exp) {
            data.exp = expiry || Math.floor(Date.now() / 1000) + 60 * 60;
        }
        return jwt.sign(data, SECRET);
    };
    var verify = function (token) { return jwt.verify(token, SECRET); };
    return { createFromUser: createFromUser, readUser: readUser, create: create, verify: verify };
};
//# sourceMappingURL=token-engine.js.map