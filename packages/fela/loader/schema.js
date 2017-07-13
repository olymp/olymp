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
import React, { Children } from 'react';
import { createComponent } from 'react-fela';
import ContentLoader from './content';
import Container from '../container';
import Grid from '../grid';
var Panel = createComponent(function (_a) {
    var height = _a.height, width = _a.width, pad = _a.pad, theme = _a.theme;
    return ({
        height: height,
        width: width,
        paddingRight: pad ? theme.space3 : 0,
        marginBottom: theme.space3,
    });
}, 'div', []);
var SchemaLoaderItem = function (_a) {
    var height = _a.height, _b = _a.width, width = _b === void 0 ? '100%' : _b, grid = _a.grid, children = _a.children, size = _a.size;
    var inner;
    if (grid) {
        inner = (React.createElement(Grid, { height: "100%" }, grid.map(function (_a, i) {
            var children = _a.children, item = __rest(_a, ["children"]);
            return (React.createElement(Grid.Item, __assign({ key: i, height: "100%" }, item),
                React.createElement(Panel, { height: "100%", width: "100%", pad: true }, children
                    ? children.map(function (child, i) {
                        return (React.createElement(Panel, { key: i },
                            React.createElement(ContentLoader, __assign({ isLoading: true }, child))));
                    })
                    : React.createElement(ContentLoader, { isLoading: true }))));
        })));
    }
    else if (children) {
        inner = children.map(function (child, i) {
            return (React.createElement(Panel, { key: i },
                React.createElement(ContentLoader, __assign({ isLoading: true }, child))));
        });
    }
    else {
        inner = React.createElement(ContentLoader, { isLoading: true });
    }
    if (width === 'container') {
        return (React.createElement(Container, { height: height, size: size },
            React.createElement(Panel, { height: "100%", width: "100%" }, inner)));
    }
    return (React.createElement(Panel, { height: height, width: width }, inner));
};
var cache = {};
export default function (_a) {
    var schema = _a.schema, isLoading = _a.isLoading, children = _a.children;
    if (isLoading) {
        var components = schema.map(function (item, i) {
            return React.createElement(SchemaLoaderItem, __assign({ key: i }, item));
        });
        return React.createElement("div", null, components);
    }
    if (children) {
        return Children.only(children);
    }
    return null;
};
//# sourceMappingURL=schema.js.map