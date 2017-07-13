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
import { Grid, createComponent, fade } from 'olymp-fela';
import { H2 } from './heading';
var Clearfix = createComponent(function (_a) {
    var theme = _a.theme, _b = _a.color, color = _b === void 0 ? theme.color : _b;
    return ({
        clear: 'both',
    });
}, 'div', function (p) { return Object.keys(p); });
export var Content = createComponent(function (_a) {
    var theme = _a.theme, accent = _a.accent, _b = _a.padding, padding = _b === void 0 ? theme.space3 : _b, _c = _a.size, size = _c === void 0 ? 1 : _c;
    return ({
        borderRight: size + "px solid " + (!accent ? theme.color : fade(accent)),
        borderBottom: size + "px solid " + (!accent ? theme.color : fade(accent)),
        borderBottomRightRadius: 100,
        paddingTop: 0,
        paddingBottom: padding,
        paddingLeft: 0,
        paddingRight: padding,
        hyphens: 'auto',
        flex: '1 1 auto',
        position: 'relative',
        minHeight: 120,
        '> iframe': {
            borderBottomRightRadius: 100,
            display: 'block',
        },
        onBefore: {
            content: '""',
            position: 'absolute',
            bottom: -size,
            right: -size,
            top: -size,
            width: size,
            background: 'linear-gradient(to bottom, #FFF 33%, rgba(255, 255, 255, 0.0001) 100%)',
        },
        onAfter: {
            content: '""',
            position: 'absolute',
            bottom: -size,
            left: -size,
            right: -size,
            height: size,
            background: 'linear-gradient(to right, #FFF 33%, rgba(255, 255, 255, 0.0001) 100%)',
        },
    });
}, 'div', function (_a) {
    var padding = _a.padding, background = _a.background, color = _a.color, accent = _a.accent, p = __rest(_a, ["padding", "background", "color", "accent"]);
    return Object.keys(p);
});
export default createComponent(function (_a) {
    var theme = _a.theme, _b = _a.paddingLeft, paddingLeft = _b === void 0 ? theme.space3 : _b, _c = _a.paddingRight, paddingRight = _c === void 0 ? theme.space3 : _c, _d = _a.background, background = _d === void 0 ? theme.dark5 : _d, accent = _a.accent;
    return ({
        width: '100%',
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        '& a': {
            color: theme.dark2,
            onHover: {
                color: accent,
            },
        },
        onAfter: {
            content: '""',
            position: 'absolute',
            width: 33,
            height: 33,
            backgroundColor: theme.dark4,
            bottom: 0,
            borderTopLeftRadius: 30,
            right: theme.space3,
        },
        onHover: {
            onAfter: {
                backgroundColor: fade(accent || (background === theme.dark5 ? theme.color : background)),
            },
        },
        ifSmallDown: {
            paddingX: theme.space3,
            paddingY: theme.space2,
        },
    });
}, function (_a) {
    var title = _a.title, subtitle = _a.subtitle, children = _a.children, padding = _a.padding, background = _a.background, accent = _a.accent, color = _a.color, bordered = _a.bordered, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, rest = __rest(_a, ["title", "subtitle", "children", "padding", "background", "accent", "color", "bordered", "paddingLeft", "paddingRight"]);
    return (React.createElement(Grid.Item, __assign({ mini: 12 }, rest),
        React.createElement(H2, { color: accent || background, bordered: bordered, subtitle: subtitle }, title),
        React.createElement(Content, { padding: padding, accent: accent, color: color },
            children,
            React.createElement(Clearfix, null))));
}, function (p) { return Object.keys(p); });
//# sourceMappingURL=panel.js.map