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
        hasFlex: {
            display: 'flex',
            justifyContent: 'space-between',
        },
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F0aGVuYS9uYXZpZ2F0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDeEQsT0FBTyxTQUFTLE1BQU0sWUFBWSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sUUFBUSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFN0IsSUFBTSxXQUFXLEdBQUcsVUFBQSxJQUFJO0lBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDVCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTlCLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEtBQUssQ0FBQztnQkFDSixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMxQztnQkFDRSxNQUFNLENBQUMsQ0FDTCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FB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QUFVLENBQUMiLCJmaWxlIjoicGFja2FnZXMvYXRoZW5hL25hdmlnYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhMYW5nLCBMb2dvIH0gZnJvbSAnb2x5bXAtdXRpbHMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgeyB3aXRoQXV0aCB9IGZyb20gJ29seW1wLWF1dGgnO1xuaW1wb3J0IHsgTWVudSwgSWNvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBHYXRld2F5RGVzdCwgR2F0ZXdheVJlZ2lzdHJ5IH0gZnJvbSAncmVhY3QtZ2F0ZXdheSc7XG5pbXBvcnQgR3JhdmF0YXIgZnJvbSAncmVhY3QtZ3JhdmF0YXInO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgZ2V0SW5pdGlhbHMgPSBuYW1lID0+IHtcbiAgaWYgKG5hbWUpIHtcbiAgICBjb25zdCBhcnJheSA9IG5hbWUuc3BsaXQoJyAnKTtcblxuICAgIHN3aXRjaCAoYXJyYXkubGVuZ3RoKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBhcnJheVswXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgYXJyYXlbMF0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpXG4gICAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IFVzZXJJY29uID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgbmFtZSB9KSA9PiAoe1xuICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBtYXJnaW5ZOiB0aGVtZS5zcGFjZTIsXG4gICAgYmFja2dyb3VuZDogYHVybChodHRwczovL2ludmF0YXIwLmFwcHNwb3QuY29tL3N2Zy8ke2dldEluaXRpYWxzKFxuICAgICAgbmFtZVxuICAgICl9LmpwZz9zPTI2JmJnPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgdGhlbWUuY29sb3JcbiAgICApfSZjb2xvcj0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgIHRoZW1lLmxpZ2h0XG4gICAgKX0pIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0LCAke3RoZW1lLmNvbG9yfWAsXG4gICAgb25Ib3Zlcjoge1xuICAgICAgb3BhY2l0eTogMC44NSxcbiAgICB9LFxuICB9KSxcbiAgcCA9PiA8R3JhdmF0YXIgey4uLnB9IHNpemU9ezMwfSAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgVmVydGljYWxNZW51ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHpJbmRleDogMyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDA0MDQwJyxcbiAgICBib3hTaGFkb3c6ICdpbnNldCAwIC0xMHB4IDEwcHggLTEwcHggIzAwMDAwMCcsXG4gICAgcGFkZGluZ1g6IHRoZW1lLnNwYWNlMixcbiAgICBoYXNGbGV4OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIH0sXG4gICAgJz4gdWwnOiB7XG4gICAgICB6SW5kZXg6IDMsXG4gICAgICBib3hTaGFkb3c6ICdpbnNldCAwIC0xMHB4IDEwcHggLTEwcHggIzAwMDAwMCcsXG4gICAgfSxcbiAgICBpZlNtYWxsRG93bjoge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgTGVmdE1lbnUgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgZmxvYXQ6ICdsZWZ0JyxcbiAgfSksXG4gIHAgPT4gPE1lbnUgey4uLnB9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5jb25zdCBGaWxsZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgZmxleDogJzEgMSAwJScsXG4gIH0pLFxuICBwID0+IDxkaXYgey4uLnB9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5jb25zdCBSaWdodE1lbnUgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgZmxvYXQ6ICdyaWdodCAhaW1wb3J0YW50JyxcbiAgICAnPiB1bCc6IHtcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgbGVmdDogJ2F1dG8gIWltcG9ydGFudCcsXG4gICAgICAnPiBsaSA+IHVsJzoge1xuICAgICAgICBsZWZ0OiAnYXV0byAhaW1wb3J0YW50JyxcbiAgICAgICAgbWFyZ2luTGVmdDogJzAgIWltcG9ydGFudCcsXG4gICAgICAgIHJpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1hcmdpblJpZ2h0OiA0LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgcCA9PiA8TWVudS5TdWJNZW51IHsuLi5wfSAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgQW50TWVudSA9ICh7IGtleXMsIC4uLnAgfSkgPT5cbiAgPExlZnRNZW51IHRoZW1lPVwiZGFya1wiIHNlbGVjdGVkS2V5cz17a2V5c30gbW9kZT1cImhvcml6b250YWxcIiB7Li4ucH0gLz47XG5cbmNvbnN0IEFudFN1Yk1lbnUgPSAoeyBrZXlzLCB0aXRsZSwgY2hpbGRyZW4sIC4uLnAgfSkgPT5cbiAgPEFudE1lbnUgey4uLnB9PlxuICAgIDxSaWdodE1lbnUgdGl0bGU9e3RpdGxlIHx8IDxJY29uIHR5cGU9XCJiYXJzXCIgLz59PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUmlnaHRNZW51PlxuICA8L0FudE1lbnU+O1xuXG5Ad2l0aExhbmdcbkB3aXRoQXV0aFxuY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgZ2F0ZXdheVJlZ2lzdHJ5OiBQcm9wVHlwZXMuaW5zdGFuY2VPZihHYXRld2F5UmVnaXN0cnkpLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgdGhpcy5nYXRld2F5UmVnaXN0cnkgPSBjb250ZXh0LmdhdGV3YXlSZWdpc3RyeTtcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmdhdGV3YXlSZWdpc3RyeS5hZGRDb250YWluZXIoJ3Rvb2xiYXInLCB0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZ2F0ZXdheVJlZ2lzdHJ5LnJlbW92ZUNvbnRhaW5lcigndG9vbGJhcicsIHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYXV0aCwgZGV2aWNlV2lkdGgsIHF1ZXJ5LCBjb2xsZWN0aW9uTGlzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhxdWVyeSk7XG4gICAgaWYgKCFrZXlzLmZpbHRlcih4ID0+IHhbMF0gPT09ICdAJykubGVuZ3RoKSB7XG4gICAgICBrZXlzLnB1c2goJ0Bob21lJyk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8VmVydGljYWxNZW51PlxuICAgICAgICA8QW50TWVudSBrZXlzPXtrZXlzfT5cbiAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgPExpbmsgdG89e3sgcXVlcnk6IHsgJ0BkZXZpY2VXaWR0aCc6IGRldmljZVdpZHRoIH0gfX0+XG4gICAgICAgICAgICAgIDxMb2dvIHNpemU9ezMzfSBtYXJnaW49XCIwIDAgLTdweCAwXCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L01lbnUuSXRlbT5cblxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiQHBhZ2VcIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgJ0BwYWdlJzogbnVsbCwgJ0BkZXZpY2VXaWR0aCc6IGRldmljZVdpZHRoIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJiYXJzXCIgLz4gU2VpdGVuXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJAbWVkaWFcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPXt7IHF1ZXJ5OiB7ICdAbWVkaWEnOiBudWxsIH0gfX0+XG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJwaWN0dXJlXCIgLz4gTWVkaWVuXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPE1lbnUuU3ViTWVudVxuICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiZGF0YWJhc2VcIiAvPiBTYW1tbHVuZ2VuXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y29sbGVjdGlvbkxpc3QubWFwKGNvbGxlY3Rpb24gPT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2BAJHtjb2xsZWN0aW9uLm5hbWUudG9Mb3dlckNhc2UoKX1gfT5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICBbYEAke2NvbGxlY3Rpb24ubmFtZS50b0xvd2VyQ2FzZSgpfWBdOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiYXBpXCIgLz57JyAnfVxuICAgICAgICAgICAgICAgICAge2dldChjb2xsZWN0aW9uLCAnZGVjb3JhdG9ycy5sYWJlbC52YWx1ZScsIGNvbGxlY3Rpb24ubmFtZSl9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJAYW5hbHl0aWNzXCI+XG4gICAgICAgICAgICA8TGluayB0bz17eyBxdWVyeTogeyAnQGFuYWx5dGljcyc6IG51bGwgfSB9fT5cbiAgICAgICAgICAgICAgPEljb24gdHlwZT1cImxpbmUtY2hhcnRcIiAvPiBBbmFseXRpY3NcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICB7ISFhdXRoLnVzZXIgJiZcbiAgICAgICAgICAgIGF1dGgudXNlci5pc0FkbWluICYmXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIkB1c2Vyc1wiPlxuICAgICAgICAgICAgICA8TGluayB0bz17eyBxdWVyeTogeyAnQHVzZXJzJzogbnVsbCB9IH19PlxuICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ0ZWFtXCIgLz4gQmVudXR6ZXJcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+fVxuICAgICAgICA8L0FudE1lbnU+XG5cbiAgICAgICAgPEZpbGxlciAvPlxuICAgICAgICB7Y3JlYXRlRWxlbWVudChBbnRNZW51LCB7fSwgY2hpbGRyZW4pfVxuXG4gICAgICAgIDxHYXRld2F5RGVzdCBuYW1lPVwicXVpY2tcIiBjb21wb25lbnQ9e0FudE1lbnV9IC8+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8R2F0ZXdheURlc3RcbiAgICAgICAgICAgIG5hbWU9XCJuYXZpZ2F0aW9uXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17Y2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoID8gQW50U3ViTWVudSA6IEFudE1lbnV9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxBbnRTdWJNZW51XG4gICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgIDxVc2VySWNvblxuICAgICAgICAgICAgICAgIGVtYWlsPXthdXRoLnVzZXIuZW1haWx9XG4gICAgICAgICAgICAgICAgbmFtZT17YXV0aC51c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgZGVmYXVsdD1cImJsYW5rXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIkB1c2VyXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXt7IHF1ZXJ5OiB7ICdAdXNlcic6IG51bGwgfSB9fT5cbiAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidXNlclwiIC8+IFByb2ZpbFxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51LlN1Yk1lbnVcbiAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImxhcHRvcFwiIC8+IEFuc2ljaHRcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJAZGV2aWNlLW5vXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e3sgcXVlcnk6IHsgLi4ucXVlcnksICdAZGV2aWNlV2lkdGgnOiB1bmRlZmluZWQgfSB9fT5cbiAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJsYXB0b3BcIiAvPiBOb3JtYWxcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIkBkZXZpY2VXaWR0aDcwMFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXt7IHF1ZXJ5OiB7IC4uLnF1ZXJ5LCAnQGRldmljZVdpZHRoJzogNzAwIH0gfX0+XG4gICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidGFibGV0XCIgLz4gVGFibGV0XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJAZGV2aWNlV2lkdGg0MDBcIj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17eyBxdWVyeTogeyAuLi5xdWVyeSwgJ0BkZXZpY2VXaWR0aCc6IDQwMCB9IH19PlxuICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInBob25lXCIgLz4gTW9iaWxcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImxvZ291dFwiPlxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXthdXRoLmxvZ291dH0gaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJwb3dlcm9mZlwiIC8+IEFibWVsZGVuXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIDwvQW50U3ViTWVudT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1ZlcnRpY2FsTWVudT5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuXG4vKlxuPE1lbnUuSXRlbSBrZXk9XCJAdGVtcGxhdGVcIj5cbiAgPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tXCIgY29udGVudD1cIlRlbXBsYXRlLUxpc3RlXCI+XG4gICAgPExpbmtcbiAgICAgIHRvPXt7IHF1ZXJ5OiB7ICdAdGVtcGxhdGUnOiBudWxsLCAnQGRldmljZVdpZHRoJzogZGV2aWNlV2lkdGggfSB9fVxuICAgID5cbiAgICAgIDxJY29uIHR5cGU9XCJhcHBzdG9yZS1vXCIgLz5cbiAgICA8L0xpbms+XG4gIDwvUG9wb3Zlcj5cbjwvTWVudS5JdGVtPlxuPE1lbnUuSXRlbSBrZXk9XCJAc2hhcmVcIj5cbiAgPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tXCIgY29udGVudD1cIlRlaWxlblwiPlxuICAgIDxMaW5rXG4gICAgICB0bz17eyBxdWVyeTogeyAnQHNoYXJlJzogbnVsbCwgJ0BkZXZpY2VXaWR0aCc6IGRldmljZVdpZHRoIH0gfX1cbiAgICA+XG4gICAgICA8SWNvbiB0eXBlPVwic2hhcmUtYWx0XCIgLz5cbiAgICA8L0xpbms+XG4gIDwvUG9wb3Zlcj5cbjwvTWVudS5JdGVtPlxuPE1lbnUuSXRlbSBrZXk9XCJAdHJhc2hcIj5cbiAgPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tXCIgY29udGVudD1cIlBhcGllcmtvcmJcIj5cbiAgICA8TGlua1xuICAgICAgdG89e3sgcXVlcnk6IHsgJ0B0cmFzaCc6IG51bGwsICdAZGV2aWNlV2lkdGgnOiBkZXZpY2VXaWR0aCB9IH19XG4gICAgPlxuICAgICAgPEljb24gdHlwZT1cImRlbGV0ZVwiIC8+XG4gICAgPC9MaW5rPlxuICA8L1BvcG92ZXI+XG48L01lbnUuSXRlbT5cbjxNZW51Lkl0ZW0ga2V5PVwiQHNldHRpbmdzXCI+XG4gIDxQb3BvdmVyIHBsYWNlbWVudD1cImJvdHRvbVwiIGNvbnRlbnQ9XCJFaW5zdGVsbHVuZ2VuXCI+XG4gICAgPExpbmtcbiAgICAgIHRvPXt7IHF1ZXJ5OiB7ICdAc2V0dGluZ3MnOiBudWxsLCAnQGRldmljZVdpZHRoJzogZGV2aWNlV2lkdGggfSB9fVxuICAgID5cbiAgICAgIDxJY29uIHR5cGU9XCJzZXR0aW5nXCIgLz5cbiAgICA8L0xpbms+XG4gIDwvUG9wb3Zlcj5cbjwvTWVudS5JdGVtPlxuKi9cbiJdfQ==
