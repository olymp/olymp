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
import { graphql, gql, Link } from 'olymp-utils';
import { createComponent, border } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import Container from './container';
import { Panel } from '../../components';
import List from './list';
var MagazinItem = createComponent(function (_a) {
    var theme = _a.theme, _b = _a.color, color = _b === void 0 ? theme.color : _b;
    return ({
        float: 'left',
        marginRight: theme.space3,
        marginBottom: theme.space3,
        textAlign: 'center',
        '> div': {
            display: 'block',
            border: border(theme),
        },
        onHover: {
            color: color,
            '> div': {
                border: border(theme, color),
            },
        },
    });
}, 'a', function (p) { return Object.keys(p); });
var Magazin = (function (_super) {
    __extends(Magazin, _super);
    function Magazin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Magazin.prototype.render = function () {
        var _a = this.props, items = _a.items, pdfs = _a.pdfs, attributes = _a.attributes, className = _a.className, isLoading = _a.isLoading;
        return (React.createElement(Container, __assign({}, attributes, { className: className }),
            React.createElement(List, { size: 7, title: "Unser Magazin", accent: "#8e44ad", items: items, path: "magazin", isLoading: isLoading }),
            React.createElement(Panel, { medium: 5, title: React.createElement(Link, { to: { pathname: '/magazin/' } }, "Magazine als PDF"), accent: "#8e44ad" }, pdfs.slice(0, 9).map(function (item) {
                return (React.createElement(MagazinItem, { rel: "noopener noreferrer", href: item.url, target: "_blank", color: "#8e44ad", key: item.id },
                    React.createElement(Image, { value: item, width: 100 }),
                    React.createElement("span", null, item.caption)));
            }))));
    };
    Magazin = __decorate([
        graphql((_a = ["\n    query articleList {\n      items: articleList(\n        sort: { date: DESC }\n        query: { state: { eq: PUBLISHED } }\n      ) {\n        id\n        date\n        name\n        description\n        slug\n        image {\n          id\n          url\n          caption\n          width\n          height\n        }\n        org {\n          id\n          name\n          color\n          slug\n          image {\n            id\n            url\n            caption\n            width\n            height\n          }\n        }\n        person {\n          id\n          name\n        }\n      }\n      pdfs: fileList(\n        sort: { createdAt: DESC }\n        query: { tags: { in: \"GiZ\" }, state: { eq: PUBLISHED } }\n      ) {\n        id\n        url\n        caption\n        width\n        height\n        createdAt\n      }\n    }\n  "], _a.raw = ["\n    query articleList {\n      items: articleList(\n        sort: { date: DESC }\n        query: { state: { eq: PUBLISHED } }\n      ) {\n        id\n        date\n        name\n        description\n        slug\n        image {\n          id\n          url\n          caption\n          width\n          height\n        }\n        org {\n          id\n          name\n          color\n          slug\n          image {\n            id\n            url\n            caption\n            width\n            height\n          }\n        }\n        person {\n          id\n          name\n        }\n      }\n      pdfs: fileList(\n        sort: { createdAt: DESC }\n        query: { tags: { in: \"GiZ\" }, state: { eq: PUBLISHED } }\n      ) {\n        id\n        url\n        caption\n        width\n        height\n        createdAt\n      }\n    }\n  "], gql(_a)), {
            props: function (_a) {
                var ownProps = _a.ownProps, data = _a.data;
                return (__assign({}, ownProps, { data: data, isLoading: data.loading, items: data.items || [], pdfs: data.pdfs || [] }));
            },
        })
    ], Magazin);
    return Magazin;
}(Component));
export default {
    key: 'GZK.Panel.Magazin',
    label: 'Magazin',
    category: 'Panel',
    editable: false,
    component: Magazin,
};
var _a;
//# sourceMappingURL=magazin.js.map