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
        React.createElement("path", { d: "M901 1319v127q-1 292-6 305-12 32-51 40-54 9-181.5-38t-162.5-89q-13-15-17-36-1-12 4-26 4-10 34-47t181-216q1 0 60-70 15-19 39.5-24.5t49.5 3.5q24 10 37.5 29t12.5 42zm-149-251q-3 55-52 70l-120 39q-275 88-292 88-35-2-54-36-12-25-17-75-8-76 1-166.5t30-124.5 56-32q13 0 202 77 70 29 115 47l84 34q23 9 35.5 30.5t11.5 48.5zm826 297q-7 54-91.5 161t-135.5 127q-37 14-63-7-14-10-184-287l-47-77q-14-21-11.5-46t19.5-46q35-43 83-26 1 1 119 40 203 66 242 79.5t47 20.5q28 22 22 61zm-672-632q5 102-54 122-58 17-114-71l-378-598q-8-35 19-62 41-43 207.5-89.5t224.5-31.5q40 10 49 45 3 18 22 305.5t24 379.5zm662 108q3 39-26 59-15 10-329 86-67 15-91 23l1-2q-23 6-46-4t-37-32q-30-47 0-87 1-1 75-102 125-171 150-204t34-39q28-19 65-2 48 23 123 133.5t81 167.5v3z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=yelp.js.map