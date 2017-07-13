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
        React.createElement("path", { d: "M1625 827v198q-101 23-198 23-65 136-165.5 271t-181.5 215.5-128 106.5q-80 45-162-3-28-17-60.5-43.5t-85-83.5-102.5-128.5-107.5-184-105.5-244-91.5-314.5-70.5-390h283q26 218 70 398.5t104.5 317 121.5 235.5 140 195q169-169 287-406-142-72-223-220t-81-333q0-192 104-314.5t284-122.5q178 0 273 105.5t95 297.5q0 159-58 286-7 1-19.5 3t-46 2-63-6-62-25.5-50.5-51.5q31-103 31-184 0-87-29-132t-79-45q-53 0-85 49.5t-32 140.5q0 186 105 293.5t267 107.5q62 0 121-14z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=vine.js.map