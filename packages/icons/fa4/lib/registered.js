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
        React.createElement("path", { d: "M1042 703q0-88-60-121-33-18-117-18h-123v281h162q66 0 102-37t36-105zm52 285l205 373q8 17-1 31-8 16-27 16h-152q-20 0-28-17l-194-365h-155v350q0 14-9 23t-23 9h-134q-14 0-23-9t-9-23v-960q0-14 9-23t23-9h294q128 0 190 24 85 31 134 109t49 180q0 92-42.5 165.5t-115.5 109.5q6 10 9 16zm-198-828q-150 0-286 58.5t-234.5 157-157 234.5-58.5 286 58.5 286 157 234.5 234.5 157 286 58.5 286-58.5 234.5-157 157-234.5 58.5-286-58.5-286-157-234.5-234.5-157-286-58.5zm896 736q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=registered.js.map