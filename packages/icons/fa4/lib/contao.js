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
        React.createElement("path", { d: "M138 128h197q-70 64-126 149-36 56-59 115t-30 125.5-8.5 120 10.5 132 21 126 28 136.5q4 19 6 28 51 238 81 329 57 171 152 275h-272q-48 0-82-34t-34-82v-1304q0-48 34-82t82-34zm1208 0h308q48 0 82 34t34 82v1304q0 48-34 82t-82 34h-178q212-210 196-565l-469 101q-2 45-12 82t-31 72-59.5 59.5-93.5 36.5q-123 26-199-40-32-27-53-61t-51.5-129-64.5-258q-35-163-45.5-263t-5.5-139 23-77q20-41 62.5-73t102.5-45q45-12 83.5-6.5t67 17 54 35 43 48 34.5 56.5l468-100q-68-175-180-287z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=contao.js.map