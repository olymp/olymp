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
import { Link } from 'olymp-router';
import { Modal } from 'olymp-ui';
import { Form, Input } from 'antd';
import { FaEnvelope } from 'olymp-icons';
import withAuth from '../with-auth';
import Base, { onEnterOk, layout, onError, onSuccess } from './base';
var AuthForgot = (function (_super) {
    __extends(AuthForgot, _super);
    function AuthForgot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ok = function () {
            var _a = _this.props, auth = _a.auth, onClose = _a.onClose, onOk = _a.onOk, form = _a.form;
            form.validateFields(function (err, values) {
                if (err) {
                    return onError(err);
                }
                auth
                    .forgot(values.email)
                    .then(function (_a) {
                    var name = _a.name;
                    onSuccess('E-Mail abgeschickt', 'Bitte bestätigen Sie die Zurücksetzung');
                    onOk({ email: values.email });
                })
                    .catch(onError);
            });
        };
        return _this;
    }
    AuthForgot.prototype.render = function () {
        var _a = this.props, isOpen = _a.isOpen, email = _a.email, form = _a.form, saving = _a.saving, pathname = _a.pathname, onClose = _a.onClose;
        var getFieldDecorator = form.getFieldDecorator;
        return (React.createElement(Base, { isOpen: isOpen, title: "Zurücksetzen", onOk: this.ok, onCancel: onClose },
            React.createElement(Form.Item, __assign({ hasFeedback: true, key: "email", label: "E-Mail" }, layout), getFieldDecorator('email', {
                initialValue: email,
                rules: [
                    { required: true, message: 'Bitte geben Sie Ihre E-Mail an!' },
                ],
            })(React.createElement(Input, { type: "email", placeholder: "E-Mail", onKeyPress: onEnterOk(this.ok), size: "large", addonAfter: React.createElement(FaEnvelope, { size: 10 }) }))),
            React.createElement(Modal.Links, null,
                React.createElement(Link, { to: { pathname: pathname, query: { login: null, forgot: undefined } } }, "Zur Anmeldung"))));
    };
    AuthForgot = __decorate([
        withAuth,
        Form.create()
    ], AuthForgot);
    return AuthForgot;
}(Component));
export default AuthForgot;
//# sourceMappingURL=forgot.js.map