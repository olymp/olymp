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
        React.createElement("path", { d: "M1268 1561q0 68-48 116t-116 48-116.5-48-48.5-116 48.5-116.5 116.5-48.5 116 48.5 48 116.5zm-749 0q0 68-48.5 116t-116.5 48-116-48-48-116 48-116.5 116-48.5 116.5 48.5 48.5 116.5zm-775-1494q57 60 110.5 104.5t121 82 136 63 166 45.5 200 31.5 250 18.5 304 9.5 372.5 2.5q139 0 244.5 5t181 16.5 124 27.5 71 39.5 24 51.5-19.5 64-56.5 76.5-89.5 91-116 104.5-139 119q-185 157-286 247 29-51 76.5-109t94-105.5 94.5-98.5 83-91.5 54-80.5 13-70-45.5-55.5-116.5-41-204-23.5-304-5q-168 2-314-6t-256-23-204.5-41-159.5-51.5-122.5-62.5-91.5-66.5-68-71.5-50.5-69.5-40-68-36.5-59.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=opencart.js.map