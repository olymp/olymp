var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { IFrame, ContentLoader, PageTransition, createComponent, } from 'olymp-fela';
import { Error404, Page, EditablePage } from './views';
import { renderHelmet } from 'olymp-utils';
import { Link } from 'olymp-router';
import { Menu, Icon, Button as AntButton } from 'antd';
import { lowerFirst, get } from 'lodash';
import { Gateway } from 'react-gateway';
var Button = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        borderRadius: theme.borderRadius,
        opacity: 0.85,
        margin: '0 -15px',
        onHover: {
            opacity: 1,
            backgroundColor: theme.color + " !important",
            color: theme.light + " !important",
        },
    });
}, function (p) { return React.createElement(AntButton, __assign({}, p)); }, function (p) { return Object.keys(p); });
var renderGateway = function (_a, _b) {
    var _c = _a === void 0 ? {} : _a, auth = _c.auth, pathname = _c.pathname, collectionList = _c.collectionList, query = _c.query;
    var _d = _b === void 0 ? {} : _b, binding = _d.binding, bindingId = _d.bindingId;
    if (!auth.user) {
        return null;
    }
    var deviceWidth = query['@deviceWidth'];
    var isEditPage = query['@page'] !== undefined;
    var hasBinding = binding && binding.type;
    return (React.createElement(Gateway, { into: "quick" },
        React.createElement(Menu.SubMenu, { title: React.createElement(Button, { type: "primary" },
                React.createElement(Icon, { type: "plus", style: { marginRight: 0 } })) },
            React.createElement(Menu.Item, { key: "page-plus" },
                React.createElement(Link, { to: {
                        pathname: pathname,
                        query: __assign({}, query, { '@page': 'new' }),
                    } },
                    React.createElement(Icon, { type: "plus", style: { marginRight: 0 } }),
                    " Seite")),
            collectionList.map(function (collection) {
                return React.createElement(Menu.Item, { key: "@" + collection.name.toLowerCase() },
                    React.createElement(Link, { to: {
                            query: (_a = {},
                                _a["@" + collection.name.toLowerCase()] = null,
                                _a),
                        } },
                        React.createElement(Icon, { type: "plus", style: { marginRight: 0 } }),
                        ' ',
                        get(collection, 'decorators.label.value', collection.name)));
                var _a;
            })),
        hasBinding &&
            React.createElement(Menu.Item, { key: "save" },
                React.createElement(Link, { to: {
                        pathname: pathname,
                        query: (_e = {}, _e["@" + lowerFirst(binding.type)] = bindingId, _e),
                    } },
                    React.createElement(Button, { type: "primary" },
                        binding.type,
                        " bearbeiten",
                        ' ',
                        React.createElement(Icon, { type: "arrow-right", style: { marginRight: 0 } })))),
        !isEditPage &&
            !hasBinding &&
            React.createElement(Menu.Item, { key: "@page" },
                React.createElement(Link, { to: {
                        query: { '@page': null, '@deviceWidth': deviceWidth },
                    } },
                    React.createElement(Button, { type: "primary" },
                        "Seite bearbeiten",
                        ' ',
                        React.createElement(Icon, { type: "arrow-right", style: { marginRight: 0 } }))))));
    var _e;
};
export var EditablePageRoute = function (props) {
    var Wrapped = props.Wrapped, flatNavigation = props.flatNavigation, query = props.query, pathname = props.pathname, loading = props.loading;
    var match = flatNavigation.find(function (item) { return pathname === item.pathname; });
    var _a = match || {}, id = _a.id, binding = _a.binding, pageId = _a.pageId, aliasId = _a.aliasId, bindingId = _a.bindingId;
    var deviceWidth = query['@deviceWidth'];
    if (!match) {
        return (React.createElement(ContentLoader, { height: 600, isLoading: loading },
            React.createElement(EditablePage, __assign({}, props, { deviceWidth: deviceWidth, render: function (match) {
                    return React.createElement(IFrame, { disabled: !deviceWidth },
                        React.createElement(Wrapped, __assign({}, props),
                            renderHelmet({
                                name: '404',
                                description: 'Seite wurde nicht gefunden',
                                pathname: pathname,
                            }),
                            React.createElement(Error404, null)));
                } }))));
    }
    return (React.createElement(ContentLoader, { height: 600, isLoading: loading },
        React.createElement(EditablePage, __assign({}, props, { deviceWidth: deviceWidth, id: pageId || aliasId || id, bindingId: bindingId, binding: binding, render: function (children) {
                return React.createElement(IFrame, { disabled: !deviceWidth },
                    React.createElement(Wrapped, __assign({}, props, { match: match }),
                        renderHelmet(match, pathname),
                        renderGateway(props, match),
                        children));
            } }))));
};
export var PageRoute = function (props) {
    var Wrapped = props.Wrapped, flatNavigation = props.flatNavigation, pathname = props.pathname, loading = props.loading;
    var match = flatNavigation.find(function (item) { return pathname === item.pathname; });
    var _a = match || {}, id = _a.id, binding = _a.binding, pageId = _a.pageId, aliasId = _a.aliasId, bindingId = _a.bindingId;
    return (React.createElement(Wrapped, __assign({}, props, { match: match }),
        renderHelmet(match || {}, pathname),
        renderGateway(props, match),
        React.createElement(ContentLoader, { height: 600, isLoading: loading },
            React.createElement(PageTransition, null, match
                ? React.createElement(Page.WithData, __assign({}, props, { key: id, id: pageId || aliasId || id, bindingId: bindingId, binding: binding }))
                : React.createElement(Error404, null)))));
};
//# sourceMappingURL=routes.js.map