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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { Link, graphql, gql } from 'olymp-utils';
import { Modal } from 'olymp-ui';
import { Form, Input } from 'antd';
import { FaEnvelope, FaStar } from 'olymp-icons';
import withAuth from '../with-auth';
import Base, { onEnterFocus, onEnterOk, layout, onError, onSuccess, } from './base';
var AuthRegister = (function (_super) {
    __extends(AuthRegister, _super);
    function AuthRegister() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ok = function () {
            var _a = _this.props, auth = _a.auth, onClose = _a.onClose, onOk = _a.onOk, form = _a.form, token = _a.token;
            form.validateFields(function (err, values) {
                if (err) {
                    return onError(err);
                }
                if (values.password2 !== values.password) {
                    return onError(new Error('Die Passwörter stimmen nicht überein!'));
                }
                var user = __assign({}, values);
                delete user.password;
                delete user.password2;
                auth
                    .register(user, values.password, token)
                    .then(function () {
                    onSuccess('Registrierung abgeschickt', 'Bitte checken Sie Ihre E-Mails');
                    onOk({ email: values.email, token: token });
                })
                    .catch(onError);
            });
        };
        return _this;
    }
    AuthRegister.prototype.render = function () {
        var _this = this;
        var _a = this.props, isOpen = _a.isOpen, form = _a.form, saving = _a.saving, pathname = _a.pathname, onClose = _a.onClose, extraFields = _a.extraFields, data = _a.data, token = _a.token;
        var getFieldDecorator = form.getFieldDecorator;
        var loading = token && !data.error && data.valid !== true && data.valid !== false;
        var valid = token && !data.error && data.valid !== false;
        return (React.createElement(Base, { isOpen: isOpen, title: "Registrieren", onOk: data.valid ? this.ok : null, onCancel: onClose, loading: loading ? 'Prüfe Token ...' : false },
            !valid &&
                token &&
                React.createElement("p", { style: { textAlign: 'center' } },
                    "Das Token ist ung\u00FCltig oder abgelaufen. Bitte",
                    ' ',
                    React.createElement(Link, { to: { pathname: pathname, query: { feedback: null, confirm: undefined } } }, "kontaktieren Sie den Support"),
                    "."),
            !valid &&
                !token &&
                React.createElement("p", { style: { textAlign: 'center' } },
                    "Sie ben\u00F6tigen eine g\u00FCltige Einladung um sich zu registrieren.",
                    ' ',
                    React.createElement(Link, { to: { pathname: pathname, query: { feedback: null, confirm: undefined } } }, "Kontaktieren Sie den Support"),
                    "."),
            valid &&
                React.createElement(Form.Item, __assign({ key: "name", label: "Name" }, layout), getFieldDecorator('name', {
                    rules: [
                        { required: true, message: 'Bitte geben Sie Ihren Namen an' },
                    ],
                })(React.createElement(Input, { type: "text", placeholder: "Name", onKeyPress: onEnterFocus(function () { return _this.mail; }), size: "large" }))),
            valid &&
                React.createElement(Form.Item, __assign({ key: "email", label: "E-Mail" }, layout), getFieldDecorator('email', {
                    initialValue: data.email,
                    rules: [
                        { required: true, message: 'Bitte geben Sie Ihre E-Mail an!' },
                    ],
                })(React.createElement(Input, { type: "email", disabled: !!data.email, placeholder: "E-Mail", onKeyPress: onEnterFocus(function () { return _this.pw1; }), ref: function (x) { return (_this.mail = x); }, size: "large", addonAfter: React.createElement(FaEnvelope, { size: 10 }) }))),
            valid &&
                React.createElement(Form.Item, __assign({ key: "password", label: "Passwort" }, layout), getFieldDecorator('password', {
                    rules: [
                        { required: true, message: 'Bitte das Passwort angeben!' },
                    ],
                })(React.createElement(Input, { type: "password", placeholder: "Password", onKeyPress: onEnterFocus(function () { return _this.pw2; }), ref: function (x) { return (_this.pw1 = x); }, size: "large", addonAfter: React.createElement(FaStar, { size: 10 }) }))),
            valid &&
                React.createElement(Form.Item, __assign({ key: "password2", label: "Wiederholen" }, layout), getFieldDecorator('password2', {
                    rules: [
                        {
                            required: true,
                            message: 'Bitte die Passwort-Wiederholung angeben!',
                        },
                    ],
                })(React.createElement(Input, { type: "password", placeholder: "Password wiederholen", onKeyPress: onEnterOk(this.ok), ref: function (x) { return (_this.pw2 = x); }, size: "large", addonAfter: React.createElement(FaStar, { size: 10 }) }))),
            valid && extraFields
                ? extraFields({
                    layout: layout,
                    getFieldDecorator: getFieldDecorator,
                    state: this.state,
                    setState: this.setState,
                })
                : null,
            React.createElement(Modal.Links, null,
                React.createElement(Link, { to: { pathname: pathname, query: { login: null, register: undefined } } }, "Zur Anmeldung"))));
    };
    AuthRegister = __decorate([
        withAuth,
        Form.create(),
        graphql((_a = ["\n  query checkTokenMail($token: String) {\n    valid: checkToken(token: $token)\n    email: checkTokenMail(token: $token)\n  }\n"], _a.raw = ["\n  query checkTokenMail($token: String) {\n    valid: checkToken(token: $token)\n    email: checkTokenMail(token: $token)\n  }\n"], gql(_a)), {
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
    ], AuthRegister);
    return AuthRegister;
}(Component));
export default AuthRegister;
var _a;
//# sourceMappingURL=register.js.map