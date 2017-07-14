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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { withLang, Logo } from 'olymp-utils';
import { Link } from 'olymp-router';
import { withAuth } from 'olymp-auth';
import { Menu, Icon } from 'antd';
import { createComponent } from 'olymp-fela';
import { GatewayDest, GatewayRegistry } from 'react-gateway';
import Gravatar from 'react-gravatar';
import { get } from 'lodash';
var getInitials = function (name) {
    if (name) {
        var array = name.split(' ');
        switch (array.length) {
            case 1:
                return array[0].charAt(0).toUpperCase();
            default:
                return (array[0].charAt(0).toUpperCase() +
                    array[array.length - 1].charAt(0).toUpperCase());
        }
    }
    return false;
};
var UserIcon = createComponent(function (_a) {
    var theme = _a.theme, name = _a.name;
    return ({
        float: 'left',
        borderRadius: '50%',
        marginY: theme.space2,
        background: "url(https://invatar0.appspot.com/svg/" + getInitials(name) + ".jpg?s=26&bg=" + encodeURIComponent(theme.color) + "&color=" + encodeURIComponent(theme.light) + ") center center no-repeat, " + theme.color,
        onHover: {
            opacity: 0.85,
        },
    });
}, function (p) { return React.createElement(Gravatar, __assign({}, p, { size: 30 })); }, function (p) { return Object.keys(p); });
var VerticalMenu = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        position: 'relative',
        zIndex: 3,
        backgroundColor: '#404040',
        boxShadow: 'inset 0 -10px 10px -10px #000000',
        paddingX: theme.space2,
        display: 'flex',
        justifyContent: 'space-between',
        '> ul': {
            zIndex: 3,
            boxShadow: 'inset 0 -10px 10px -10px #000000',
        },
        ifSmallDown: {
            display: 'none',
        },
    });
}, 'div', function (p) { return Object.keys(p); });
var LeftMenu = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        float: 'left',
    });
}, function (p) { return React.createElement(Menu, __assign({}, p)); }, function (p) { return Object.keys(p); });
var Filler = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        flex: '1 1 0%',
    });
}, function (p) { return React.createElement("div", __assign({}, p)); }, function (p) { return Object.keys(p); });
var RightMenu = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        float: 'right !important',
        '> ul': {
            right: 0,
            left: 'auto !important',
            '> li > ul': {
                left: 'auto !important',
                marginLeft: '0 !important',
                right: '100%',
                marginRight: 4,
            },
        },
    });
}, function (p) { return React.createElement(Menu.SubMenu, __assign({}, p)); }, function (p) { return Object.keys(p); });
var AntMenu = function (_a) {
    var keys = _a.keys, p = __rest(_a, ["keys"]);
    return React.createElement(LeftMenu, __assign({ theme: "dark", selectedKeys: keys, mode: "horizontal" }, p));
};
var AntSubMenu = function (_a) {
    var keys = _a.keys, title = _a.title, children = _a.children, p = __rest(_a, ["keys", "title", "children"]);
    return React.createElement(AntMenu, __assign({}, p),
        React.createElement(RightMenu, { title: title || React.createElement(Icon, { type: "bars" }) }, children));
};
var Navigation = (function (_super) {
    __extends(Navigation, _super);
    function Navigation(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            children: null,
        };
        _this.gatewayRegistry = context.gatewayRegistry;
        return _this;
    }
    Navigation.prototype.componentWillMount = function () {
        this.gatewayRegistry.addContainer('toolbar', this);
    };
    Navigation.prototype.componentWillUnmount = function () {
        this.gatewayRegistry.removeContainer('toolbar', this);
    };
    Navigation.prototype.render = function () {
        var _a = this.props, auth = _a.auth, deviceWidth = _a.deviceWidth, query = _a.query, collectionList = _a.collectionList;
        var children = this.state.children;
        var keys = Object.keys(query);
        if (!keys.filter(function (x) { return x[0] === '@'; }).length) {
            keys.push('@home');
        }
        return (React.createElement(VerticalMenu, null,
            React.createElement(AntMenu, { keys: keys },
                React.createElement(Menu.Item, null,
                    React.createElement(Link, { to: { query: { '@deviceWidth': deviceWidth } } },
                        React.createElement(Logo, { size: 33, margin: "0 0 -7px 0" }))),
                React.createElement(Menu.Item, { key: "@page" },
                    React.createElement(Link, { to: {
                            query: { '@page': null, '@deviceWidth': deviceWidth },
                        } },
                        React.createElement(Icon, { type: "bars" }),
                        " Seiten")),
                React.createElement(Menu.Item, { key: "@media" },
                    React.createElement(Link, { to: { query: { '@media': null } } },
                        React.createElement(Icon, { type: "picture" }),
                        " Medien")),
                React.createElement(Menu.SubMenu, { title: React.createElement("span", null,
                        React.createElement(Icon, { type: "database" }),
                        " Sammlungen") }, collectionList.map(function (collection) {
                    return React.createElement(Menu.Item, { key: "@" + collection.name.toLowerCase() },
                        React.createElement(Link, { to: {
                                query: (_a = {},
                                    _a["@" + collection.name.toLowerCase()] = null,
                                    _a),
                            } },
                            React.createElement(Icon, { type: "api" }),
                            ' ',
                            get(collection, 'decorators.label.value', collection.name)));
                    var _a;
                })),
                React.createElement(Menu.Item, { key: "@analytics" },
                    React.createElement(Link, { to: { query: { '@analytics': null } } },
                        React.createElement(Icon, { type: "line-chart" }),
                        " Analytics")),
                !!auth.user &&
                    auth.user.isAdmin &&
                    React.createElement(Menu.Item, { key: "@users" },
                        React.createElement(Link, { to: { query: { '@users': null } } },
                            React.createElement(Icon, { type: "team" }),
                            " Benutzer"))),
            React.createElement(Filler, null),
            createElement(AntMenu, {}, children),
            React.createElement(GatewayDest, { name: "quick", component: AntMenu }),
            React.createElement("div", null,
                React.createElement(GatewayDest, { name: "navigation", component: children && children.length ? AntSubMenu : AntMenu }),
                React.createElement(AntSubMenu, { title: React.createElement(UserIcon, { email: auth.user.email, name: auth.user.name, default: "blank" }) },
                    React.createElement(Menu.Item, { key: "@user" },
                        React.createElement(Link, { to: { query: { '@user': null } } },
                            React.createElement(Icon, { type: "user" }),
                            " Profil")),
                    React.createElement(Menu.SubMenu, { title: React.createElement("span", null,
                            React.createElement(Icon, { type: "laptop" }),
                            " Ansicht") },
                        React.createElement(Menu.Item, { key: "@device-no" },
                            React.createElement(Link, { to: { query: __assign({}, query, { '@deviceWidth': undefined }) } },
                                React.createElement(Icon, { type: "laptop" }),
                                " Normal")),
                        React.createElement(Menu.Item, { key: "@deviceWidth700" },
                            React.createElement(Link, { to: { query: __assign({}, query, { '@deviceWidth': 700 }) } },
                                React.createElement(Icon, { type: "tablet" }),
                                " Tablet")),
                        React.createElement(Menu.Item, { key: "@deviceWidth400" },
                            React.createElement(Link, { to: { query: __assign({}, query, { '@deviceWidth': 400 }) } },
                                React.createElement(Icon, { type: "phone" }),
                                " Mobil"))),
                    React.createElement(Menu.Item, { key: "logout" },
                        React.createElement("a", { onClick: auth.logout, href: "javascript:;" },
                            React.createElement(Icon, { type: "poweroff" }),
                            " Abmelden"))))));
    };
    Navigation.contextTypes = {
        gatewayRegistry: PropTypes.instanceOf(GatewayRegistry).isRequired,
    };
    Navigation = __decorate([
        withLang,
        withAuth
    ], Navigation);
    return Navigation;
}(Component));
export default Navigation;
//# sourceMappingURL=navigation.js.map