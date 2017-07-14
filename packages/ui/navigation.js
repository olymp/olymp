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
import React, { Component } from 'react';
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
    var theme = _a.theme, padding = _a.padding;
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
        '> ul > li.ant-menu-item-selected.ant-menu-item': {
            backgroundColor: theme.color,
            '> a': {
                color: theme.light,
            },
        },
        ifSmallDown: {
            display: 'none',
        },
        padding: padding,
    });
}, 'div', function (_a) {
    var padding = _a.padding, p = __rest(_a, ["padding"]);
    return Object.keys(p);
});
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
        var _a = this.props, auth = _a.auth, padding = _a.padding, _b = _a.query, query = _b === void 0 ? {} : _b, pathname = _a.pathname, children = _a.children, _c = _a.keys, keys = _c === void 0 ? [pathname] : _c;
        return (React.createElement(VerticalMenu, { padding: padding },
            React.createElement(AntMenu, { keys: keys },
                React.createElement(Menu.Item, null,
                    React.createElement(Link, { to: { pathname: pathname } },
                        React.createElement(Logo, { size: 33, margin: "0 0 -7px 0" }))),
                children),
            React.createElement(Filler, null),
            React.createElement(GatewayDest, { name: "quick", component: AntMenu }),
            React.createElement("div", null,
                React.createElement(GatewayDest, { name: "navigation", component: AntMenu }),
                get(auth, 'user') &&
                    React.createElement(AntSubMenu, { title: React.createElement(UserIcon, { email: auth.user.email, name: auth.user.name, default: "blank" }) },
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
Navigation.Item = Menu.Item;
export default Navigation;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL25hdmlnYXRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFpQixNQUFNLE9BQU8sQ0FBQztBQUN4RCxPQUFPLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFDbkMsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxRQUFRLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUU3QixJQUFNLFdBQVcsR0FBRyxVQUFBLElBQUk7SUFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNULElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFOUIsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDckIsS0FBSyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzFDO2dCQUNFLE1BQU0sQ0FBQyxDQUNMLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxF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SUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUNwQixPQUFPLEVBQUMsT0FBTyxHQUNmO3dCQUdKLG9CQUFDLElBQUksQ0FBQyxJQUFJLElBQUMsR0FBRyxFQUFDLFFBQVE7NEJBQ3JCLDJCQUFHLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxjQUFjO2dDQUMxQyxvQkFBQyxJQUFJLElBQUMsSUFBSSxFQUFDLFVBQVUsR0FBRzs0Q0FDdEIsQ0FDTSxDQUNELENBQ1gsQ0FDTyxDQUNoQixDQUFDO0lBQ0osQ0FBQztJQTNETSx1QkFBWSxHQUFHO1FBQ3BCLGVBQWUsRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQVU7S0FDbEUsQ0FBQztJQUhFLFVBQVU7UUFGZixRQUFRO1FBQ1IsUUFBUTtPQUNILFVBQVUsQ0E2RGY7SUFBRCxpQkFBQztDQTdERCxBQTZEQyxDQTdEd0IsU0FBUyxHQTZEakM7QUFFRCxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDNUIsZUFBZSxVQUFVLENBQUMiLCJmaWxlIjoicGFja2FnZXMvdWkvbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aExhbmcsIExvZ28gfSBmcm9tICdvbHltcC11dGlscyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IHdpdGhBdXRoIH0gZnJvbSAnb2x5bXAtYXV0aCc7XG5pbXBvcnQgeyBNZW51LCBJY29uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IEdhdGV3YXlEZXN0LCBHYXRld2F5UmVnaXN0cnkgfSBmcm9tICdyZWFjdC1nYXRld2F5JztcbmltcG9ydCBHcmF2YXRhciBmcm9tICdyZWFjdC1ncmF2YXRhcic7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBnZXRJbml0aWFscyA9IG5hbWUgPT4ge1xuICBpZiAobmFtZSkge1xuICAgIGNvbnN0IGFycmF5ID0gbmFtZS5zcGxpdCgnICcpO1xuXG4gICAgc3dpdGNoIChhcnJheS5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIGFycmF5WzBdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBhcnJheVswXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgVXNlckljb24gPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBuYW1lIH0pID0+ICh7XG4gICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIG1hcmdpblk6IHRoZW1lLnNwYWNlMixcbiAgICBiYWNrZ3JvdW5kOiBgdXJsKGh0dHBzOi8vaW52YXRhcjAuYXBwc3BvdC5jb20vc3ZnLyR7Z2V0SW5pdGlhbHMoXG4gICAgICBuYW1lXG4gICAgKX0uanBnP3M9MjYmYmc9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICB0aGVtZS5jb2xvclxuICAgICl9JmNvbG9yPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgdGhlbWUubGlnaHRcbiAgICApfSkgY2VudGVyIGNlbnRlciBuby1yZXBlYXQsICR7dGhlbWUuY29sb3J9YCxcbiAgICBvbkhvdmVyOiB7XG4gICAgICBvcGFjaXR5OiAwLjg1LFxuICAgIH0sXG4gIH0pLFxuICBwID0+IDxHcmF2YXRhciB7Li4ucH0gc2l6ZT17MzB9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5jb25zdCBWZXJ0aWNhbE1lbnUgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBwYWRkaW5nIH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgekluZGV4OiAzLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyM0MDQwNDAnLFxuICAgIGJveFNoYWRvdzogJ2luc2V0IDAgLTEwcHggMTBweCAtMTBweCAjMDAwMDAwJyxcbiAgICBwYWRkaW5nWDogdGhlbWUuc3BhY2UyLFxuICAgIGhhc0ZsZXg6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgfSxcbiAgICAnPiB1bCc6IHtcbiAgICAgIHpJbmRleDogMyxcbiAgICAgIGJveFNoYWRvdzogJ2luc2V0IDAgLTEwcHggMTBweCAtMTBweCAjMDAwMDAwJyxcbiAgICB9LFxuICAgICc+IHVsID4gbGkuYW50LW1lbnUtaXRlbS1zZWxlY3RlZC5hbnQtbWVudS1pdGVtJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcixcbiAgICAgICc+IGEnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5saWdodCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpZlNtYWxsRG93bjoge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gICAgcGFkZGluZyxcbiAgfSksXG4gICdkaXYnLFxuICAoeyBwYWRkaW5nLCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5jb25zdCBMZWZ0TWVudSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBmbG9hdDogJ2xlZnQnLFxuICB9KSxcbiAgcCA9PiA8TWVudSB7Li4ucH0gLz4sXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG5cbmNvbnN0IEZpbGxlciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBmbGV4OiAnMSAxIDAlJyxcbiAgfSksXG4gIHAgPT4gPGRpdiB7Li4ucH0gLz4sXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG5cbmNvbnN0IFJpZ2h0TWVudSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBmbG9hdDogJ3JpZ2h0ICFpbXBvcnRhbnQnLFxuICAgICc+IHVsJzoge1xuICAgICAgcmlnaHQ6IDAsXG4gICAgICBsZWZ0OiAnYXV0byAhaW1wb3J0YW50JyxcbiAgICAgICc+IGxpID4gdWwnOiB7XG4gICAgICAgIGxlZnQ6ICdhdXRvICFpbXBvcnRhbnQnLFxuICAgICAgICBtYXJnaW5MZWZ0OiAnMCAhaW1wb3J0YW50JyxcbiAgICAgICAgcmlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDQsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICBwID0+IDxNZW51LlN1Yk1lbnUgey4uLnB9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5jb25zdCBBbnRNZW51ID0gKHsga2V5cywgLi4ucCB9KSA9PlxuICA8TGVmdE1lbnUgdGhlbWU9XCJkYXJrXCIgc2VsZWN0ZWRLZXlzPXtrZXlzfSBtb2RlPVwiaG9yaXpvbnRhbFwiIHsuLi5wfSAvPjtcblxuY29uc3QgQW50U3ViTWVudSA9ICh7IGtleXMsIHRpdGxlLCBjaGlsZHJlbiwgLi4ucCB9KSA9PlxuICA8QW50TWVudSB7Li4ucH0+XG4gICAgPFJpZ2h0TWVudSB0aXRsZT17dGl0bGUgfHwgPEljb24gdHlwZT1cImJhcnNcIiAvPn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9SaWdodE1lbnU+XG4gIDwvQW50TWVudT47XG5cbkB3aXRoTGFuZ1xuQHdpdGhBdXRoXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBnYXRld2F5UmVnaXN0cnk6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEdhdGV3YXlSZWdpc3RyeSkuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB0aGlzLmdhdGV3YXlSZWdpc3RyeSA9IGNvbnRleHQuZ2F0ZXdheVJlZ2lzdHJ5O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuZ2F0ZXdheVJlZ2lzdHJ5LmFkZENvbnRhaW5lcigndG9vbGJhcicsIHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5nYXRld2F5UmVnaXN0cnkucmVtb3ZlQ29udGFpbmVyKCd0b29sYmFyJywgdGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0aCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICBxdWVyeSA9IHt9LFxuICAgICAgcGF0aG5hbWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGtleXMgPSBbcGF0aG5hbWVdLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8VmVydGljYWxNZW51IHBhZGRpbmc9e3BhZGRpbmd9PlxuICAgICAgICA8QW50TWVudSBrZXlzPXtrZXlzfT5cbiAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgPExpbmsgdG89e3sgcGF0aG5hbWUgfX0+XG4gICAgICAgICAgICAgIDxMb2dvIHNpemU9ezMzfSBtYXJnaW49XCIwIDAgLTdweCAwXCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQW50TWVudT5cbiAgICAgICAgPEZpbGxlciAvPlxuICAgICAgICA8R2F0ZXdheURlc3QgbmFtZT1cInF1aWNrXCIgY29tcG9uZW50PXtBbnRNZW51fSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxHYXRld2F5RGVzdCBuYW1lPVwibmF2aWdhdGlvblwiIGNvbXBvbmVudD17QW50TWVudX0gLz5cbiAgICAgICAgICB7Z2V0KGF1dGgsICd1c2VyJykgJiZcbiAgICAgICAgICAgIDxBbnRTdWJNZW51XG4gICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICA8VXNlckljb25cbiAgICAgICAgICAgICAgICAgIGVtYWlsPXthdXRoLnVzZXIuZW1haWx9XG4gICAgICAgICAgICAgICAgICBuYW1lPXthdXRoLnVzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ9XCJibGFua1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImxvZ291dFwiPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2F1dGgubG9nb3V0fSBocmVmPVwiamF2YXNjcmlwdDo7XCI+XG4gICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwicG93ZXJvZmZcIiAvPiBBYm1lbGRlblxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8L0FudFN1Yk1lbnU+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVmVydGljYWxNZW51PlxuICAgICk7XG4gIH1cbn1cblxuTmF2aWdhdGlvbi5JdGVtID0gTWVudS5JdGVtO1xuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdfQ==
