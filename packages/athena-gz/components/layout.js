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
import { withScroll, withApollo } from 'olymp-utils';
import { withRouter } from 'olymp-router';
import { Navbar, Layout, Container, createComponent, WithColorProvider, } from 'olymp-fela';
import { prefetchPage } from 'olymp-pages';
import Logo from './logo';
export var App = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        backgroundColor: '#FFFFFF',
        fontFamily: 'Oxygen, sans-serif',
        fontSize: '105%',
        lineHeight: 1.75,
        '& h1, h2, h3, h4, h5, h6': {
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 200,
            lineHeight: 1.5,
        },
        ifMediumUp: {
            '& a[href^="tel"]:link, a[href^="tel"]:visited, a[href^="tel"]:hover, a[href^="fax"]:link, a[href^="fax"]:visited, a[href^="fax"]:hover': {
                color: theme.dark2,
                cursor: 'text',
            },
        },
        ifSmallDown: {
            '& h1': {
                fontSize: theme.fontSizeH1,
            },
            '& h2': {
                fontSize: theme.fontSizeH2,
            },
            '& h3': {
                fontSize: theme.fontSizeH3,
            },
            '& h4': {
                fontSize: theme.fontSizeH4,
            },
            '& h5': {
                fontSize: theme.fontSizeH5,
            },
            '& h6': {
                fontSize: theme.fontSizeH6,
            },
        },
    });
}, function (p) {
    return React.createElement(WithColorProvider, null,
        React.createElement(Layout, __assign({ fullHeight: true }, p)));
}, function (p) { return Object.keys(p); });
export var Header = withScroll(createComponent(function (_a) {
    var theme = _a.theme, scrollTop = _a.scrollTop;
    return ({
        ifSmallDown: {
            paddingY: theme.space2,
        },
        boxShadow: scrollTop && theme.boxShadow,
        transition: 'box-shadow 0.3s ease-in-out',
    });
}, function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement(Layout.Header, { className: className },
        React.createElement(Container, null, children));
}, function (p) { return Object.keys(p); }));
var GzLayout = (function (_super) {
    __extends(GzLayout, _super);
    function GzLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefetch = function (_a) {
            var id = _a.id;
            prefetchPage(_this.props.client, id);
        };
        return _this;
    }
    GzLayout.prototype.render = function () {
        var _a = this.props, pages = _a.pages, color = _a.color, title = _a.title, text = _a.text, location = _a.location, links = _a.links, children = _a.children, router = _a.router, query = _a.query, pathname = _a.pathname, auth = _a.auth, rest = __rest(_a, ["pages", "color", "title", "text", "location", "links", "children", "router", "query", "pathname", "auth"]);
        var nav = (pages.map(function (x) { return x.children; })[0] || [])
            .filter(function (x) { return x.slug !== '/'; });
        var footer = (pages.map(function (x) { return x.children; })[1] || []).slice();
        if (!auth.user) {
            footer.push({
                name: 'Einloggen',
                pathname: location.pathname + "?login",
            });
        }
        var open = query.nav === null;
        return (React.createElement(App, { affix: true },
            React.createElement(Header, null,
                React.createElement(Navbar, { pages: nav, brand: React.createElement(Logo, { color: color, title: title, text: text }), full: true, right: true, mega: function (_a) {
                        var mega = _a.mega, pages = _a.pages;
                        return pages &&
                            pages.length &&
                            pages[0].children &&
                            pages[0].children.length;
                    }, onItemMouseEnter: this.prefetch, toggleMenu: function () {
                        return router.push({
                            pathname: pathname,
                            query: __assign({}, query, { nav: !open ? null : undefined }),
                        });
                    }, isOpen: open })),
            React.createElement(Layout.Body, null,
                React.createElement(Layout, null,
                    React.createElement(Layout.Body, null, children),
                    React.createElement(Layout.Footer, { container: true },
                        React.createElement(Navbar, { full: true },
                            React.createElement(Navbar.Nav, { pages: [
                                    {
                                        name: "GesundheitsZentrum Kelkheim. Copyright " + new Date().getFullYear(),
                                    },
                                ] }),
                            React.createElement(Navbar.Nav, { pages: footer, right: true })))))));
    };
    GzLayout.defaultProps = {
        pages: [],
    };
    GzLayout = __decorate([
        withApollo,
        withRouter
    ], GzLayout);
    return GzLayout;
}(Component));
export default GzLayout;
//# sourceMappingURL=layout.js.map