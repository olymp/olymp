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
        React.createElement("path", { d: "M640 128q-53 0-90.5 37.5t-37.5 90.5v896l-151-202q-41-54-107-54-52 0-89 38t-37 90q0 43 26 77l384 512q38 51 102 51h718q22 0 39.5-13.5t22.5-34.5l92-368q24-96 24-194v-217q0-41-28-71t-68-30-68 28-28 68h-32v-61q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v64h-32v-90q0-55-37-94.5t-91-39.5q-53 0-90.5 37.5t-37.5 90.5v96h-32v-570q0-55-37-94.5t-91-39.5zm0-128q107 0 181.5 77.5t74.5 184.5v220q22-2 32-2 99 0 173 69 47-21 99-21 113 0 184 87 27-7 56-7 94 0 159 67.5t65 161.5v217q0 116-28 225l-92 368q-16 64-68 104.5t-118 40.5h-718q-60 0-114.5-27.5t-90.5-74.5l-384-512q-51-68-51-154 0-105 74.5-180.5t179.5-75.5q71 0 130 35v-547q0-106 75-181t181-75zm128 1408v-384h-32v384h32zm256 0v-384h-32v384h32zm256 0v-384h-32v384h32z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=hand-pointer-o.js.map