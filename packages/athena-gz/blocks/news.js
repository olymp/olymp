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
import { Container, Grid, SchemaLoader } from 'olymp-fela';
import { graphql, gql } from 'olymp-utils';
import { Link } from 'olymp-router';
import moment from 'moment';
import { sortBy, range } from 'lodash';
import { H2, Panel, Item } from '../components';
import { Column, Content, Img } from './magazin';
var loaderSchema = [
    {
        height: 0,
    },
    {
        width: 'container',
        grid: [
            {
                medium: 7,
                children: range(9).map(function () { return ({
                    height: 180,
                    width: '100%',
                }); }),
            },
            {
                medium: 5,
                height: 500,
            },
        ],
    },
];
var getItems = function (items, filter, title) {
    return sortBy(items.filter(filter), ['date']).reverse().slice(0, 5).map(function (item) {
        return React.createElement(Item, { key: item.id },
            React.createElement("b", null, title(item)),
            React.createElement("p", null, item.name),
            item.slug &&
                React.createElement(Link, { to: { pathname: "/news" + item.slug } }, "N\u00E4here Informationen"));
    });
};
var NewsItem = function (props) {
    var art = props.art, date = props.date, name = props.name, description = props.description, org = props.org, slug = props.slug;
    var image = props.image ||
        org.logo || {
        url: 'https://res.cloudinary.com/djyenzorc/image/upload/v1499270971/kdmxe7pl54cqtdfc7ggy.jpg',
        width: 400,
        height: 300,
    };
    return (React.createElement(Panel, { accent: org.color, title: name, subtitle: art + " vom " + moment(date).format('DD.MM.YYYY') },
        React.createElement(Img, { value: image, width: 100, avatar: true }),
        React.createElement(Content, null,
            React.createElement("p", null, description),
            slug && React.createElement(Link, { to: { pathname: "/news" + slug } }, "Weiterlesen..."))));
};
var News = (function (_super) {
    __extends(News, _super);
    function News() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    News.prototype.render = function () {
        var _this = this;
        var _a = this.props, attributes = _a.attributes, isLoading = _a.isLoading, events = _a.events, news = _a.news;
        var items = sortBy(events.concat(news), 'date').reverse();
        return (React.createElement(SchemaLoader, { isLoading: isLoading, schema: loaderSchema },
            React.createElement(Container, __assign({}, attributes),
                React.createElement(Grid, null,
                    React.createElement(Grid.Item, { medium: 7, paddingMedium: "0 0 0 0.5rem" }, items.map(function (item) {
                        return React.createElement(NewsItem, __assign({}, item, { onClick: function () {
                                return _this.setState({
                                    open: open === item.id ? undefined : item.id,
                                });
                            }, org: item.org || {}, key: item.id }));
                    })),
                    React.createElement(Column, { medium: 4, offsetMedium: 1, offsetLarge: 1, offsetHuge: 1, paddingMini: "1rem 1rem 0 1rem", paddingMedium: "0 1rem" },
                        React.createElement(H2, { right: true }, "Vortr\u00E4ge & Veranstaltungen"),
                        getItems(events, function (item) { return true; }, function (item) {
                            return moment(item.date).format('DD. MMMM YYYY, HH:mm') + " Uhr";
                        }),
                        React.createElement(H2, { right: true }, "Publikationen & Presse"),
                        getItems(news, function (item) { return true; }, function (item) { return moment(item.date).format('DD. MMMM YYYY'); }))))));
    };
    News = __decorate([
        graphql((_a = ["\n    query newsList {\n      news: newsList(\n        sort: { date: DESC }\n        query: { state: { eq: PUBLISHED } }\n      ) {\n        id\n        date\n        art\n        name\n        description\n        text\n        slug\n        image {\n          id\n          width\n          height\n          url\n          crop\n        }\n        org {\n          id\n          name\n          logo {\n            id\n            width\n            height\n            url\n            crop\n          }\n          color\n        }\n        person {\n          id\n          name\n        }\n      }\n    }\n  "], _a.raw = ["\n    query newsList {\n      news: newsList(\n        sort: { date: DESC }\n        query: { state: { eq: PUBLISHED } }\n      ) {\n        id\n        date\n        art\n        name\n        description\n        text\n        slug\n        image {\n          id\n          width\n          height\n          url\n          crop\n        }\n        org {\n          id\n          name\n          logo {\n            id\n            width\n            height\n            url\n            crop\n          }\n          color\n        }\n        person {\n          id\n          name\n        }\n      }\n    }\n  "], gql(_a)), {
            props: function (_a) {
                var ownProps = _a.ownProps, data = _a.data;
                return (__assign({}, ownProps, { data: data, isLoading: data.loading, news: data.news || [] }));
            },
        }),
        graphql((_b = ["\n    query eventList {\n      events: eventList(\n        sort: { date: DESC }\n        query: { state: { eq: PUBLISHED } }\n      ) {\n        id\n        date\n        art\n        name\n        ort\n        description\n        text\n        slug\n        image {\n          id\n          width\n          height\n          url\n          crop\n        }\n        org {\n          id\n          name\n          logo {\n            id\n            width\n            height\n            url\n            crop\n          }\n          color\n        }\n        person {\n          id\n          name\n        }\n      }\n    }\n  "], _b.raw = ["\n    query eventList {\n      events: eventList(\n        sort: { date: DESC }\n        query: { state: { eq: PUBLISHED } }\n      ) {\n        id\n        date\n        art\n        name\n        ort\n        description\n        text\n        slug\n        image {\n          id\n          width\n          height\n          url\n          crop\n        }\n        org {\n          id\n          name\n          logo {\n            id\n            width\n            height\n            url\n            crop\n          }\n          color\n        }\n        person {\n          id\n          name\n        }\n      }\n    }\n  "], gql(_b)), {
            props: function (_a) {
                var ownProps = _a.ownProps, data = _a.data;
                return (__assign({}, ownProps, { data: data, isLoading: data.loading, events: data.events || [] }));
            },
        })
    ], News);
    return News;
}(Component));
export default {
    key: 'GZK.Collections.NewsBlock',
    label: 'Neuigkeiten',
    category: 'Collections',
    editable: false,
    component: News,
};
var _a, _b;
//# sourceMappingURL=news.js.map