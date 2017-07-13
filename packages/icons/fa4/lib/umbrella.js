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
        React.createElement("path", { d: "M960 828v580q0 104-76 180t-180 76-180-76-76-180q0-26 19-45t45-19 45 19 19 45q0 50 39 89t89 39 89-39 39-89v-580q33-11 64-11t64 11zm768 27q0 13-9.5 22.5t-22.5 9.5q-11 0-23-10-49-46-93-69t-102-23q-68 0-128 37t-103 97q-7 10-17.5 28t-14.5 24q-11 17-28 17-18 0-29-17-4-6-14.5-24t-17.5-28q-43-60-102.5-97t-127.5-37-127.5 37-102.5 97q-7 10-17.5 28t-14.5 24q-11 17-29 17-17 0-28-17-4-6-14.5-24t-17.5-28q-43-60-103-97t-128-37q-58 0-102 23t-93 69q-12 10-23 10-13 0-22.5-9.5t-9.5-22.5q0-5 1-7 45-183 172.5-319.5t298-204.5 360.5-68q140 0 274.5 40t246.5 113.5 194.5 187 115.5 251.5q1 2 1 7zm-768-727v98q-42-2-64-2t-64 2v-98q0-26 19-45t45-19 45 19 19 45z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=umbrella.js.map