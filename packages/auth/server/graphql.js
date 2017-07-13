import mails from './mails';
export default function (_a) {
    var _b = (_a === void 0 ? {} : _a).attributes, attributes = _b === void 0 ? '' : _b;
    return ({
        name: 'user',
        queries: "\n      checkTokenMail(token: String): String\n      checkToken(token: String): Boolean\n      verify: User\n      invitationList: [Invitation]\n      invitation(id: String): Invitation\n      userList: [User]\n      user(id: String): User\n      totp: TokenAndQR\n    ",
        mutations: "\n      totpConfirm(token: String, totp: String): Boolean\n      confirm(token: String): User\n      forgot(email: Email): Boolean\n      register(input: UserInput, password: String, token: String): User\n      reset(token: String, password: String): User\n      login(email: Email, password: String, totp: String): User\n      logout: Boolean\n      user(id: String, input: UserInput, type: USER_MUTATION_TYPE): User\n      invitation(id: String, input: InvitationInput, type: USER_MUTATION_TYPE): Invitation\n    ",
        resolvers: {
            queries: {
                checkTokenMail: function (source, args, _a) {
                    var authEngine = _a.authEngine;
                    return authEngine.checkTokenValue(args.token, 'email');
                },
                checkToken: function (source, args, _a) {
                    var authEngine = _a.authEngine;
                    return authEngine.checkToken(args.token);
                },
                verify: function (source, args, _a) {
                    var authEngine = _a.authEngine, session = _a.session;
                    return session && session.userId && authEngine.getUser(session.userId);
                },
                invitationList: function (source, args, _a) {
                    var user = _a.user, monk = _a.monk;
                    if (!user || !user.isAdmin) {
                        throw new Error('No permission');
                    }
                    return monk.collection('invitation').find({});
                },
                invitation: function (source, args, _a) {
                    var user = _a.user, monk = _a.monk;
                    if (!user || !user.isAdmin) {
                        throw new Error('No permission');
                    }
                    return monk.collection('invitation').findOne({ id: args.id });
                },
                userList: function (source, args, _a) {
                    var user = _a.user, monk = _a.monk;
                    if (!user || !user.isAdmin) {
                        throw new Error('No permission');
                    }
                    return monk.collection('user').find({});
                },
                user: function (source, args, _a) {
                    var user = _a.user, monk = _a.monk;
                    if (user && user.isAdmin) {
                    }
                    else if (user && user.id === args.id) {
                    }
                    else {
                        throw new Error('No permission');
                    }
                    return monk.collection('user').findOne({ id: args.id });
                },
                totp: function (source, args, _a) {
                    var session = _a.session, authEngine = _a.authEngine;
                    return authEngine.totp(session.userId).then(function (x) { return x; });
                },
            },
            mutations: {
                register: function (source, args, _a) {
                    var authEngine = _a.authEngine;
                    return authEngine
                        .register(args.input, args.password, args.token)
                        .then(function (x) { return x.user; });
                },
                forgot: function (source, args, _a) {
                    var authEngine = _a.authEngine;
                    return authEngine.forgot(args.email);
                },
                reset: function (source, args, _a) {
                    var authEngine = _a.authEngine;
                    return authEngine.reset(args.token, args.password).then(function (_a) {
                        var user = _a.user;
                        return user;
                    });
                },
                totpConfirm: function (source, args, _a) {
                    var authEngine = _a.authEngine;
                    return authEngine.totpConfirm(args.token, args.totp).then(function (x) { return x; });
                },
                login: function (source, args, _a) {
                    var session = _a.session, authEngine = _a.authEngine;
                    return authEngine
                        .login(args.email, args.password, args.totp)
                        .then(function (userAndToken) {
                        session.userId = userAndToken.user.id;
                        return userAndToken.user;
                    });
                },
                logout: function (source, args, _a) {
                    var session = _a.session;
                    delete session.userId;
                    return true;
                },
                confirm: function (source, args, _a) {
                    var authEngine = _a.authEngine;
                    return authEngine.confirm(args.token).then(function (_a) {
                        var user = _a.user;
                        return user;
                    });
                },
                user: function (source, args, _a) {
                    var user = _a.user, monk = _a.monk;
                    if (user && user.isAdmin) {
                    }
                    else if (user && user.id === args.id) {
                    }
                    else {
                        throw new Error('No permission');
                    }
                    if (args.type && args.type === 'REMOVE') {
                        return monk.remove('user', Object.assign({}, args));
                    }
                    else if (args.input) {
                        var id = args.id;
                        args = Object.assign({}, args, args.input);
                        delete args.input;
                        args.id = id;
                    }
                    delete args.type;
                    delete args.isAdmin;
                    return monk.collection('user').update({ id: user.id }, args);
                },
                invitation: function (source, args, _a) {
                    var user = _a.user, monk = _a.monk, mail = _a.mail, authEngine = _a.authEngine;
                    if (!user || !user.isAdmin) {
                        throw new Error('No permission');
                    }
                    var collection = monk.collection('invitation');
                    if (args.type && args.type === 'REMOVE') {
                        return monk.remove('invitation', Object.assign({}, args));
                    }
                    else if (args.input) {
                        args = Object.assign({}, args, args.input);
                        delete args.input;
                    }
                    delete args.type;
                    args.expiry = +new Date();
                    args.token = authEngine.tokenEngine.create({ email: args.email });
                    return monk.collection('invitation').insert(args).then(function (u) {
                        console.log('INVITE', u.token, u);
                        if (mail) {
                            mail(mails.invite, {
                                to: u.email,
                                token: u.token,
                                name: u.name,
                            })
                                .then(function (x) { return console.log('Mail success', x.ok); })
                                .catch(function (err) { return console.error(err); });
                        }
                        return u;
                    });
                },
            },
        },
        schema: "\n    enum USER_MUTATION_TYPE {\n      UPDATE\n      REPLACE\n      REMOVE\n      INSERT\n    }\n    type Invitation @input {\n      id: String\n      email: Email\n      token: String\n      expiry: DateTime\n      name: String\n    }\n    type User @input {\n      isAdmin: Boolean\n      id: String\n      email: Email\n      token: String\n      name: String\n      " + attributes + "\n    }\n    type UserAndToken {\n      user: User\n      token: String\n    }\n    type TokenAndQR {\n      enabled: Boolean\n      token: String\n      qr: String\n    }\n  ",
    });
};
//# sourceMappingURL=graphql.js.map