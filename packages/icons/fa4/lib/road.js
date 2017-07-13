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
import styled from '../styled';
var icon = function (_a) {
    var color = _a.color, width = _a.width, height = _a.height, size = _a.size, rest = __rest(_a, ["color", "width", "height", "size"]);
    return (React.createElement("svg", __assign({ width: size || width, height: size || height, viewBox: "0 0 1792 1792" }, rest),
        React.createElement("path", { d: "M1047 996v-4l-24-320q-1-13-11-22.5t-23-9.5h-186q-13 0-23 9.5t-11 22.5l-24 320v4q-1 12 8 20t21 8h244q12 0 21-8t8-20zm759 467q0 73-46 73h-704q13 0 22-9.5t8-22.5l-20-256q-1-13-11-22.5t-23-9.5h-272q-13 0-23 9.5t-11 22.5l-20 256q-1 13 8 22.5t22 9.5h-704q-46 0-46-73 0-54 26-116l417-1044q8-19 26-33t38-14h339q-13 0-23 9.5t-11 22.5l-15 192q-1 14 8 23t22 9h166q13 0 22-9t8-23l-15-192q-1-13-11-22.5t-23-9.5h339q20 0 38 14t26 33l417 1044q26 62 26 116z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=road.js.map