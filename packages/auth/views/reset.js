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
import { FaStar } from 'olymp-icons';
import withAuth from '../with-auth';
import Base, { onEnterFocus, onEnterOk, layout, onError, onSuccess, } from './base';
var AuthReset = (function (_super) {
    __extends(AuthReset, _super);
    function AuthReset() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ok = function () {
            var _a = _this.props, auth = _a.auth, token = _a.token, onOk = _a.onOk, onClose = _a.onClose, form = _a.form;
            form.validateFields(function (err, values) {
                if (err) {
                    return onError(err);
                }
                if (values.password2 !== values.password) {
                    return onError(new Error('Die Passwörter stimmen nicht überein!'));
                }
                auth
                    .reset(token, values.password)
                    .then(function (_a) {
                    var email = _a.email;
                    onSuccess('Zurücksetzung erfolgreich', 'Sie können sich jetzt anmelden');
                    onOk({ email: email });
                })
                    .catch(onError);
            });
        };
        return _this;
    }
    AuthReset.prototype.render = function () {
        var _this = this;
        var _a = this.props, isOpen = _a.isOpen, email = _a.email, form = _a.form, saving = _a.saving, pathname = _a.pathname, onClose = _a.onClose, data = _a.data;
        var getFieldDecorator = form.getFieldDecorator;
        var loading = data.valid !== true && data.valid !== false;
        var valid = data.valid !== false;
        return (React.createElement(Base, { isOpen: isOpen, title: "Zurücksetzen", onOk: valid ? this.ok : null, onCancel: onClose, loading: loading ? 'Prüfe Token ...' : false },
            valid &&
                React.createElement(Form.Item, __assign({ key: "password", label: "Passwort" }, layout), getFieldDecorator('password', {
                    rules: [
                        { required: true, message: 'Bitte das Passwort angeben!' },
                    ],
                })(React.createElement(Input, { type: "password", placeholder: "Password", onKeyPress: onEnterFocus(function () { return _this.input; }), size: "large", addonAfter: React.createElement(FaStar, { size: 10 }) }))),
            valid &&
                React.createElement(Form.Item, __assign({ key: "password2", label: "Wiederholen" }, layout), getFieldDecorator('password2', {
                    rules: [
                        {
                            required: true,
                            message: 'Bitte das wiederholte Passwort angeben!',
                        },
                    ],
                })(React.createElement(Input, { type: "password", placeholder: "Password wiederholen", onKeyPress: onEnterOk(this.ok), ref: function (x) { return (_this.input = x); }, size: "large", addonAfter: React.createElement(FaStar, { size: 10 }) }))),
            !valid &&
                React.createElement("p", { style: { textAlign: 'center' } },
                    "Das Token ist ung\u00FCltig oder abgelaufen. Bitte",
                    ' ',
                    React.createElement(Link, { to: { pathname: pathname, query: { forgot: null, reset: undefined } } }, "beantragen Sie das Zur\u00FCcksetzen des Passworts erneut"),
                    ' ',
                    "oder",
                    ' ',
                    React.createElement(Link, { to: { pathname: pathname, query: { feedback: null, reset: undefined } } }, "kontaktieren Sie den Support"),
                    "."),
            React.createElement(Modal.Links, null,
                React.createElement(Link, { to: { pathname: pathname, query: { login: null, reset: undefined } } }, "Zur Anmeldung"))));
    };
    AuthReset = __decorate([
        withAuth,
        Form.create(),
        graphql((_a = ["\n  query checkToken($token: String) {\n    valid: checkToken(token: $token)\n  }\n"], _a.raw = ["\n  query checkToken($token: String) {\n    valid: checkToken(token: $token)\n  }\n"], gql(_a)), {
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
    ], AuthReset);
    return AuthReset;
}(Component));
export default AuthReset;
var _a;
//# sourceMappingURL=reset.js.map