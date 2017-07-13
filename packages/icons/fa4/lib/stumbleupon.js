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
        React.createElement("path", { d: "M998 712v-118q0-42-30-72t-72-30-72 30-30 72v612q0 175-126 299t-303 124q-178 0-303.5-125.5t-125.5-303.5v-266h328v262q0 43 30 72.5t72 29.5 72-29.5 30-72.5v-620q0-171 126.5-292t301.5-121q176 0 302 122t126 294v136l-195 58zm530 222h328v266q0 178-125.5 303.5t-303.5 125.5q-177 0-303-124.5t-126-300.5v-268l131 61 195-58v270q0 42 30 71.5t72 29.5 72-29.5 30-71.5v-275z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=stumbleupon.js.map