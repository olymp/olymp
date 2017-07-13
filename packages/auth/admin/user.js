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
import withAuth from '../with-auth';
import AuthProfile from './profile';
var AuthUsers = (function (_super) {
    __extends(AuthUsers, _super);
    function AuthUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthUsers.prototype.render = function () {
        var _a = this.props, extraFields = _a.extraFields, auth = _a.auth;
        return React.createElement(AuthProfile, { user: auth.user, extraFields: extraFields });
    };
    AuthUsers = __decorate([
        withAuth
    ], AuthUsers);
    return AuthUsers;
}(Component));
export default AuthUsers;
//# sourceMappingURL=user.js.map