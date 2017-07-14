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
import { graphql, gql } from 'olymp-utils';
import { Link } from 'olymp-router';
import withAuth from '../with-auth';
import { Button, Form, Input, Icon } from 'antd';
import { FaEnvelope } from 'olymp-icons';
import { Modal, SplitView, List, Panel, onEnterFocus, layout, onError, onSuccess, } from 'olymp-ui';
var AuthInvitations = (function (_super) {
    __extends(AuthInvitations, _super);
    function AuthInvitations() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { search: '' };
        _this.ok = function () {
            var _a = _this.props, auth = _a.auth, onClose = _a.onClose, form = _a.form;
            form.validateFields(function (err, values) {
                if (err) {
                    return onError(err);
                }
                var user = __assign({}, values);
                auth
                    .save(user)
                    .then(function (_a) {
                    var name = _a.name;
                    onSuccess('Gespeichert', 'Das Profil wurde gespeichert');
                    onClose();
                })
                    .catch(onError);
            });
        };
        return _this;
    }
    AuthInvitations.prototype.render = function () {
        var _this = this;
        var _a = this.props, id = _a.id, isOpen = _a.isOpen, pathname = _a.pathname, onClose = _a.onClose, data = _a.data;
        var search = this.state.search;
        var items = data.items || [];
        if (search) {
            items = items.filter(function (_a) {
                var name = _a.name;
                return name && name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
            });
        }
        return (React.createElement(Modal, { isOpen: isOpen, onClose: onClose, width: "auto", padding: 0, title: "Einladungen", subtitle: "Einladungen sehen und verschicken" },
            React.createElement(AuthInviationDetail, { id: null })));
        return (React.createElement(Modal, { isOpen: isOpen, onClose: onClose, width: "auto", padding: 0, title: "Einladungen", subtitle: "Einladungen sehen und verschicken" },
            React.createElement(SplitView, null,
                React.createElement(List, { side: "left" },
                    React.createElement(List.Title, { buttons: React.createElement(Button, { size: "small", onClick: function () { return console.log(); } },
                            React.createElement(Link, { to: { pathname: pathname, query: { '@invitations': 'new' } } },
                                React.createElement(Icon, { type: "plus" }))) }, "Einladungen"),
                    React.createElement(List.Filter, { placeholder: "Filter ...", onChange: function (search) { return _this.setState({ search: search }); }, value: search }),
                    items.map(function (item) {
                        return React.createElement(List.Item, { to: { pathname: pathname, query: { '@invitations': item.id } }, key: item.id, label: item.name, description: "Benutzer" });
                    })),
                id && id === 'new' && React.createElement(AuthInviationDetail, { id: null }),
                id && id !== 'new' && React.createElement(AuthInviationDetail, { key: id, id: id })),
            React.createElement(Modal.Links, null,
                React.createElement(Link, { to: {
                        pathname: pathname,
                        query: { '@invitations': undefined, '@users': null },
                    } }, "Benutzer verwalten"))));
    };
    AuthInvitations.defaultProps = { data: {} };
    AuthInvitations = __decorate([
        graphql((_a = ["\n    query invitationList {\n      items: invitationList {\n        id\n        name\n        email\n      }\n    }\n  "], _a.raw = ["\n    query invitationList {\n      items: invitationList {\n        id\n        name\n        email\n      }\n    }\n  "], gql(_a)), {
            options: function (_a) {
                var isOpen = _a.isOpen;
                return ({ skip: !isOpen });
            },
        })
    ], AuthInvitations);
    return AuthInvitations;
}(Component));
export default AuthInvitations;
var AuthInviationDetail = (function (_super) {
    __extends(AuthInviationDetail, _super);
    function AuthInviationDetail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ok = function () {
            var _a = _this.props, auth = _a.auth, form = _a.form, data = _a.data;
            var item = data.item || {};
            form.validateFields(function (err, values) {
                if (err) {
                    return onError(err);
                }
                var invitation = __assign({}, item, values);
                delete invitation.__typename;
                auth
                    .invitation(invitation)
                    .then(function (_a) {
                    var name = _a.name;
                    onSuccess('Gespeichert', 'Das Profil wurde gespeichert');
                })
                    .catch(onError);
            });
        };
        return _this;
    }
    AuthInviationDetail.prototype.render = function () {
        var _this = this;
        var _a = this.props, form = _a.form, saving = _a.saving, pathname = _a.pathname, data = _a.data;
        var getFieldDecorator = form.getFieldDecorator;
        var item = data.item || {};
        return (React.createElement(Panel, { minWidth: 560, margin: "0 30px", padding: 16 },
            React.createElement(Form.Item, __assign({ key: "name", label: "Name" }, layout), getFieldDecorator('name', {
                initialValue: item.name,
                rules: [
                    { required: true, message: 'Bitte geben Sie Ihren Namen an' },
                ],
            })(React.createElement(Input, { type: "text", placeholder: "Name", onKeyPress: onEnterFocus(function () { return _this.mail; }), size: "large" }))),
            React.createElement(Form.Item, __assign({ key: "email", label: "E-Mail" }, layout), getFieldDecorator('email', {
                initialValue: item.email,
                rules: [
                    { required: true, message: 'Bitte geben Sie Ihre E-Mail an!' },
                ],
            })(React.createElement(Input, { type: "email", placeholder: "E-Mail", onKeyPress: onEnterFocus(function () { return _this.pw1; }), ref: function (x) { return (_this.mail = x); }, size: "large", addonAfter: React.createElement(FaEnvelope, { size: 10 }) }))),
            React.createElement(Button, { onClick: this.ok }, "Speichern")));
    };
    AuthInviationDetail = __decorate([
        withAuth,
        graphql((_a = ["\n    query invitation($id: String) {\n      item: invitation(id: $id) {\n        id\n        name\n        email\n      }\n    }\n  "], _a.raw = ["\n    query invitation($id: String) {\n      item: invitation(id: $id) {\n        id\n        name\n        email\n      }\n    }\n  "], gql(_a)), {
            options: function (_a) {
                var id = _a.id;
                return ({
                    fetchPolicy: !id ? 'cache-only' : undefined,
                    variables: { id: id },
                });
            },
        }),
        Form.create()
    ], AuthInviationDetail);
    return AuthInviationDetail;
}(Component));
var _a, _a;
//# sourceMappingURL=invitations.js.map