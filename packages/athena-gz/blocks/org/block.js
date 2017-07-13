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
import { createComponent, Grid, withColor, SchemaLoader } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import { Blocks } from 'olymp-pages';
import { SlateMate, withBlockTypes } from 'olymp-slate';
import VCard from './vcard';
import { ImageStyles } from '../image/block';
import HeaderBlock from '../header';
import ContainerBlock from '../container';
var loaderSchema = [
    {
        height: 450,
        width: '100%',
    },
    {
        width: 'container',
        grid: [
            {
                medium: 5,
                children: [
                    {
                        height: 100,
                    },
                    {
                        height: 200,
                    },
                    {
                        height: 400,
                    },
                ],
            },
            {
                medium: 7,
                height: 800,
            },
        ],
    },
];
var Label = Blocks.ImageBlockLabel.component;
var Header = HeaderBlock.component;
var Container = createComponent(ContainerBlock.styles, ContainerBlock.component, function (p) { return Object.keys(p); });
var Slate = withBlockTypes(function (props) { return React.createElement(SlateMate, __assign({}, props)); });
var Content = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        width: '100%',
        paddingX: theme.space5,
        '& img': {
            borderRadius: theme.borderRadius,
        },
        ifSmallDown: {
            paddingX: theme.space3,
        },
    });
}, function (p) { return React.createElement(Grid.Item, __assign({ medium: 7 }, p)); }, function (p) { return Object.keys(p); });
var Peak = createComponent(function (props) { return (__assign({}, ImageStyles(props), { marginBottom: props.theme.space3 })); }, function (_a) {
    var className = _a.className, header = _a.header, subheader = _a.subheader, value = _a.value, title = _a.title;
    return (React.createElement("div", { className: className },
        React.createElement(Image, { value: value, alt: title, width: "100%", maxHeight: 450, maxResolution: 750000 }),
        (header || subheader) &&
            React.createElement(Label, null,
                React.createElement("h1", null, header),
                React.createElement("p", null, subheader))));
}, function (p) { return Object.keys(p); });
var component = withColor(function (_a) {
    var item = _a.item;
    return item.color;
})(function (_a) {
    var className = _a.className, attributes = _a.attributes, item = _a.item;
    return (React.createElement(SchemaLoader, { isLoading: !item.name, schema: loaderSchema },
        React.createElement("div", null,
            renderHelmet({
                description: item.slogan,
                image: item.logo || item.image,
            }),
            item.image
                ? React.createElement(Peak, { title: item.name || item.titel, value: item.image, header: item.slogan, subheader: item.description, color: item.color })
                : React.createElement(Header, { subheader: item.description, color: item.color }, item.slogan),
            React.createElement(Container, __assign({ className: className, color: item.color }, attributes),
                React.createElement(Grid, null,
                    React.createElement(Grid.Item, { medium: 5 },
                        React.createElement(VCard, { org: item })),
                    React.createElement(Content, null,
                        React.createElement(Slate, { readOnly: true, value: item.text })))))));
});
var componentWithData = graphql((_a = ["\n    query org($id: String) {\n      item: org(id: $id) {\n        id\n        name\n        title\n        art\n        color\n        slug\n        slogan\n        description\n        etage\n        freifeld\n        openings\n        eMail\n        fax\n        telefon\n        telefonPrivat\n        website\n        fachrichtungen\n        tags\n        text\n        image {\n          id\n          url\n          crop\n          width\n          height\n          caption\n          source\n        }\n        logo {\n          id\n          url\n          crop\n          width\n          height\n          caption\n          source\n        }\n        aesthetik {\n          id\n          link\n          name\n          text\n        }\n        vorsorgen {\n          id\n          link\n          name\n          text\n        }\n        leistungen {\n          id\n          link\n          name\n          text\n        }\n        prophylaxen {\n          id\n          link\n          name\n          text\n        }\n        persons {\n          id\n          name\n          description\n          telefon\n          fax\n          eMail\n          text\n          image {\n            id\n            url\n            crop\n            width\n            height\n            caption\n            source\n          }\n        }\n      }\n    }\n  "], _a.raw = ["\n    query org($id: String) {\n      item: org(id: $id) {\n        id\n        name\n        title\n        art\n        color\n        slug\n        slogan\n        description\n        etage\n        freifeld\n        openings\n        eMail\n        fax\n        telefon\n        telefonPrivat\n        website\n        fachrichtungen\n        tags\n        text\n        image {\n          id\n          url\n          crop\n          width\n          height\n          caption\n          source\n        }\n        logo {\n          id\n          url\n          crop\n          width\n          height\n          caption\n          source\n        }\n        aesthetik {\n          id\n          link\n          name\n          text\n        }\n        vorsorgen {\n          id\n          link\n          name\n          text\n        }\n        leistungen {\n          id\n          link\n          name\n          text\n        }\n        prophylaxen {\n          id\n          link\n          name\n          text\n        }\n        persons {\n          id\n          name\n          description\n          telefon\n          fax\n          eMail\n          text\n          image {\n            id\n            url\n            crop\n            width\n            height\n            caption\n            source\n          }\n        }\n      }\n    }\n  "], gql(_a)), {
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
        return (__assign({}, ownProps, { data: data, item: data.item || {} }));
    },
})(component);
export default {
    key: 'GZK.Collections.OrgBlock',
    label: 'Einrichtung',
    category: 'Collections',
    editable: false,
    component: componentWithData,
};
var _a;
//# sourceMappingURL=block.js.map