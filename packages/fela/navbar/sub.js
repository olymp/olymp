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
import React, { Children, cloneElement } from 'react';
import { createComponent } from 'react-fela';
import { border } from 'olymp-fela';
export default createComponent(function (_a) {
    var theme = _a.theme, fill = _a.fill, vertically = _a.vertically, right = _a.right;
    return ({
        ifMediumUp: {
            display: vertically ? 'none' : 'flex',
            flex: fill && '1 1 auto',
            alignItems: 'stretch',
            flexDirection: vertically ? 'column' : 'row',
        },
        float: right ? 'right' : 'left',
        width: fill && '100%',
        height: !vertically && '100%',
        minWidth: vertically ? '100%' : 'auto',
        marginLeft: right && 'auto',
        borderTop: vertically && border(theme, theme.dark4),
        ifMini: {
            float: 'none',
            width: '100%',
            borderRight: 0,
            borderTop: border(theme, theme.dark4),
            clear: 'both',
        },
    });
}, function (_a) {
    var className = _a.className, pages = _a.pages, children = _a.children, props = __rest(_a, ["className", "pages", "children"]);
    return (React.createElement("div", { className: className },
        pages.map(function (_a, i) {
            var childPages = _a.children, page = __rest(_a, ["children"]);
            return props.renderItem(__assign({}, page, { title: page.name, pages: childPages, key: page.id || i }, props));
        }),
        Children.map(children, function (child) { return cloneElement(child, props); })));
}, function (p) { return Object.keys(p); });
//# sourceMappingURL=sub.js.map