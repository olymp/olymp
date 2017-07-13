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
        React.createElement("path", { d: "M1535 826q0-44-7-113.5t-18-96.5q-12-30-17-44t-9-36.5-4-48.5q0-23 5-68.5t5-67.5q0-37-10-55-4-1-13-1-19 0-58 4.5t-59 4.5q-60 0-176-24t-175-24q-43 0-94.5 11.5t-85 23.5-89.5 34q-137 54-202 103-96 73-159.5 189.5t-88 236-24.5 248.5q0 40 12.5 120t12.5 121q0 23-11 66.5t-11 65.5 12 36.5 34 14.5q24 0 72.5-11t73.5-11q57 0 169.5 15.5t169.5 15.5q181 0 284-36 129-45 235.5-152.5t166-245.5 59.5-275zm128-2q0 165-70 327.5t-196 288-281 180.5q-124 44-326 44-57 0-170-14.5t-169-14.5q-24 0-72.5 14.5t-73.5 14.5q-73 0-123.5-55.5t-50.5-128.5q0-24 11-68t11-67q0-40-12.5-120.5t-12.5-121.5q0-111 18-217.5t54.5-209.5 100.5-194 150-156q78-59 232-120 194-78 316-78 60 0 175.5 24t173.5 24q19 0 57-5t58-5q81 0 118 50.5t37 134.5q0 23-5 68t-5 68q0 10 1 18.5t3 17 4 13.5 6.5 16 6.5 17q16 40 25 118.5t9 136.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=lemon-o.js.map