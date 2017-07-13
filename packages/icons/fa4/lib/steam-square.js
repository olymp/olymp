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
        React.createElement("path", { d: "M1370 647q0-80-57-136.5t-137-56.5-136.5 57-56.5 136q0 80 56.5 136.5t136.5 56.5 137-56.5 57-136.5zm-610 588q0 83-58 140.5t-140 57.5q-56 0-103-29t-72-77q52 20 98 40 60 24 120-1.5t85-86.5q24-60-1.5-120t-86.5-84l-82-33q22-5 42-5 82 0 140 57.5t58 140.5zm904-819v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-153l172 69q20 92 93.5 152t168.5 60q104 0 181-70t87-173l345-252q150 0 255.5-105.5t105.5-254.5q0-150-105.5-255.5t-255.5-105.5q-148 0-253 104.5t-107 252.5l-225 322q-9-1-28-1-75 0-137 37l-297-119v-468q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5zm-247 233q0 100-71 170.5t-171 70.5-170.5-70.5-70.5-170.5 70.5-171 170.5-71q101 0 171.5 70.5t70.5 171.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=steam-square.js.map