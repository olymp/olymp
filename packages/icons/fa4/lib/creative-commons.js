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
        React.createElement("path", { d: "M605 1233q153 0 257-104 14-18 3-36l-45-82q-6-13-24-17-16-2-27 11l-4 3q-4 4-11.5 10t-17.5 13-23.5 14.5-28.5 13.5-33.5 9.5-37.5 3.5q-76 0-125-50t-49-127q0-76 48-125.5t122-49.5q37 0 71.5 14t50.5 28l16 14q11 11 26 10 16-2 24-14l53-78q13-20-2-39-3-4-11-12t-30-23.5-48.5-28-67.5-22.5-86-10q-148 0-246 96.5t-98 240.5q0 146 97 241.5t247 95.5zm630 0q153 0 257-104 14-18 4-36l-45-82q-8-14-25-17-16-2-27 11l-4 3q-4 4-11.5 10t-17.5 13-23.5 14.5-28.5 13.5-33.5 9.5-37.5 3.5q-76 0-125-50t-49-127q0-76 48-125.5t122-49.5q37 0 71.5 14t50.5 28l16 14q11 11 26 10 16-2 24-14l53-78q13-20-2-39-3-4-11-12t-30-23.5-48.5-28-67.5-22.5-86-10q-147 0-245.5 96.5t-98.5 240.5q0 146 97 241.5t247 95.5zm-339-1073q-150 0-286 58.5t-234.5 157-157 234.5-58.5 286 58.5 286 157 234.5 234.5 157 286 58.5 286-58.5 234.5-157 157-234.5 58.5-286-58.5-286-157-234.5-234.5-157-286-58.5zm0-160q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=creative-commons.js.map