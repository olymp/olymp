var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { graphql, gql } from 'olymp-utils';
import { createComponent, Container, Grid } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
var Img = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        marginX: 'auto',
        marginBottom: theme.space3,
        filter: 'grayscale(100%)',
        opacity: 0.3,
        transition: 'opacity .4s ease,filter .4s ease',
    });
}, function (p) { return React.createElement(Image, __assign({}, p)); }, function (p) { return Object.keys(p); });
var Link = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        onHover: {
            '> div': {
                filter: 'none',
                opacity: 1,
            },
        },
        ifSmallDown: {
            color: theme.dark3,
        },
    });
}, 'a', function (p) { return Object.keys(p); });
var Span = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.color,
    });
}, 'span', function (p) { return Object.keys(p); });
var Content = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        ifMediumUp: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            centerY: true,
            backgroundColor: 'rgba(0, 0, 0, 0.67)',
            borderRadius: theme.borderRadius,
            opacity: 0,
        },
    });
}, 'div', function (p) { return Object.keys(p); });
var Inner = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        ifMediumUp: {
            position: 'absolute',
            width: '100%',
            left: 0,
            centerY: true,
            padding: theme.space2,
            '> h3': {
                color: theme.light,
            },
        },
    });
}, 'div', function (p) { return Object.keys(p); });
var Item = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        padding: theme.space2,
        marginY: theme.space2,
        textAlign: 'center',
        position: 'relative',
    });
}, function (_a) {
    var className = _a.className, website = _a.website, name = _a.name, tags = _a.tags, image = _a.image;
    return (React.createElement(Grid.Item, { className: className, mini: 5, medium: 2, gridSize: 10 },
        React.createElement(Link, { href: website, rel: "noopener noreferrer" },
            React.createElement(Img, { value: image, maxResolution: 40000, width: "70%", ratio: 1, mode: "padded" }),
            React.createElement(Content, null,
                React.createElement(Inner, null,
                    React.createElement("h3", null, name),
                    React.createElement(Span, null, tags.join(', ')))))));
}, function (p) { return Object.keys(p); });
var component = graphql((_a = ["\n    query awardList {\n      items: awardList {\n        id\n        name\n        description\n        image {\n          url\n          crop\n          width\n          height\n          caption\n          source\n        }\n        website\n        color\n        tags\n      }\n    }\n  "], _a.raw = ["\n    query awardList {\n      items: awardList {\n        id\n        name\n        description\n        image {\n          url\n          crop\n          width\n          height\n          caption\n          source\n        }\n        website\n        color\n        tags\n      }\n    }\n  "], gql(_a)), {
    props: function (_a) {
        var ownProps = _a.ownProps, data = _a.data;
        return (__assign({}, ownProps, { data: data, items: data.items || [] }));
    },
})(createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        backgroundColor: theme.dark5,
        marginY: theme.space3,
        paddingY: theme.space2,
    });
}, function (_a) {
    var className = _a.className, attributes = _a.attributes, items = _a.items;
    return (React.createElement("div", __assign({ className: className }, attributes),
        React.createElement(Container, null,
            React.createElement(Grid, { size: 10 }, items.map(function (item) { return React.createElement(Item, __assign({}, item, { key: item.id })); })))));
}, function (p) { return Object.keys(p); }));
export default {
    key: 'GZK.Panel.Network',
    label: 'Netzwerk',
    category: 'Panel',
    editable: false,
    component: component,
};
var _a;
//# sourceMappingURL=award.js.map