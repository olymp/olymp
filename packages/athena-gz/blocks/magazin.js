var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { createComponent, Container, Grid, border, SchemaLoader, } from 'olymp-fela';
import { graphql, gql, Link } from 'olymp-utils';
import { Image } from 'olymp-cloudinary';
import { FaDownload } from 'olymp-icons';
import { orderBy, upperFirst, range } from 'lodash';
import moment from 'moment';
import { H2, Panel, Item as ListItem } from '../components';
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
export var Column = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        textAlign: 'right',
        '> h2': {
            marginBottom: theme.space0,
        },
        '> h2:not(:first-child)': {
            marginTop: theme.space4,
        },
    });
}, function (p) { return React.createElement(Grid.Item, __assign({}, p)); }, function (p) { return Object.keys(p); });
export var Content = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between',
        paddingLeft: theme.space2,
        marginBottom: "-" + theme.space3,
        '> a': {
            marginTop: theme.space3,
            color: theme.color,
        },
    });
}, 'div', function (p) { return Object.keys(p); });
export var Img = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        float: 'left',
        marginRight: theme.space2,
        alignSelf: 'flex-start',
    });
}, function (p) { return React.createElement(Image, __assign({}, p)); }, function (p) { return Object.keys(p); });
export var Li = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        paddingY: theme.space3,
        borderBottom: border(theme, theme.dark4),
        onHover: {},
        ':last-of-type': {
            marginBottom: theme.space3,
        },
    });
}, 'li', function (p) { return Object.keys(p); });
var DownloadLink = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.dark,
        '> svg': {
            marginLeft: theme.space2,
        },
    });
}, 'a', function (p) { return Object.keys(p); });
var Item = function (props) {
    var name = props.name, description = props.description, slug = props.slug, org = props.org, date = props.date, person = props.person;
    var image = props.image ||
        org.logo || {
        url: 'https://res.cloudinary.com/djyenzorc/image/upload/v1499270971/kdmxe7pl54cqtdfc7ggy.jpg',
        width: 400,
        height: 300,
    };
    return (React.createElement(Panel, { accent: org.color, title: name, subtitle: moment(date).format('DD. MMMM YYYY') + ", " + (person.name ||
            'Redaktion') },
        React.createElement(Img, { value: image, width: 160, avatar: true }),
        React.createElement(Content, null,
            React.createElement("p", null, description),
            slug &&
                React.createElement(Link, { to: { pathname: "/magazin" + slug } }, "Weiterlesen..."))));
};
var TagContainer = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    });
}, 'div', function (p) { return Object.keys(p); });
var Tag = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        backgroundColor: theme.dark5,
        paddingY: theme.space1,
        paddingX: theme.space2,
        marginLeft: theme.space3,
        marginY: theme.space1,
        fontSize: '90%',
        flexGrow: 1,
        whiteSpace: 'nowrap',
        textAlign: 'center',
        display: 'inline-block',
        onHover: {
            backgroundColor: theme.color,
            color: theme.light,
        },
    });
}, 'div', function (p) { return Object.keys(p); });
var component = graphql((_a = ["\n    query articleList {\n      items: articleList(\n        sort: { date: DESC }\n        query: { state: { eq: PUBLISHED } }\n      ) {\n        id\n        name\n        description\n        date\n        slug\n        tags\n        state\n        image {\n          id\n          width\n          height\n          url\n          crop\n        }\n        org {\n          id\n          name\n          logo {\n            id\n            width\n            height\n            url\n            crop\n          }\n          color\n        }\n        person {\n          id\n          name\n        }\n      }\n      pdfs: fileList(query: { tags: { in: \"GiZ\" }, state: { eq: PUBLISHED } }) {\n        id\n        url\n        caption\n      }\n    }\n  "], _a.raw = ["\n    query articleList {\n      items: articleList(\n        sort: { date: DESC }\n        query: { state: { eq: PUBLISHED } }\n      ) {\n        id\n        name\n        description\n        date\n        slug\n        tags\n        state\n        image {\n          id\n          width\n          height\n          url\n          crop\n        }\n        org {\n          id\n          name\n          logo {\n            id\n            width\n            height\n            url\n            crop\n          }\n          color\n        }\n        person {\n          id\n          name\n        }\n      }\n      pdfs: fileList(query: { tags: { in: \"GiZ\" }, state: { eq: PUBLISHED } }) {\n        id\n        url\n        caption\n      }\n    }\n  "], gql(_a)), {
    props: function (_a) {
        var ownProps = _a.ownProps, data = _a.data;
        return (__assign({}, ownProps, { data: data, isLoading: data.loading, items: data.items || [], pdfs: data.pdfs || [] }));
    },
})(function (_a) {
    var attributes = _a.attributes, items = _a.items, pdfs = _a.pdfs, isLoading = _a.isLoading;
    var tags = items.reduce(function (tags, item) {
        (item.tags || []).forEach(function (tag) {
            var index = tags.findIndex(function (item) { return item.tag === tag; });
            if (index === -1) {
                tags.push({ tag: tag, count: 1 });
            }
            else {
                tags[index].count += 1;
            }
        });
        return tags;
    }, []);
    return (React.createElement(SchemaLoader, { isLoading: isLoading, schema: loaderSchema },
        React.createElement(Container, __assign({}, attributes),
            React.createElement(Grid, null,
                React.createElement(Grid.Item, { medium: 7, paddingMedium: "0 0 0 0.5rem" }, items.map(function (item) {
                    return (React.createElement(Item, __assign({}, item, { org: item.org || {}, person: item.person || {}, key: item.id })));
                })),
                React.createElement(Column, { medium: 4, offsetMedium: 1, offsetLarge: 1, offsetHuge: 1, paddingMini: "0.5rem 1rem 0 1rem", paddingMedium: "0 0.5rem 0 0" },
                    React.createElement(H2, { right: true }, "Ausgaben als PDFs"),
                    pdfs.map(function (pdf, i) {
                        return (React.createElement(ListItem, { key: i },
                            React.createElement(DownloadLink, { rel: "noopener noreferrer", href: pdf.url, target: "_blank" },
                                "Gesund im Zentrum - ",
                                React.createElement("b", null, pdf.caption),
                                React.createElement(FaDownload, { size: 15 }))));
                    }),
                    React.createElement(H2, { right: true }, "Schlagworte"),
                    React.createElement(TagContainer, null, orderBy(tags, ['count', 'tag'], ['desc', 'asc']).map(function (tag) {
                        return (React.createElement(Tag, { key: tag.tag },
                            upperFirst(tag.tag),
                            " ",
                            React.createElement("small", null,
                                "(",
                                tag.count,
                                ")")));
                    })))))));
});
export default {
    key: 'GZK.Collections.MagazinBlock',
    label: 'Magazin',
    category: 'Collections',
    editable: false,
    component: component,
};
var _a;
//# sourceMappingURL=magazin.js.map