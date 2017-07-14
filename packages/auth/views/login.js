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
import { withRouter } from 'olymp-router';
import { Link } from 'olymp-router';
import { Modal } from 'olymp-ui';
import { Form, Input } from 'antd';
import { FaEnvelope, FaStar } from 'olymp-icons';
import withAuth from '../with-auth';
import Base, { onEnterFocus, onEnterOk, layout, onError, onSuccess, } from './base';
var AuthLogin = (function (_super) {
    __extends(AuthLogin, _super);
    function AuthLogin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ok = function () {
            var _a = _this.props, auth = _a.auth, onClose = _a.onClose, form = _a.form, onTotp = _a.onTotp;
            form.validateFields(function (err, values) {
                if (err) {
                    return onError(err);
                }
                auth
                    .login(values.email, values.password, values.totp)
                    .then(function (_a) {
                    var name = _a.name;
                    onSuccess('Anmeldung erfolgreich', "Wilkommen, " + name);
                    onClose();
                })
                    .catch(function (err) {
                    if (err.message.indexOf('Please provide a totp token') !== -1) {
                        onTotp();
                    }
                    else {
                        onError(err);
                    }
                });
            });
        };
        return _this;
    }
    AuthLogin.prototype.render = function () {
        var _this = this;
        var _a = this.props, isOpen = _a.isOpen, email = _a.email, form = _a.form, pathname = _a.pathname, onClose = _a.onClose, totp = _a.totp;
        var getFieldDecorator = form.getFieldDecorator;
        return (React.createElement(Base, { isOpen: isOpen, title: "Anmelden", onOk: this.ok, onCancel: onClose },
            React.createElement(Form.Item, __assign({ key: "email", label: "E-Mail" }, layout), getFieldDecorator('email', {
                initialValue: email,
                rules: [
                    { required: true, message: 'Bitte geben Sie Ihre E-Mail an!' },
                ],
            })(React.createElement(Input, { type: "email", placeholder: "E-Mail", onKeyPress: onEnterFocus(function () { return _this.input; }), size: "large", addonAfter: React.createElement(FaEnvelope, { size: 10 }) }))),
            React.createElement(Form.Item, __assign({ key: "password", label: "Passwort" }, layout), getFieldDecorator('password', {
                rules: [{ required: true, message: 'Bitte das Passwort angeben!' }],
            })(React.createElement(Input, { type: "password", placeholder: "Password", onKeyPress: onEnterOk(this.ok), ref: function (x) { return (_this.input = x); }, size: "large", addonAfter: React.createElement(FaStar, { size: 10 }) }))),
            totp &&
                React.createElement(Form.Item, __assign({ key: "totp", label: "Token" }, layout), getFieldDecorator('totp')(React.createElement(Input, { type: "text", placeholder: "Token", onKeyPress: onEnterOk(this.ok), ref: function (x) { return (_this.totp = x); }, size: "large", addonAfter: React.createElement(FaStar, { size: 10 }) }))),
            React.createElement(Modal.Links, null,
                React.createElement(Link, { to: {
                        pathname: pathname,
                        query: { register: null, login: undefined, totp: undefined },
                    } }, "Zur Registrierung"),
                React.createElement(Link, { to: {
                        pathname: pathname,
                        query: {
                            forgot: form.getFieldValue('email') || null,
                            login: undefined,
                            totp: undefined,
                        },
                    } }, "Passwort vergessen?"))));
    };
    AuthLogin = __decorate([
        withRouter,
        withAuth,
        Form.create()
    ], AuthLogin);
    return AuthLogin;
}(Component));
export default AuthLogin;
//# sourceMappingURL=login.js.map