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
        React.createElement("path", { d: "M270 806q-8-19-8-52 0-20 11-49t24-45q-1-22 7.5-53t22.5-43q0-139 92.5-288.5t217.5-209.5q139-66 324-66 133 0 266 55 49 21 90 48t71 56 55 68 42 74 32.5 84.5 25.5 89.5 22 98l1 5q55 83 55 150 0 14-9 40t-9 38q0 1 1.5 3.5t3.5 5 2 3.5q77 114 120.5 214.5t43.5 208.5q0 43-19.5 100t-55.5 57q-9 0-19.5-7.5t-19-17.5-19-26-16-26.5-13.5-26-9-17.5q-1-1-3-1l-5 4q-59 154-132 223 20 20 61.5 38.5t69 41.5 35.5 65q-2 4-4 16t-7 18q-64 97-302 97-53 0-110.5-9t-98-20-104.5-30q-15-5-23-7-14-4-46-4.5t-40-1.5q-41 45-127.5 65t-168.5 20q-35 0-69-1.5t-93-9-101-20.5-74.5-40-32.5-64q0-40 10-59.5t41-48.5q11-2 40.5-13t49.5-12q4 0 14-2 2-2 2-4l-2-3q-48-11-108-105.5t-73-156.5l-5-3q-4 0-12 20-18 41-54.5 74.5t-77.5 37.5h-1q-4 0-6-4.5t-5-5.5q-23-54-23-100 0-275 252-466z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=qq.js.map