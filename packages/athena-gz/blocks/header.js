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
import { withRouter } from 'olymp-router';
import { createComponent, Container } from 'olymp-fela';
import capitalize from 'lodash/upperFirst';
var Content = (function (_super) {
    __extends(Content, _super);
    function Content() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Content.prototype.render = function () {
        var _a = this.props, pathname = _a.pathname, children = _a.children, subheader = _a.subheader, editor = _a.editor;
        var path = pathname.split('/').filter(function (p) { return p; });
        return (React.createElement(Container, null,
            React.createElement("h1", null, children),
            React.createElement("p", { contentEditable: !editor || editor.props.readOnly ? undefined : false }, subheader || "Startseite " + path.map(function (p) { return "/ " + capitalize(p); }))));
    };
    Content = __decorate([
        withRouter
    ], Content);
    return Content;
}(Component));
export default {
    key: 'GZK.Header.Header',
    label: 'Überschrift',
    category: 'Kopfleiste',
    editable: true,
    component: createComponent(function (_a) {
        var theme = _a.theme, color = _a.color;
        return ({
            width: '100%',
            backgroundColor: color || '#71636a',
            color: theme.light,
            borderBottomRightRadius: 60,
            paddingX: theme.space3,
            paddingY: '1.33rem',
            marginBottom: theme.space3,
            '> div': {
                '> h1': {
                    color: theme.light,
                    lineHeight: 'initial',
                },
            },
            ifSmallDown: {
                borderBottomRightRadius: 50,
                marginX: theme.space2,
                width: 'calc(100% - 1rem)',
            },
        });
    }, function (_a) {
        var className = _a.className, attributes = _a.attributes, rest = __rest(_a, ["className", "attributes"]);
        return React.createElement("div", __assign({ className: className }, attributes),
            React.createElement(Content, __assign({}, rest)));
    }, function (p) { return Object.keys(p); }),
};
//# sourceMappingURL=header.js.map