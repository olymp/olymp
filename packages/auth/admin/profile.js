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
import withAuth from '../with-auth';
import { createComponent, Grid } from 'olymp-fela';
import { Container } from 'olymp-ui';
import { Form, Input, Button, Checkbox } from 'antd';
import { FaEnvelope } from 'olymp-icons';
import { onError, onSuccess, onEnterFocus } from '../views/base';
var layout = { labelCol: { span: 7 }, wrapperCol: { span: 17 } };
export var H1 = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.color,
        textAlign: 'center',
        fontWeight: 200,
    });
}, 'h1', function (p) { return Object.keys(p); });
export var H3 = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        textAlign: 'center',
        fontWeight: 200,
    });
}, 'h3', function (p) { return Object.keys(p); });
export var FormItem = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        marginY: theme.space3,
        '& .ant-form-item-control': {
            '> *': {
                width: '100%',
            },
        },
    });
}, Form.Item, function (p) { return Object.keys(p); });
var AuthProfile = (function (_super) {
    __extends(AuthProfile, _super);
    function AuthProfile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ok = function () {
            var _a = _this.props, form = _a.form, auth = _a.auth;
            var user = _this.props.user || auth.user;
            form.validateFields(function (err, values) {
                if (err) {
                    return onError(err);
                }
                var newUser = __assign({}, user, values);
                delete newUser.__typename;
                auth
                    .save(newUser)
                    .then(function (_a) {
                    var name = _a.name;
                    onSuccess('Gespeichert', 'Das Profil wurde gespeichert');
                })
                    .catch(onError);
            });
        };
        return _this;
    }
    AuthProfile.prototype.render = function () {
        var _this = this;
        var _a = this.props, form = _a.form, extraFields = _a.extraFields, auth = _a.auth;
        var user = (auth.user.isAdmin && this.props.user) || auth.user;
        return (React.createElement(Container, null,
            React.createElement(H1, null, user.name),
            React.createElement(H3, null, "Profil bearbeiten"),
            React.createElement(Form, { onSubmit: this.ok },
                React.createElement(FormItem, __assign({ key: "name", label: "Name" }, layout), form.getFieldDecorator('name', {
                    initialValue: user.name,
                    rules: [
                        { required: true, message: 'Bitte geben Sie Ihren Namen an' },
                    ],
                })(React.createElement(Input, { type: "text", placeholder: "Name", onKeyPress: onEnterFocus(function () { return _this.mail; }), size: "large" }))),
                React.createElement(FormItem, __assign({ key: "email", label: "E-Mail" }, layout), form.getFieldDecorator('email', {
                    initialValue: user.email,
                    rules: [
                        {
                            required: true,
                            message: 'Bitte geben Sie Ihre E-Mail an!',
                        },
                    ],
                })(React.createElement(Input, { type: "email", placeholder: "E-Mail", ref: function (x) { return (_this.mail = x); }, size: "large", addonAfter: React.createElement(FaEnvelope, { size: 10 }) }))),
                auth.user.isAdmin &&
                    React.createElement(FormItem, __assign({ key: "isAdmin", label: "Administrator" }, layout),
                        React.createElement(Checkbox, { checked: user.isAdmin, disabled: true }, user.isAdmin ? 'ist Administrator' : 'ist kein Administrator')),
                extraFields
                    ? extraFields({
                        layout: layout,
                        getFieldDecorator: form.getFieldDecorator,
                        state: this.state,
                        setState: this.setState,
                    })
                    : null,
                React.createElement(Grid, { size: 24 },
                    React.createElement(Grid.Item, { offsetMedium: 7, medium: 17 },
                        React.createElement(Button, { type: "primary", onClick: this.ok }, "Speichern"),
                        "\u00A0",
                        auth.user.id !== user.id &&
                            React.createElement(Button, { disabled: true, onClick: this.ok }, "L\u00F6schen"))))));
    };
    AuthProfile = __decorate([
        withAuth,
        Form.create()
    ], AuthProfile);
    return AuthProfile;
}(Component));
export default AuthProfile;
//# sourceMappingURL=profile.js.map