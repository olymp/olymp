process.env.AUTH_SECRET = 'qokpw212';
process.env.TEST = true;
process.env.GCLOUD_PROJECT = 'admn-usc';
process.env.MAILS = true;
var adapter = require('powr-datastore')();
var handler = require('../lib/handler')();
var data = { email: 'bkniffler@me.com', password: 'asd', realm: 'admn' };
var register = function (payload) {
    return handler
        .auth({
        method: 'register',
        payload: Object.assign(payload, {}),
    }, {})
        .then(function (x) {
        console.log('register ok');
        return x;
    });
};
var login = function (password, realm) { return function (payload) {
    return handler
        .auth({
        method: 'login',
        payload: {
            email: payload.user.email,
            password: password,
            realm: realm,
        },
    }, {})
        .then(function (x) {
        console.log('login ok');
        return x;
    });
}; };
var verify = function (payload) {
    return handler
        .auth({
        method: 'verify',
        payload: {
            token: payload.token,
        },
    }, {})
        .then(function (x) {
        console.log('verify ok');
        return x;
    });
};
var checkConfirmAfterRegister = function (payload) {
    if (payload.user.confirmed !== false) {
        throw new Error('Confirmed is not false');
    }
    console.log('check-confirm-after-register ok');
    return payload;
};
var checkConfirmAfterConfirm = function (payload) {
    if (payload.user.confirmed !== true) {
        throw new Error('Confirmed is not true');
    }
    console.log('check-confirm-after-confirm ok');
    return payload;
};
var confirm = function (payload) {
    return handler
        .auth({
        method: 'confirm',
        payload: {
            token: payload.token,
        },
    }, {})
        .then(function (x) {
        console.log('authenticate ok');
        return x;
    });
};
var registrationTest = function () {
    console.log(' ---- starting registration-test ----');
    return register({
        email: data.email,
        password: data.password,
        realm: data.realm,
    })
        .then(checkConfirmAfterRegister)
        .then(confirm)
        .then(checkConfirmAfterConfirm)
        .then(login(data.password, data.realm))
        .then(verify)
        .then(function (result) { return console.log(' => registration-test ok\n'); })
        .catch(function (err) { return console.error(err); });
};
registrationTest();
//# sourceMappingURL=index.js.map