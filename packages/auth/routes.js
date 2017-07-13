var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { withRouter } from 'olymp-utils';
import { AuthRegister, AuthLogin, AuthConfirm, AuthReset, AuthForgot, AuthStatus, } from './views';
import { AuthInvitations, } from './admin';
export default withRouter(function (props) {
    var query = props.query, router = props.router, pathname = props.pathname, register = props.register;
    var texts = {
        forgot: "Wir haben eine E-Mail an " + query['status-forgot'] + " geschickt. Bitte befolgen Sie den Anweisungen darin um ein neues Passwort zu erhalten.",
        register: "Wir haben eine E-Mail an " + query['status-register'] + " geschickt. Bitte befolgen Sie den Anweisungen darin um die Registrierung abzuschlie\u00DFen.",
    };
    var redirect = function (newQuery) {
        return router.push({ pathname: pathname, query: __assign({}, query, newQuery) });
    };
    var inQuery = function (key) { return query[key] !== undefined; };
    var p = { pathname: pathname, onClose: function () { return router.push(pathname); } };
    return (React.createElement("div", null,
        React.createElement(AuthInvitations, __assign({}, p, { isOpen: inQuery('invitations') })),
        React.createElement(AuthLogin, __assign({}, p, { isOpen: inQuery('login'), email: query.login, totp: inQuery('totp'), onTotp: function () { return redirect({ totp: null }); } })),
        React.createElement(AuthRegister, __assign({}, p, { isOpen: inQuery('register'), token: query.register, onOk: function (_a) {
                var email = _a.email, token = _a.token;
                return token
                    ? redirect({ register: undefined, login: email })
                    : redirect({ register: undefined, 'status-register': email });
            }, extraFields: register })),
        React.createElement(AuthForgot, __assign({}, p, { isOpen: inQuery('forgot'), email: query.forgot, onOk: function (_a) {
                var email = _a.email;
                return redirect({ forgot: undefined, 'status-forgot': email });
            } })),
        React.createElement(AuthReset, __assign({}, p, { isOpen: inQuery('reset'), token: query.reset, onOk: function (_a) {
                var email = _a.email;
                return redirect({ reset: undefined, login: email });
            } })),
        React.createElement(AuthConfirm, __assign({}, p, { isOpen: inQuery('confirm'), token: query.confirm, onOk: function (_a) {
                var email = _a.email;
                return redirect({ confirm: undefined, login: email });
            } })),
        React.createElement(AuthStatus, __assign({}, p, { isOpen: inQuery('status-forgot'), text: texts.forgot })),
        React.createElement(AuthStatus, __assign({}, p, { isOpen: inQuery('status-register'), text: texts.register }))));
});
//# sourceMappingURL=routes.js.map