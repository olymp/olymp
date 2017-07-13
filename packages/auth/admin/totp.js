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
import { Form, Input } from 'antd';
import { FaStar } from 'olymp-icons';
import { onEnterFocus, onError, onSuccess } from '../views/base';
var AuthTotp = (function (_super) {
    __extends(AuthTotp, _super);
    function AuthTotp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ok = function () {
            var _a = _this.props, auth = _a.auth, onClose = _a.onClose, onOk = _a.onOk, form = _a.form, data = _a.data;
            var enabled = data.totp && data.totp.enabled;
            form.validateFields(function (err, values) {
                if (err) {
                    return onError(err);
                }
                if (enabled) {
                    auth
                        .totpConfirm(data.totp.token)
                        .then(function () {
                        onSuccess('Gespeichert', '2-Faktor Authentifizierung deaktiviert');
                        onClose();
                    })
                        .catch(onError);
                }
                else {
                    auth
                        .totpConfirm(data.totp.token, values.token)
                        .then(function () {
                        onSuccess('Gespeichert', '2-Faktor Authentifizierung aktiviert');
                        onClose();
                    })
                        .catch(onError);
                }
            });
        };
        return _this;
    }
    AuthTotp.prototype.render = function () {
        var _this = this;
        var _a = this.props, form = _a.form, data = _a.data;
        var getFieldDecorator = form.getFieldDecorator;
        var qr = data.totp && data.totp.qr;
        var enabled = data.totp && data.totp.enabled;
        return (React.createElement("div", { style: { marginBottom: 20 } },
            React.createElement("div", { dangerouslySetInnerHTML: { __html: qr } }),
            React.createElement("p", null,
                "Scannen Sie diesen QR-Code z.B. mithilfe der",
                ' ',
                React.createElement("a", { href: "https://support.google.com/accounts/answer/1066447?hl=de", target: "_blank", rel: "noopener noreferrer" }, "Google Authenticator"),
                ' ',
                "App. Geben Sie anschlie\u00DFend einen generierten Code unten ein um die Nutzung der 2-Faktor Authentifizierung zu best\u00E4tigen."),
            React.createElement(Form.Item, { key: "token" }, getFieldDecorator('token', {})(React.createElement(Input, { type: "text", placeholder: "Token", onKeyPress: onEnterFocus(function () { return _this.ok; }), size: "large", addonAfter: React.createElement(FaStar, { size: 10 }) })))));
    };
    AuthTotp.defaultProps = { data: {} };
    AuthTotp = __decorate([
        graphql((_a = ["\n  query totp {\n    totp { qr, token, enabled }\n  }\n"], _a.raw = ["\n  query totp {\n    totp { qr, token, enabled }\n  }\n"], gql(_a)), {
            options: function (_a) {
                var isOpen = _a.isOpen;
                return ({
                    fetchPolicy: 'network-only',
                    skip: !isOpen,
                });
            },
        })
    ], AuthTotp);
    return AuthTotp;
}(Component));
export default AuthTotp;
var _a;
//# sourceMappingURL=totp.js.map