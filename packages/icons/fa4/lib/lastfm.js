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
        React.createElement("path", { d: "M1292 704q0 6 10 41 10 29 25 49.5t41 34 44 20 55 16.5q325 91 325 332 0 146-105.5 242.5t-254.5 96.5q-59 0-111.5-18.5t-91.5-45.5-77-74.5-63-87.5-53.5-103.5-43.5-103-39.5-106.5-35.5-95q-32-81-61.5-133.5t-73.5-96.5-104-64-142-20q-96 0-183 55.5t-138 144.5-51 185q0 160 106.5 279.5t263.5 119.5q177 0 258-95 56-63 83-116l84 152q-15 34-44 70l1 1q-131 152-388 152-147 0-269.5-79t-190.5-207.5-68-274.5q0-105 43.5-206t116-176.5 172-121.5 204.5-46q87 0 159 19t123.5 50 95 80 72.5 99 58.5 117 50.5 124.5 50 130.5 55 127q96 200 233 200 81 0 138.5-48.5t57.5-128.5q0-42-19-72t-50.5-46-72.5-31.5-84.5-27-87.5-34-81-52-65-82-39-122.5q-3-16-3-33 0-110 87.5-192t198.5-78q78 3 120.5 14.5t90.5 53.5h-1q12 11 23 24.5t26 36 19 27.5l-129 99q-26-49-54-70v-1q-23-21-97-21-49 0-84 33t-35 83z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=lastfm.js.map