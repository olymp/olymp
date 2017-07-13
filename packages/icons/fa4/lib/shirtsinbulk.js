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
        React.createElement("path", { d: "M128 0h1536v1392l-776 338-760-338v-1392zm1436 1327v-926h-1336v926l661 294zm0-1026v-201h-1336v201h1336zm-1255 298v115h-37v-115h37zm0 148v115h-37v-115h37zm0 148v115h-37v-115h37zm0 148v115h-37v-115h37zm0 148v115h-37v-115h37zm26 143l15-34 105 47-15 33zm136 60l15-34 105 46-15 34zm135 60l15-34 105 46-15 34zm136 59l15-33 104 46-15 34zm183 13l105-46 15 33-105 47zm135-60l105-46 15 34-105 46zm136-60l105-46 15 34-105 46zm135-59l105-47 15 34-105 46zm-944-1200v36h-114v-36h114zm162 0v36h-115v-36h115zm162 0v36h-115v-36h115zm161 0v36h-114v-36h114zm162 0v36h-114v-36h114zm162 0v36h-115v-36h115zm162 0v36h-115v-36h115zm161 0v36h-114v-36h114zm-1210 340v79h-37v-115h115v36h-78zm240-36v36h-115v-36h115zm162 0v36h-115v-36h115zm161 0v36h-114v-36h114zm162 0v36h-114v-36h114zm162 0v36h-115v-36h115zm162 0v36h-115v-36h115zm125 115v-79h-78v-36h115v115h-37zm0 148v-115h37v115h-37zm0 148v-115h37v115h-37zm0 148v-115h37v115h-37zm0 148v-115h37v115h-37zm0 148v-115h37v115h-37zm-595-35q-129 0-221-91.5t-92-221.5q0-129 92-221t221-92q130 0 221.5 92t91.5 221q0 130-91.5 221.5t-221.5 91.5zm-165-381q0 36 19.5 56.5t49.5 25 64 7 64 2 49.5 9 19.5 30.5q0 49-112 49-97 0-123-51h-3l-31 63q67 42 162 42 29 0 56.5-5t55.5-16 45.5-33 17.5-53q0-46-27.5-69.5t-67.5-27-79.5-3-67-5-27.5-25.5q0-21 20.5-33t40.5-15 41-3q34 0 70.5 11t51.5 34h3l30-58q-3-1-21-8.5t-22.5-9-19.5-7-22-7-20-4.5-24-4-23-1q-29 0-56.5 5t-54 16.5-43 34-16.5 53.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=shirtsinbulk.js.map