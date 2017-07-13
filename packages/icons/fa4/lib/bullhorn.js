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
        React.createElement("path", { d: "M1664 640q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5v384q0 52-38 90t-90 38q-417-347-812-380-58 19-91 66t-31 100.5 40 92.5q-20 33-23 65.5t6 58 33.5 55 48 50 61.5 50.5q-29 58-111.5 83t-168.5 11.5-132-55.5q-7-23-29.5-87.5t-32-94.5-23-89-15-101 3.5-98.5 22-110.5h-122q-66 0-113-47t-47-113v-192q0-66 47-113t113-47h480q435 0 896-384 52 0 90 38t38 90v384zm-128 604v-954q-394 302-768 343v270q377 42 768 341z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=bullhorn.js.map