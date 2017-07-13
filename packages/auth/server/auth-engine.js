import mails from './mails';
import createPasswordEngine from './utils/password-engine';
import createTokenEngine from './utils/token-engine';
import speakeasy from 'speakeasy';
import shortId from 'shortid';
var qr = function (email, x, issuer) {
    return new Promise(function (yay, nay) {
        require('qrcode').toString("otpauth://totp/" + email + "?secret=" + x + "&issuer=" + (issuer || 'Olymp'), { type: 'svg' }, function (err, data) { return (err ? nay(err) : yay(data)); });
    });
};
var cleanUser = function (user) {
    var cleaned = Object.assign({}, user);
    delete cleaned.hash;
    delete cleanUser.salt;
    return cleaned;
};
export default function (_a) {
    var monk = _a.monk, secret = _a.secret, mail = _a.mail, issuer = _a.issuer;
    var passwordEngine = createPasswordEngine({});
    var tokenEngine = createTokenEngine({ secret: secret });
    var collection = monk.collection('user');
    return {
        passwordEngine: passwordEngine,
        tokenEngine: tokenEngine,
        checkTokenValue: function (key, k) { return tokenEngine.verify(key).then(function (c) { return c[k]; }); },
        checkToken: function (key) {
            return tokenEngine.readUser(key).then(function () { return true; }).catch(function () { return false; });
        },
        getUser: function (id) { return collection.findOne({ id: id }).then(cleanUser); },
        login: function (email, pw, totp) {
            var user = null;
            return collection
                .findOne({ email: email })
                .then(function (usr) {
                user = usr;
                if (!user) {
                    throw new Error('No user matched.');
                }
                if (user.confirmed === false) {
                    throw new Error('User not confirmed.');
                }
                return passwordEngine.match(user, pw);
            })
                .then(function (isValid) {
                if (!isValid) {
                    throw new Error('Wrong password.');
                }
                if (user.totp && !totp) {
                    throw new Error('Please provide a totp token');
                }
                else if (user.totp) {
                    var verified = speakeasy.totp.verify({
                        secret: user.totp,
                        encoding: 'base32',
                        token: totp,
                    });
                    if (!verified) {
                        throw new Error('TOTP token error');
                    }
                }
                return {
                    token: tokenEngine.createFromUser(user),
                    user: cleanUser(user),
                };
            });
        },
        verify: function (key) {
            if (!key) {
                return {};
            }
            return tokenEngine
                .readUser(key)
                .then(function (_a) {
                var id = _a.id;
                if (!id) {
                    throw new Error('Error.');
                }
                return collection.findOne({ id: id });
            })
                .then(function (user) {
                if (!user) {
                    throw new Error('No user matched.');
                }
                if (user.confirmed === false) {
                    throw new Error('User not confirmed.');
                }
                var newToken = tokenEngine.createFromUser(user);
                return { token: newToken, user: cleanUser(user) };
            });
        },
        register: function (rawUser, pwd, key) {
            var filter = { email: rawUser.email };
            rawUser.confirmed = !!key;
            rawUser.id = shortId.generate();
            if (!pwd || pwd.length < 6) {
                throw new Error('Password too short');
            }
            var init = key ? tokenEngine.verify(key) : Promise.resolve(filter);
            return init
                .then(function (_a) {
                var email = _a.email;
                if (email !== rawUser.email) {
                    throw new Error('Unexpected E-Mail address');
                }
                return Promise.all([
                    collection.findOne(filter),
                    passwordEngine.set(rawUser, pwd),
                ]);
            })
                .then(function (_a) {
                var currentUser = _a[0], user = _a[1];
                if (currentUser) {
                    throw new Error('USER_ALREADY_EXISTS Error.');
                }
                return collection.insert(user);
            })
                .then(function (result) {
                var confirmationToken;
                if (!result.confirmed) {
                    confirmationToken = tokenEngine.createFromUser(result);
                    if (mail) {
                        mail(mails.register, {
                            to: rawUser.email,
                            token: confirmationToken,
                        })
                            .then(function (x) { return console.log('Mail success'); })
                            .catch(function (err) { return console.error(err); });
                    }
                }
                return { user: cleanUser(result), token: confirmationToken };
            });
        },
        confirm: function (key) {
            return tokenEngine
                .readUser(key)
                .then(function (_a) {
                var id = _a.id;
                if (!id) {
                    throw new Error('Error.');
                }
                return Promise.all([
                    id,
                    collection.update({ id: id }, { $set: { confirmed: true } }),
                ]);
            })
                .then(function (_a) {
                var id = _a[0];
                return collection.findOne({ id: id });
            })
                .then(function (user) { return ({
                token: tokenEngine.createFromUser(user),
                user: cleanUser(user),
            }); });
        },
        totp: function (id) {
            var secret = speakeasy.generateSecret({ length: 20 }).base32;
            var user = null;
            return monk
                .read('user', { id: id })
                .then(function (currentUser) {
                if (!currentUser) {
                    throw new Error('No user matched.');
                }
                if (currentUser.totp) {
                    return {
                        token: tokenEngine.create({ id: currentUser.id, disable: true }),
                        enabled: true,
                        user: cleanUser(currentUser),
                    };
                }
                user = currentUser;
                return qr(user.email, secret, issuer);
            })
                .then(function (qr) {
                if (typeof qr === 'object') {
                    return qr;
                }
                return {
                    token: tokenEngine.create({ id: user.id, secret: secret }),
                    user: cleanUser(user),
                    qr: qr,
                };
            });
        },
        totpConfirm: function (t, totp) {
            var secret;
            return tokenEngine
                .verify(t)
                .then(function (untoken) {
                if (!untoken) {
                    throw new Error('TOTP token error');
                }
                var id = untoken.id, disable = untoken.disable;
                if (disable) {
                    secret = null;
                }
                else {
                    secret = untoken.secret;
                    var verified = speakeasy.totp.verify({
                        secret: secret,
                        encoding: 'base32',
                        token: totp,
                    });
                    if (!verified) {
                        throw new Error('TOTP token error');
                    }
                }
                return monk.read('user', { id: id });
            })
                .then(function (currentUser) {
                if (!currentUser) {
                    throw new Error('No user matched.');
                }
                return collection.update({ id: currentUser.id }, { $set: { totp: secret } });
            })
                .then(function (user) { return true; });
        },
        forgot: function (email) {
            return collection.findOne({ email: email }).then(function (user) {
                if (!user) {
                    throw new Error('No user matched.');
                }
                if (user.confirmed === false) {
                    throw new Error('User not confirmed.');
                }
                var requestToken = tokenEngine.createFromUser(user);
                if (mail) {
                    mail(mails.forgot, { to: user.email, token: requestToken })
                        .then(function (x) { return console.log('Mail success'); })
                        .catch(function (err) { return console.error(err); });
                }
                return true;
            });
        },
        reset: function (key, pwd) {
            return tokenEngine
                .readUser(key)
                .then(function (_a) {
                var id = _a.id;
                if (!id) {
                    throw new Error('Error.');
                }
                return collection.findOne({ id: id });
            })
                .then(function (user) {
                if (!user) {
                    throw new Error('No user matched.');
                }
                if (user.confirmed === false) {
                    throw new Error('User not confirmed.');
                }
                user.totp = null;
                return passwordEngine.set(user, pwd);
            })
                .then(function (user) {
                return collection.update({ id: user.id }, { $set: { salt: user.salt, hash: user.hash } });
            })
                .then(function (user) { return ({
                token: tokenEngine.createFromUser(user),
                user: cleanUser(user),
            }); });
        },
    };
};
//# sourceMappingURL=auth-engine.js.map