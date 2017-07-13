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
        React.createElement("path", { d: "M1792 1120q0 166-127 451-3 7-10.5 24t-13.5 30-13 22q-12 17-28 17-15 0-23.5-10t-8.5-25q0-9 2.5-26.5t2.5-23.5q5-68 5-123 0-101-17.5-181t-48.5-138.5-80-101-105.5-69.5-133-42.5-154-21.5-175.5-6h-224v256q0 26-19 45t-45 19-45-19l-512-512q-19-19-19-45t19-45l512-512q19-19 45-19t45 19 19 45v256h224q713 0 875 403 53 134 53 333z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=reply.js.map