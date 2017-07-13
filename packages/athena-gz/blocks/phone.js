var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { createComponent, SchemaLoader } from 'olymp-fela';
import { graphql, gql, Link } from 'olymp-utils';
import { H1, Logo } from '../components';
import { range } from 'lodash';
var loaderSchema = [
    {
        height: 0,
    }
].concat(range(20).map(function (i) { return ({
    height: 43,
    width: '100%',
}); }));
var StyledLink = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.dark,
        marginLeft: 20,
        ifSmallDown: {
            display: 'block',
            ellipsis: true,
        },
    });
}, function (p) { return React.createElement(Link, __assign({}, p)); }, function (p) { return Object.keys(p); });
var MarginContainer = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        marginY: theme.space3,
    });
}, 'div', function (p) { return Object.keys(p); });
var Item = createComponent(function (_a) {
    var theme = _a.theme, color = _a.color;
    return ({
        position: 'relative',
        width: '100%',
        borderRadius: theme.borderRadius,
        paddingX: theme.space3,
        paddingY: theme.space2,
        '> span': {
            float: 'right',
        },
        '> a': {
            color: theme.dark,
        },
        onHover: {
            backgroundColor: theme.dark5,
            '> a': {
                color: color,
            },
        },
        ifSmallDown: {
            paddingY: theme.space3,
        },
    });
}, function (_a) {
    var className = _a.className, children = _a.children, number = _a.number;
    return (React.createElement("p", { className: className },
        children,
        React.createElement(Phone, { href: "tel:" + number }, number)));
}, function (p) { return Object.keys(p); });
var Phone = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        float: 'right',
        color: theme.dark,
    });
}, 'a', function (p) { return Object.keys(p); });
var Info = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        paddingTop: theme.space2,
        paddingBottom: theme.space3,
    });
}, 'div', function (p) { return Object.keys(p); });
var component = graphql((_a = ["\n  query orgList {\n    items: orgList {\n      id\n      name\n      color\n      title\n      telefon\n      slug\n    }\n  }\n"], _a.raw = ["\n  query orgList {\n    items: orgList {\n      id\n      name\n      color\n      title\n      telefon\n      slug\n    }\n  }\n"], gql(_a)), {
    props: function (_a) {
        var ownProps = _a.ownProps, data = _a.data;
        return (__assign({}, ownProps, { data: data, isLoading: data.loading, items: data.items || [] }));
    },
})(function (_a) {
    var attributes = _a.attributes, items = _a.items, isLoading = _a.isLoading;
    return (React.createElement(MarginContainer, __assign({}, attributes),
        React.createElement(H1, null, "Telefonnummern"),
        React.createElement(Info, null, "Sie erreichen uns unter folgenden Telefonnummern:"),
        React.createElement(SchemaLoader, { isLoading: isLoading, schema: loaderSchema },
            React.createElement("div", null, items.map(function (item) {
                return (React.createElement(Item, { number: item.telefon, key: item.id, color: item.color },
                    React.createElement(Logo, { color: item.color, icon: 16 }),
                    React.createElement(StyledLink, { to: item.slug }, item.title || item.name)));
            })))));
});
export default {
    key: 'GZK.Collections.PhoneBlock',
    label: 'Telefon',
    category: 'Collections',
    editable: false,
    component: component,
};
var _a;
//# sourceMappingURL=phone.js.map