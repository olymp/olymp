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
import { createComponent, withColor, SchemaLoader } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import { Blocks } from 'olymp-pages';
import { SlateMate, withBlockTypes } from 'olymp-slate';
import { ImageStyles } from '../image/block';
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
var Label = Blocks.ImageBlockLabel.component;
var Header = HeaderBlock.component;
var Container = createComponent(ContainerBlock.styles, ContainerBlock.component, function (p) { return Object.keys(p); });
var Slate = withBlockTypes(function (props) { return React.createElement(SlateMate, __assign({}, props)); });
var Peak = createComponent(function (props) { return (__assign({}, ImageStyles(props), { marginBottom: props.theme.space3 })); }, function (_a) {
    var className = _a.className, header = _a.header, subheader = _a.subheader, value = _a.value, title = _a.title;
    return React.createElement("div", { className: className },
        React.createElement(Image, { value: value, alt: title, width: "100%", maxHeight: 450, maxResolution: 750000 }),
        (header || subheader) &&
            React.createElement(Label, null,
                React.createElement("h1", null, header),
                React.createElement("p", null, subheader)));
}, function (p) { return Object.keys(p); });
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
        item.org.slug &&
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
            item.image
                ? React.createElement(Peak, { title: item.name, value: item.image, header: item.name, subheader: getSubheader(item), color: item.org.color })
                : React.createElement(Header, { subheader: getSubheader(item), color: item.org.color }, item.name),
            React.createElement(Container, __assign({ className: className, color: item.org.color }, attributes),
                React.createElement(Slate, { readOnly: true, value: item.text }),
                React.createElement(Link, { to: "/magazin" }, "Zur\u00FCck zur \u00DCbersicht"))));
});
var componentWithData = graphql((_a = ["\n    query article($id: String) {\n      item: article(id: $id) {\n        id\n        date\n        name\n        slug\n        image {\n          url\n          crop\n          width\n          height\n          caption\n          source\n        }\n        description\n        tags\n        text\n        person {\n          id\n          name\n        }\n        org {\n          id\n          name\n          slug\n          color\n        }\n      }\n    }\n  "], _a.raw = ["\n    query article($id: String) {\n      item: article(id: $id) {\n        id\n        date\n        name\n        slug\n        image {\n          url\n          crop\n          width\n          height\n          caption\n          source\n        }\n        description\n        tags\n        text\n        person {\n          id\n          name\n        }\n        org {\n          id\n          name\n          slug\n          color\n        }\n      }\n    }\n  "], gql(_a)), {
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
    key: 'GZK.Collections.ArticleBlock',
    label: 'Artikel',
    category: 'Collections',
    editable: false,
    component: componentWithData,
};
var _a;
//# sourceMappingURL=block.js.map