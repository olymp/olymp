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
        React.createElement("path", { d: "M1280 896q0-37-30-54l-512-320q-31-20-65-2-33 18-33 56v640q0 38 33 56 16 8 31 8 20 0 34-10l512-320q30-17 30-54zm512 0q0 96-1 150t-8.5 136.5-22.5 147.5q-16 73-69 123t-124 58q-222 25-671 25t-671-25q-71-8-124.5-58t-69.5-123q-14-65-21.5-147.5t-8.5-136.5-1-150 1-150 8.5-136.5 22.5-147.5q16-73 69-123t124-58q222-25 671-25t671 25q71 8 124.5 58t69.5 123q14 65 21.5 147.5t8.5 136.5 1 150z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=youtube-play.js.map