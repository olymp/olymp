var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import { AltSwitch, AltRoute } from 'olymp-router';
import { AuthModals, AuthUsers } from 'olymp-auth';
import { GatewayDest } from 'react-gateway';
import { EditablePageRoute, PageRoute } from 'olymp-pages';
import { CloudinaryRoute, Lightbox } from 'olymp-cloudinary';
import { CollectionRoute } from 'olymp-collection';
import { AnalyticsRoutes } from 'olymp-google';
import { createComponent, getAntStyle } from 'olymp-fela';
import NavigationVertical from './navigation';
import { SettingsRoute } from './settings';
import { TemplateRoute } from './templates';
var Container = createComponent(function (_a) {
    var theme = _a.theme;
    return (__assign({}, getAntStyle({ theme: theme }), { display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#f5f5f5', '> :last-child': {
            flex: '1 1 0%',
            height: '100%',
            overflowY: 'auto',
        } }));
}, 'div', function (_a) {
    var deviceWidth = _a.deviceWidth, p = __rest(_a, ["deviceWidth"]);
    return Object.keys(p);
});
var SwitchContainer = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        flexDirection: 'column',
    });
}, 'div', function (p) { return Object.keys(p); });
export default function (props) {
    var query = props.query, collectionList = props.collectionList, location = props.location, navigation = props.navigation, Wrapped = props.wrapper;
    var collection = collectionList.filter(function (_a) {
        var name = _a.name;
        return query["@" + name.toLowerCase()] !== undefined;
    })[0];
    return (React.createElement(Container, null,
        React.createElement(Lightbox, null),
        React.createElement(GatewayDest, { name: "modal" }),
        React.createElement(AuthModals, null),
        React.createElement(NavigationVertical, __assign({ collectionList: collectionList, deviceWidth: query['@deviceWidth'] }, location, { location: location })),
        React.createElement(SwitchContainer, null,
            React.createElement(AltSwitch, null,
                React.createElement(AltRoute, { match: query['@template'] !== undefined, render: function () { return React.createElement(TemplateRoute, __assign({}, props)); } }),
                React.createElement(AltRoute, { match: !!collection, render: function () {
                        return React.createElement(CollectionRoute, __assign({}, props, { typeName: collection && collection.name, Wrapped: Wrapped }));
                    } }),
                React.createElement(AltRoute, { match: query['@page'] !== undefined, render: function () { return React.createElement(EditablePageRoute, __assign({}, props, { Wrapped: Wrapped })); } }),
                React.createElement(AltRoute, { match: query['@media'] !== undefined, render: function () { return React.createElement(CloudinaryRoute, __assign({}, props)); } }),
                React.createElement(AltRoute, { match: query['@settings'] !== undefined, render: function () { return React.createElement(SettingsRoute, __assign({}, props)); } }),
                React.createElement(AnalyticsRoutes, { match: query['@analytics'] !== undefined, render: function () { return React.createElement(AuthUsers, __assign({}, props)); } }),
                React.createElement(AltRoute, { match: query['@users'] !== undefined, render: function () { return React.createElement(AuthUsers, __assign({}, props)); } }),
                React.createElement(AltRoute, { render: function (rest) {
                        return React.createElement(PageRoute, __assign({}, rest, props, { key: location.key, navigation: navigation, Wrapped: Wrapped }));
                    } })))));
};
//# sourceMappingURL=cms-auth.js.map