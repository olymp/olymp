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
import { SplitView, Sidebar, List } from 'olymp-ui';
import AuthProfile from './profile';
var AuthUsers = (function (_super) {
    __extends(AuthUsers, _super);
    function AuthUsers() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { user: undefined };
        return _this;
    }
    AuthUsers.prototype.render = function () {
        var _this = this;
        var _a = this.props, extraFields = _a.extraFields, deviceWidth = _a.deviceWidth, data = _a.data;
        var user = this.state.user;
        var users = data.users || [];
        return (React.createElement(SplitView, { deviceWidth: deviceWidth },
            React.createElement(Sidebar, { title: "Benutzer", subtitle: "Benutzer bearbeiten" }, users.map(function (user) {
                return (React.createElement(List.Item, { onClick: function () { return _this.setState({ user: user }); }, label: user.name, description: user.isAdmin ? 'Administrator' : 'Benutzer', key: user.id }));
            })),
            React.createElement(AuthProfile, { user: user, extraFields: extraFields })));
    };
    AuthUsers = __decorate([
        graphql((_a = ["\n  query userList {\n    users: userList {\n      id, name, email, isAdmin\n    }\n  }\n"], _a.raw = ["\n  query userList {\n    users: userList {\n      id, name, email, isAdmin\n    }\n  }\n"], gql(_a)))
    ], AuthUsers);
    return AuthUsers;
}(Component));
export default AuthUsers;
var _a;
//# sourceMappingURL=users.js.map