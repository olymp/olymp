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
}, function (p) { return React.createElement(Grid.Item, __assign({}, p)); }, function (p) { return Object.keys(p); });
var Peak = createComponent(function (props) { return (__assign({}, ImageStyles(props), { marginBottom: props.theme.space3 })); }, function (_a) {
    var className = _a.className, header = _a.header, subheader = _a.subheader, value = _a.value, title = _a.title;
    return React.createElement("div", { className: className },
        React.createElement(Image, { value: value, alt: title, width: "100%", maxHeight: 450, maxResolution: 750000 }),
        (header || subheader) &&
            React.createElement(Label, null,
                React.createElement("h1", null, header),
                React.createElement("p", null, subheader)));
}, function (p) { return Object.keys(p); });
var component = withColor(function (_a) {
    var item = _a.item;
    return item.color;
})(function (_a) {
    var className = _a.className, attributes = _a.attributes, item = _a.item;
    return React.createElement(SchemaLoader, { isLoading: !item.name, schema: loaderSchema },
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
                    React.createElement(Grid.Item, { large: 5 },
                        React.createElement(VCard, { org: item })),
                    React.createElement(Content, { large: 7 },
                        React.createElement(Slate, { readOnly: true, value: item.text }))))));
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F0aGVuYS1nei9ibG9ja3Mvb3JnL2Jsb2NrLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM1RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4RCxPQUFPLEtBQUssTUFBTSxTQUFTLENBQUM7QUFDNUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sV0FBVyxNQUFNLFdBQVcsQ0FBQztBQUNwQyxPQUFPLGNBQWMsTUFBTSxjQUFjLENBQUM7QUFFMUMsSUFBTSxZQUFZLEdBQUc7SUFDbkI7UUFDRSxNQUFNLEVBQUUsR0FBRztRQUNYLEtBQUssRUFBRSxNQUFNO0tBQ2Q7SUFDRDtRQUNFLEtBQUssRUFBRSxXQUFXO1FBQ2xCLElBQUksRUFBRTtZQUNKO2dCQUNFLE1BQU0sRUFBRSxDQUFDO2dCQUNULFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxNQUFNLEVBQUUsR0FBRztxQkFDWjtvQkFDRDt3QkFDRSxNQUFNLEVBQUUsR0FBRztxQkFDWjtvQkFDRDt3QkFDRSxNQUFNLEVBQUUsR0FBRztxQkFDWjtpQkFDRjthQUNGO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsTUFBTSxFQUFFLEdBQUc7YUFDWjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBQ0YsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLGVB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S0FBSztJQUNmLFNBQVMsRUFBRSxpQkFBaUI7Q0FDN0IsQ0FBQyIsImZpbGUiOiJwYWNrYWdlcy9hdGhlbmEtZ3ovYmxvY2tzL29yZy9ibG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBncmFwaHFsLCBncWwsIHJlbmRlckhlbG1ldCB9IGZyb20gJ29seW1wLXV0aWxzJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCwgR3JpZCwgd2l0aENvbG9yLCBTY2hlbWFMb2FkZXIgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnb2x5bXAtY2xvdWRpbmFyeSc7XG5pbXBvcnQgeyBCbG9ja3MgfSBmcm9tICdvbHltcC1wYWdlcyc7XG5pbXBvcnQgeyBTbGF0ZU1hdGUsIHdpdGhCbG9ja1R5cGVzIH0gZnJvbSAnb2x5bXAtc2xhdGUnO1xuaW1wb3J0IFZDYXJkIGZyb20gJy4vdmNhcmQnO1xuaW1wb3J0IHsgSW1hZ2VTdHlsZXMgfSBmcm9tICcuLi9pbWFnZS9ibG9jayc7XG5pbXBvcnQgSGVhZGVyQmxvY2sgZnJvbSAnLi4vaGVhZGVyJztcbmltcG9ydCBDb250YWluZXJCbG9jayBmcm9tICcuLi9jb250YWluZXInO1xuXG5jb25zdCBsb2FkZXJTY2hlbWEgPSBbXG4gIHtcbiAgICBoZWlnaHQ6IDQ1MCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9LFxuICB7XG4gICAgd2lkdGg6ICdjb250YWluZXInLFxuICAgIGdyaWQ6IFtcbiAgICAgIHtcbiAgICAgICAgbWVkaXVtOiA1LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbWVkaXVtOiA3LFxuICAgICAgICBoZWlnaHQ6IDgwMCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5jb25zdCBMYWJlbCA9IEJsb2Nrcy5JbWFnZUJsb2NrTGFiZWwuY29tcG9uZW50O1xuY29uc3QgSGVhZGVyID0gSGVhZGVyQmxvY2suY29tcG9uZW50O1xuY29uc3QgQ29udGFpbmVyID0gY3JlYXRlQ29tcG9uZW50KFxuICBDb250YWluZXJCbG9jay5zdHlsZXMsXG4gIENvbnRhaW5lckJsb2NrLmNvbXBvbmVudCxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcbmNvbnN0IFNsYXRlID0gd2l0aEJsb2NrVHlwZXMocHJvcHMgPT4gPFNsYXRlTWF0ZSB7Li4ucHJvcHN9IC8+KTtcblxuY29uc3QgQ29udGVudCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmdYOiB0aGVtZS5zcGFjZTUsXG4gICAgJyYgaW1nJzoge1xuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgfSxcbiAgICBpZlNtYWxsRG93bjoge1xuICAgICAgcGFkZGluZ1g6IHRoZW1lLnNwYWNlMyxcbiAgICB9LFxuICB9KSxcbiAgcCA9PiA8R3JpZC5JdGVtIHsuLi5wfSAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgUGVhayA9IGNyZWF0ZUNvbXBvbmVudChcbiAgcHJvcHMgPT4gKHtcbiAgICAuLi5JbWFnZVN0eWxlcyhwcm9wcyksXG4gICAgbWFyZ2luQm90dG9tOiBwcm9wcy50aGVtZS5zcGFjZTMsXG4gIH0pLFxuICAoeyBjbGFzc05hbWUsIGhlYWRlciwgc3ViaGVhZGVyLCB2YWx1ZSwgdGl0bGUgfSkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxJbWFnZVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIG1heEhlaWdodD17NDUwfVxuICAgICAgICBtYXhSZXNvbHV0aW9uPXs3NTAwMDB9XG4gICAgICAvPlxuICAgICAgeyhoZWFkZXIgfHwgc3ViaGVhZGVyKSAmJlxuICAgICAgICA8TGFiZWw+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAge2hlYWRlcn1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge3N1YmhlYWRlcn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvTGFiZWw+fVxuICAgIDwvZGl2PixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgY29tcG9uZW50ID0gd2l0aENvbG9yKFxuICAoeyBpdGVtIH0pID0+IGl0ZW0uY29sb3JcbikoKHsgY2xhc3NOYW1lLCBhdHRyaWJ1dGVzLCBpdGVtIH0pID0+XG4gIDxTY2hlbWFMb2FkZXIgaXNMb2FkaW5nPXshaXRlbS5uYW1lfSBzY2hlbWE9e2xvYWRlclNjaGVtYX0+XG4gICAgPGRpdj5cbiAgICAgIHtyZW5kZXJIZWxtZXQoe1xuICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5zbG9nYW4sXG4gICAgICAgIGltYWdlOiBpdGVtLmxvZ28gfHwgaXRlbS5pbWFnZSxcbiAgICAgIH0pfVxuICAgICAge2l0ZW0uaW1hZ2VcbiAgICAgICAgPyA8UGVha1xuICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZSB8fCBpdGVtLnRpdGVsfVxuICAgICAgICAgICAgdmFsdWU9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgICBoZWFkZXI9e2l0ZW0uc2xvZ2FufVxuICAgICAgICAgICAgc3ViaGVhZGVyPXtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgY29sb3I9e2l0ZW0uY29sb3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgOiA8SGVhZGVyIHN1YmhlYWRlcj17aXRlbS5kZXNjcmlwdGlvbn0gY29sb3I9e2l0ZW0uY29sb3J9PlxuICAgICAgICAgICAge2l0ZW0uc2xvZ2FufVxuICAgICAgICAgIDwvSGVhZGVyPn1cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGNvbG9yPXtpdGVtLmNvbG9yfSB7Li4uYXR0cmlidXRlc30+XG4gICAgICAgIDxHcmlkPlxuICAgICAgICAgIDxHcmlkLkl0ZW0gbGFyZ2U9ezV9PlxuICAgICAgICAgICAgPFZDYXJkIG9yZz17aXRlbX0gLz5cbiAgICAgICAgICA8L0dyaWQuSXRlbT5cbiAgICAgICAgICA8Q29udGVudCBsYXJnZT17N30+XG4gICAgICAgICAgICA8U2xhdGUgcmVhZE9ubHkgdmFsdWU9e2l0ZW0udGV4dH0gLz5cbiAgICAgICAgICAgIHsvKiBjaGlsZHJlbiovfVxuICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gIDwvU2NoZW1hTG9hZGVyPlxuKTtcblxuY29uc3QgY29tcG9uZW50V2l0aERhdGEgPSBncmFwaHFsKFxuICBncWxgXG4gICAgcXVlcnkgb3JnKCRpZDogU3RyaW5nKSB7XG4gICAgICBpdGVtOiBvcmcoaWQ6ICRpZCkge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIHRpdGxlXG4gICAgICAgIGFydFxuICAgICAgICBjb2xvclxuICAgICAgICBzbHVnXG4gICAgICAgIHNsb2dhblxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBldGFnZVxuICAgICAgICBmcmVpZmVsZFxuICAgICAgICBvcGVuaW5nc1xuICAgICAgICBlTWFpbFxuICAgICAgICBmYXhcbiAgICAgICAgdGVsZWZvblxuICAgICAgICB0ZWxlZm9uUHJpdmF0XG4gICAgICAgIHdlYnNpdGVcbiAgICAgICAgZmFjaHJpY2h0dW5nZW5cbiAgICAgICAgdGFnc1xuICAgICAgICB0ZXh0XG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHVybFxuICAgICAgICAgIGNyb3BcbiAgICAgICAgICB3aWR0aFxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIGNhcHRpb25cbiAgICAgICAgICBzb3VyY2VcbiAgICAgICAgfVxuICAgICAgICBsb2dvIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHVybFxuICAgICAgICAgIGNyb3BcbiAgICAgICAgICB3aWR0aFxuICAgICAgICAgIGhlaWdodFxuICAgICAgICAgIGNhcHRpb25cbiAgICAgICAgICBzb3VyY2VcbiAgICAgICAgfVxuICAgICAgICBhZXN0aGV0aWsge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbGlua1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgdm9yc29yZ2VuIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIGxpbmtcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgdGV4dFxuICAgICAgICB9XG4gICAgICAgIGxlaXN0dW5nZW4ge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbGlua1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgcHJvcGh5bGF4ZW4ge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbGlua1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgcGVyc29ucyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICB0ZWxlZm9uXG4gICAgICAgICAgZmF4XG4gICAgICAgICAgZU1haWxcbiAgICAgICAgICB0ZXh0XG4gICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgY3JvcFxuICAgICAgICAgICAgd2lkdGhcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICAgICAgY2FwdGlvblxuICAgICAgICAgICAgc291cmNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgLFxuICB7XG4gICAgb3B0aW9uczogKHsgZWRpdG9yIH0pID0+ICh7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgaWQ6IGVkaXRvci5wcm9wcy5iaW5kaW5nSWQgfHwgJ0JKdU9vZDU3LScsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHByb3BzOiAoeyBvd25Qcm9wcywgZGF0YSB9KSA9PiAoe1xuICAgICAgLi4ub3duUHJvcHMsXG4gICAgICBkYXRhLFxuICAgICAgaXRlbTogZGF0YS5pdGVtIHx8IHt9LFxuICAgIH0pLFxuICB9XG4pKGNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAga2V5OiAnR1pLLkNvbGxlY3Rpb25zLk9yZ0Jsb2NrJyxcbiAgbGFiZWw6ICdFaW5yaWNodHVuZycsXG4gIGNhdGVnb3J5OiAnQ29sbGVjdGlvbnMnLFxuICBlZGl0YWJsZTogZmFsc2UsXG4gIGNvbXBvbmVudDogY29tcG9uZW50V2l0aERhdGEsXG59O1xuIl19
