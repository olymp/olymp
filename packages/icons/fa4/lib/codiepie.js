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
        React.createElement("path", { d: "M1549 679q55 0 85.5 28.5t30.5 83.5-34 82-91 27h-136v177h-25v-398h170zm161 590l-4 11-5 10q-113 230-330.5 366t-474.5 136q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71q244 0 454.5 124t329.5 338l2 4 8 16q-30 15-136.5 68.5t-163.5 84.5q-6 3-479 268 384 183 799 366zm-814 501q250 0 462.5-132.5t322.5-357.5l-287-129q-72 140-206 222t-292 82q-151 0-280-75t-204-204-75-280 75-280 204-204 280-75 280 73.5 204 204.5l280-143q-116-208-321-329t-443-121q-119 0-232.5 31.5t-209 87.5-176.5 137-137 176.5-87.5 209-31.5 232.5 31.5 232.5 87.5 209 137 176.5 176.5 137 209 87.5 232.5 31.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=codiepie.js.map