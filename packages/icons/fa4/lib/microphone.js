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
        React.createElement("path", { d: "M1472 704v128q0 221-147.5 384.5t-364.5 187.5v132h256q26 0 45 19t19 45-19 45-45 19h-640q-26 0-45-19t-19-45 19-45 45-19h256v-132q-217-24-364.5-187.5t-147.5-384.5v-128q0-26 19-45t45-19 45 19 19 45v128q0 185 131.5 316.5t316.5 131.5 316.5-131.5 131.5-316.5v-128q0-26 19-45t45-19 45 19 19 45zm-256-384v512q0 132-94 226t-226 94-226-94-94-226v-512q0-132 94-226t226-94 226 94 94 226z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=microphone.js.map