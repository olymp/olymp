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
import { withCollections } from 'olymp-collection';
import { withLangProvider } from 'olymp-utils';
import { withRouter } from 'olymp-router';
import { withLocale } from 'olymp-locale/de';
import { ThemeProvider } from 'olymp-fela';
import { auth as withAuth } from 'olymp-auth';
import { withNavigation } from 'olymp-pages';
import { LightboxProvider } from 'olymp-cloudinary';
import { asyncComponent } from 'react-async-component';
import { withTemplates } from './templates';
import * as LANG from './lang/de';
import NoAuth from './cms-noauth';
var IfAuth = asyncComponent({ resolve: function () { return System.import('./cms-auth'); } });
var filterPublic = function (pages) {
    return pages
        .filter(function (page) { return page.state === 'PUBLISHED'; })
        .map(function (_a) {
        var children = _a.children, rest = __rest(_a, ["children"]);
        return (__assign({}, rest, { children: filterPublic(children) }));
    });
};
export default function (_a) {
    var auth = _a.auth, theme = _a.theme;
    return function (Wrapped) {
        var CMS = (function (_super) {
            __extends(CMS, _super);
            function CMS() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CMS.prototype.render = function () {
                var _a = this.props, auth = _a.auth, navigation = _a.navigation;
                var nav = filterPublic(navigation);
                return (React.createElement(ThemeProvider, { theme: theme },
                    React.createElement(LightboxProvider, null, !auth.user
                        ? React.createElement(NoAuth, __assign({}, this.props, { navigation: nav, wrapper: Wrapped }))
                        : React.createElement(IfAuth, __assign({}, this.props, { navigation: nav, wrapper: Wrapped })))));
            };
            CMS = __decorate([
                withRouter,
                withLocale,
                withAuth(auth),
                withNavigation,
                withLangProvider(LANG),
                withTemplates,
                withCollections
            ], CMS);
            return CMS;
        }(Component));
        return CMS;
    };
};
//# sourceMappingURL=cms.js.map