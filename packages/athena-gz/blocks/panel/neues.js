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
import { graphql, gql } from 'olymp-utils';
import Container from './container';
import List from './list';
var Neues = (function (_super) {
    __extends(Neues, _super);
    function Neues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Neues.prototype.render = function () {
        var _a = this.props, events = _a.events, news = _a.news, attributes = _a.attributes, className = _a.className, isLoading = _a.isLoading;
        return (React.createElement(Container, __assign({}, attributes, { className: className }),
            React.createElement(List, { title: "Neuigkeiten", accent: "rgb(62, 167, 62)", items: news, size: 6, path: "news", isLoading: isLoading }),
            React.createElement(List, { title: "Veranstaltungen", accent: "rgb(73, 146, 195)", items: events.filter(function (item) { return item.art === 'VERANSTALTUNG' || item.art === 'VORTRAG'; }), size: 6, path: "news", isLoading: isLoading })));
    };
    Neues = __decorate([
        graphql((_a = ["\n    query eventList {\n      events: eventList(\n        sort: { date: DESC }\n        query: { state: { eq: PUBLISHED } }\n      ) {\n        id\n        date\n        art\n        name\n        description\n        slug\n        image {\n          id\n          url\n          caption\n          width\n          height\n        }\n        org {\n          id\n          name\n          color\n          slug\n          image {\n            id\n            url\n            caption\n            width\n            height\n          }\n        }\n        person {\n          id\n          name\n        }\n      }\n    }\n  "], _a.raw = ["\n    query eventList {\n      events: eventList(\n        sort: { date: DESC }\n        query: { state: { eq: PUBLISHED } }\n      ) {\n        id\n        date\n        art\n        name\n        description\n        slug\n        image {\n          id\n          url\n          caption\n          width\n          height\n        }\n        org {\n          id\n          name\n          color\n          slug\n          image {\n            id\n            url\n            caption\n            width\n            height\n          }\n        }\n        person {\n          id\n          name\n        }\n      }\n    }\n  "], gql(_a)), {
            props: function (_a) {
                var ownProps = _a.ownProps, data = _a.data;
                return (__assign({}, ownProps, { data: data, isLoading: data.loading, events: data.events || [] }));
            },
        }),
        graphql((_b = ["\n    query newsList {\n      news: newsList(\n        sort: { date: DESC }\n        query: { state: { eq: PUBLISHED } }\n      ) {\n        id\n        date\n        art\n        name\n        description\n        slug\n        image {\n          id\n          url\n          caption\n          width\n          height\n        }\n        org {\n          id\n          name\n          color\n          slug\n          image {\n            id\n            url\n            caption\n            width\n            height\n          }\n        }\n        person {\n          id\n          name\n        }\n      }\n    }\n  "], _b.raw = ["\n    query newsList {\n      news: newsList(\n        sort: { date: DESC }\n        query: { state: { eq: PUBLISHED } }\n      ) {\n        id\n        date\n        art\n        name\n        description\n        slug\n        image {\n          id\n          url\n          caption\n          width\n          height\n        }\n        org {\n          id\n          name\n          color\n          slug\n          image {\n            id\n            url\n            caption\n            width\n            height\n          }\n        }\n        person {\n          id\n          name\n        }\n      }\n    }\n  "], gql(_b)), {
            props: function (_a) {
                var ownProps = _a.ownProps, data = _a.data;
                return (__assign({}, ownProps, { data: data, isLoading: data.loading || ownProps.isLoading, news: data.news || [] }));
            },
        })
    ], Neues);
    return Neues;
}(Component));
export default {
    key: 'GZK.Panel.Neues',
    label: 'Neues',
    category: 'Panel',
    editable: false,
    component: Neues,
};
var _a, _b;
//# sourceMappingURL=neues.js.map