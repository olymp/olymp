var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { graphql, gql } from 'olymp-utils';
import { Link } from 'olymp-router';
import { Countdown, Modal } from 'olymp-ui';
import { Form } from 'antd';
import withAuth from '../with-auth';
import Base, { onSuccess, onError } from './base';
var AuthConfirm = (function (_super) {
    __extends(AuthConfirm, _super);
    function AuthConfirm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ok = function () {
            var _a = _this.props, auth = _a.auth, onOk = _a.onOk, form = _a.form, token = _a.token;
            form.validateFields(function (err, values) {
                if (err) {
                    return onError(err);
                }
                auth
                    .confirm(token)
                    .then(function (_a) {
                    var email = _a.email;
                    onSuccess('Konto bestätigt', 'Sie können sich jetzt anmelden');
                    onOk({ email: email });
                })
                    .catch(onError);
            });
        };
        return _this;
    }
    AuthConfirm.prototype.render = function () {
        var _a = this.props, isOpen = _a.isOpen, pathname = _a.pathname, onClose = _a.onClose, data = _a.data;
        var loading = data.valid !== true && data.valid !== false;
        var valid = data.valid !== false;
        return (React.createElement(Base, { isOpen: isOpen, title: "Bestätigen", onOk: data.valid ? this.ok : null, onCancel: onClose, loading: loading ? 'Prüfe Token ...' : false, okText: "Sofort bestätigen" },
            !valid &&
                React.createElement("p", { style: { textAlign: 'center' } },
                    "Das Token ist ung\u00FCltig oder abgelaufen. Bitte",
                    ' ',
                    React.createElement(Link, { to: { pathname: pathname, query: { register: null, confirm: undefined } } }, "registrieren Sie sich erneut"),
                    ' ',
                    "oder",
                    ' ',
                    React.createElement(Link, { to: { pathname: pathname, query: { feedback: null, confirm: undefined } } }, "kontaktieren Sie den Support"),
                    "."),
            valid &&
                React.createElement("div", { style: { textAlign: 'center' } },
                    "Automatische best\u00E4tigung in",
                    React.createElement("h1", null,
                        React.createElement(Countdown, { initialTimeRemaining: 5000, completeCallback: this.ok }))),
            React.createElement(Modal.Links, null,
                React.createElement(Link, { to: { pathname: pathname, query: { login: null, confirm: undefined } } }, "Zur Anmeldung"))));
    };
    AuthConfirm = __decorate([
        withAuth,
        Form.create(),
        graphql((_a = ["\n    query checkToken($token: String) {\n      valid: checkToken(token: $token)\n    }\n  "], _a.raw = ["\n    query checkToken($token: String) {\n      valid: checkToken(token: $token)\n    }\n  "], gql(_a)), {
            options: function (_a) {
                var token = _a.token;
                return ({
                    fetchPolicy: !token ? 'cache-only' : 'network-only',
                    variables: {
                        token: token,
                    },
                });
            },
        })
    ], AuthConfirm);
    return AuthConfirm;
}(Component));
export default AuthConfirm;
var _a;
//# sourceMappingURL=confirm.js.map