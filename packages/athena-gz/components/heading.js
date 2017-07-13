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
import { createComponent } from 'olymp-fela';
var Subtitle = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.dark2,
        marginTop: '-6px',
        fontSize: '0.9rem',
    });
}, 'div', function (p) { return Object.keys(p); });
export var H1 = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        textAlign: 'left',
        position: 'relative',
        marginTop: theme.space3,
        marginBottom: theme.space3,
    });
}, function (_a) {
    var className = _a.className, children = _a.children, color = _a.color, _b = _a.bordered, bordered = _b === void 0 ? true : _b, subtitle = _a.subtitle;
    return (React.createElement("h1", { className: className },
        children,
        subtitle &&
            React.createElement(Subtitle, null, subtitle),
        React.createElement(Border, { color: color }, bordered === true ? children : bordered)));
}, function (p) { return Object.keys(p); });
export var H2 = createComponent(function (_a) {
    var theme = _a.theme, right = _a.right;
    return ({
        textAlign: right ? 'right' : 'left',
        position: 'relative',
        marginTop: theme.space3,
        marginBottom: theme.space3,
    });
}, function (_a) {
    var className = _a.className, children = _a.children, color = _a.color, _b = _a.bordered, bordered = _b === void 0 ? true : _b, subtitle = _a.subtitle, right = _a.right;
    return (React.createElement("h2", { className: className },
        children,
        subtitle &&
            React.createElement(Subtitle, null, subtitle),
        React.createElement(Border, { color: color, right: right }, bordered === true ? children : bordered)));
}, function (p) { return Object.keys(p); });
export var Border = createComponent(function (_a) {
    var theme = _a.theme, color = _a.color, right = _a.right;
    return ({
        bottom: -1,
        display: 'block',
        overflow: 'hidden',
        height: 1,
        left: 0,
        position: 'absolute',
        minWidth: 75,
        width: '100%',
        backgroundColor: color || theme.color,
        background: "linear-gradient(to " + (right ? 'left' : 'right') + ", " + (color ||
            theme.color) + ", #FFF)",
    });
}, 'span', function (_a) {
    var color = _a.color, right = _a.right, p = __rest(_a, ["color", "right"]);
    return Object.keys(p);
});
//# sourceMappingURL=heading.js.map