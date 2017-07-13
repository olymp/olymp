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
import { createComponent, border } from 'olymp-fela';
import { LightboxImage } from 'olymp-cloudinary';
var Avatar = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        float: 'right',
        margin: theme.space2,
        marginRight: "-" + theme.space3,
    });
}, function (_a) {
    var className = _a.className, value = _a.value;
    return (React.createElement(LightboxImage, { className: className, value: value, width: 100, ratio: 1, avatar: true, rounded: true }));
}, function (p) { return Object.keys(p); });
var H3 = createComponent(function (_a) {
    var theme = _a.theme, color = _a.color;
    return ({
        borderBottom: border(theme, color),
        display: 'inline',
        paddingRight: theme.space1,
    });
}, 'h3', function (_a) {
    var color = _a.color, p = __rest(_a, ["color"]);
    return Object.keys(p);
});
export default createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        marginTop: theme.space3,
        marginBottom: theme.space4,
        display: 'block',
        clear: 'both',
        hyphens: 'auto',
        '> p': {
            textAlign: 'justify',
        },
    });
}, function (_a) {
    var className = _a.className, name = _a.name, image = _a.image, description = _a.description, color = _a.color;
    return (React.createElement("div", { className: className },
        React.createElement(Avatar, { value: image }),
        React.createElement(H3, { color: color }, name),
        React.createElement("p", null, description)));
}, function (p) { return Object.keys(p); });
//# sourceMappingURL=person.js.map