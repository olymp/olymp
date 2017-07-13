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
import { Link } from 'olymp-utils';
import { Modal } from 'olymp-ui';
import withAuth from '../with-auth';
import Base from './base';
var AuthStatus = (function (_super) {
    __extends(AuthStatus, _super);
    function AuthStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthStatus.prototype.render = function () {
        var _a = this.props, isOpen = _a.isOpen, pathname = _a.pathname, onClose = _a.onClose, text = _a.text;
        return (React.createElement(Base, { isOpen: isOpen, title: "Status", onOk: this.ok, onCancel: onClose, cancelText: "Schließen" },
            React.createElement("p", { style: { textAlign: 'center' } }, text),
            React.createElement(Modal.Links, null,
                React.createElement(Link, { to: { pathname: pathname, query: { login: null, register: undefined } } }, "Zur Anmeldung"))));
    };
    AuthStatus = __decorate([
        withAuth
    ], AuthStatus);
    return AuthStatus;
}(Component));
export default AuthStatus;
//# sourceMappingURL=status.js.map