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
import { createComponent } from 'react-fela';
export var Heading = createComponent(function (_a) {
    var fontSize = _a.fontSize, theme = _a.theme, padding = _a.padding, marginBottom = _a.marginBottom, marginTop = _a.marginTop, textAlign = _a.textAlign, thin = _a.thin, color = _a.color, center = _a.center;
    return ({
        color: color && (color === true ? theme.color : theme[color] || color),
        textAlign: center ? 'center' : textAlign,
        fontWeight: thin && 200,
        padding: padding,
        fontSize: fontSize,
        lineHeight: fontSize ? fontSize + "px" : undefined,
        marginTop: marginTop !== undefined ? marginTop : undefined,
        marginBottom: marginBottom !== undefined ? marginBottom : 15,
    });
}, function (_a) {
    var level = _a.level, children = _a.children, rest = __rest(_a, ["level", "children"]);
    if (!level) {
        level = 1;
    }
    return React.createElement("h" + level, rest, children);
}, ['level', 'itemProp']);
export var SectionHeading = function (_a) {
    var title = _a.title, description = _a.description;
    return (React.createElement("div", { key: 0 },
        React.createElement("h3", { marginBottom: 0, textAlign: "center", level: 3, light: true, color: true }, title),
        description &&
            React.createElement("h5", { marginTop: 0, textAlign: "center", level: 5, fontSize: 12, light: true }, description)));
};
export var H1 = function (props) { return React.createElement(Heading, __assign({}, props, { level: 1 })); };
export var H2 = function (props) { return React.createElement(Heading, __assign({}, props, { level: 2 })); };
export var H3 = function (props) { return React.createElement(Heading, __assign({}, props, { level: 3 })); };
export var H4 = function (props) { return React.createElement(Heading, __assign({}, props, { level: 4 })); };
export var H5 = function (props) { return React.createElement(Heading, __assign({}, props, { level: 5 })); };
export var H6 = function (props) { return React.createElement(Heading, __assign({}, props, { level: 6 })); };
//# sourceMappingURL=heading.js.map