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
        React.createElement("path", { d: "M1728 1098q0 81-44.5 135t-123.5 54q-41 0-77.5-17.5t-59-38-56.5-38-71-17.5q-110 0-110 124 0 39 16 115t15 115v5q-22 0-33 1-34 3-97.5 11.5t-115.5 13.5-98 5q-61 0-103-26.5t-42-83.5q0-37 17.5-71t38-56.5 38-59 17.5-77.5q0-79-54-123.5t-135-44.5q-84 0-143 45.5t-59 127.5q0 43 15 83t33.5 64.5 33.5 53 15 50.5q0 45-46 89-37 35-117 35-95 0-245-24-9-2-27.5-4t-27.5-4l-13-2q-1 0-3-1-2 0-2-1v-1024q2 1 17.5 3.5t34 5 21.5 3.5q150 24 245 24 80 0 117-35 46-44 46-89 0-22-15-50.5t-33.5-53-33.5-64.5-15-83q0-82 59-127.5t144-45.5q80 0 134 44.5t54 123.5q0 41-17.5 77.5t-38 59-38 56.5-17.5 71q0 57 42 83.5t103 26.5q64 0 180-15t163-17v2q-1 2-3.5 17.5t-5 34-3.5 21.5q-24 150-24 245 0 80 35 117 44 46 89 46 22 0 50.5-15t53-33.5 64.5-33.5 83-15q82 0 127.5 59t45.5 143z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=puzzle-piece.js.map