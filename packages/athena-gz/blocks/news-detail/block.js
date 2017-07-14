var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { graphql, gql, renderHelmet } from 'olymp-utils';
import { Link } from 'olymp-router';
import { createComponent, withColor, SchemaLoader, Grid } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import { SlateMate, withBlockTypes } from 'olymp-slate';
import HeaderBlock from '../header';
import ContainerBlock from '../container-text';
var loaderSchema = [
    {
        height: 450,
        width: '100%',
    },
    {
        width: 'container',
        size: 'small',
        children: [
            {
                width: '100%',
                height: 50,
            },
            {
                width: '100%',
                height: 800,
            },
        ],
    },
];
var Header = HeaderBlock.component;
var Container = createComponent(function (_a) {
    var theme = _a.theme;
    return (__assign({}, ContainerBlock.styles({ theme: theme }), { paddingTop: theme.space3 }));
}, ContainerBlock.component, function (p) { return Object.keys(p); });
var Slate = withBlockTypes(function (props) { return React.createElement(SlateMate, __assign({}, props)); });
var Content = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        paddingLeft: theme.space3,
    });
}, function (p) { return React.createElement(Grid.Item, __assign({}, p)); }, function (p) { return Object.keys(p); });
var WhiteLink = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.light,
        onHover: {
            color: theme.light2,
        },
    });
}, function (p) { return React.createElement(Link, __assign({}, p)); }, function (p) { return Object.keys(p); });
var getSubheader = function (item) {
    var person = item.person && "von " + item.person.name;
    var org = item.org &&
        React.createElement(WhiteLink, { to: item.org.slug }, item.org.name);
    return (person &&
        org &&
        React.createElement("span", null,
            person,
            ", ",
            org));
};
var component = withColor(function (_a) {
    var item = _a.item;
    return item.org.color;
})(function (_a) {
    var className = _a.className, attributes = _a.attributes, item = _a.item;
    return React.createElement(SchemaLoader, { isLoading: !item.name, schema: loaderSchema },
        React.createElement("div", null,
            renderHelmet({ description: item.description, image: item.image }),
            React.createElement(Header, { subheader: getSubheader(item), color: item.org.color }, item.name),
            React.createElement(Container, __assign({ className: className, color: item.org.color }, attributes),
                React.createElement(Grid, { size: 3 },
                    React.createElement(Grid.Item, { medium: 1 }, item.image &&
                        React.createElement(Image, { value: item.image, alt: item.image.caption, width: "100%" })),
                    React.createElement(Content, { medium: 2 },
                        React.createElement(Slate, { readOnly: true, value: item.text }),
                        React.createElement(Link, { to: "/news" }, "Zur\u00FCck zur \u00DCbersicht"))))));
});
var componentWithData = graphql((_a = ["\n    query news($id: String) {\n      item: news(id: $id) {\n        id\n        art\n        date\n        name\n        slug\n        image {\n          id\n          url\n          crop\n          width\n          height\n          caption\n          source\n        }\n        description\n        tags\n        text\n        person {\n          id\n          name\n        }\n        org {\n          id\n          name\n          slug\n          color\n        }\n      }\n    }\n  "], _a.raw = ["\n    query news($id: String) {\n      item: news(id: $id) {\n        id\n        art\n        date\n        name\n        slug\n        image {\n          id\n          url\n          crop\n          width\n          height\n          caption\n          source\n        }\n        description\n        tags\n        text\n        person {\n          id\n          name\n        }\n        org {\n          id\n          name\n          slug\n          color\n        }\n      }\n    }\n  "], gql(_a)), {
    options: function (_a) {
        var editor = _a.editor;
        return ({
            variables: {
                id: editor.props.bindingId || 'BJuOod57-',
            },
        });
    },
    props: function (_a) {
        var ownProps = _a.ownProps, data = _a.data;
        var item = data.item || {};
        return __assign({}, ownProps, { data: data, item: __assign({}, item, { org: item.org || {} }) });
    },
})(component);
export default {
    key: 'GZK.Collections.NewsDetailBlock',
    label: 'Neuigkeit-Detail',
    category: 'Collections',
    editable: false,
    component: componentWithData,
};
var _a;
//# sourceMappingURL=block.js.map