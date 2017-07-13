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
        React.createElement("path", { d: "M1261 1570q-171 94-368 94-196 0-367-94 138-87 235.5-211t131.5-268q35 144 132.5 268t235.5 211zm-495-1428v485q0 252-126.5 459.5t-330.5 306.5q-181-215-181-495 0-187 83.5-349.5t229.5-269.5 325-137zm898 756q0 280-181 495-204-99-330.5-306.5t-126.5-459.5v-485q179 30 325 137t229.5 269.5 83.5 349.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=renren.js.map