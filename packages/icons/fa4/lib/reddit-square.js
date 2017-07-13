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
        React.createElement("path", { d: "M1067 1129q13 13 0 26-53 53-171 53t-171-53q-13-13 0-26 5-6 13-6t13 6q42 42 145 42t145-42q5-6 13-6t13 6zm-263-156q0 31-23 54t-54 23-54-23-23-54q0-32 22.5-54.5t54.5-22.5 54.5 22.5 22.5 54.5zm338 0q0 31-23 54t-54 23-54-23-23-54q0-32 22.5-54.5t54.5-22.5 54.5 22.5 22.5 54.5zm215-103q0-42-30-72t-73-30q-42 0-73 31-113-78-267-82l54-243 171 39q1 32 23.5 54t53.5 22q32 0 54.5-22.5t22.5-54.5-22.5-54.5-54.5-22.5q-48 0-69 43l-189-42q-17-5-21 13l-60 268q-154 6-265 83-30-32-74-32-43 0-73 30t-30 72q0 30 16 55t42 38q-5 25-5 48 0 122 120 208.5t289 86.5q170 0 290-86.5t120-208.5q0-25-6-49 25-13 40.5-37.5t15.5-54.5zm307-454v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=reddit-square.js.map