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
        React.createElement("path", { d: "M1632 1472q0 26-19 45t-45 19h-462q1 17 6 87.5t5 108.5q0 25-18 42.5t-43 17.5h-320q-25 0-43-17.5t-18-42.5q0-38 5-108.5t6-87.5h-462q-26 0-45-19t-19-45 19-45l402-403h-229q-26 0-45-19t-19-45 19-45l402-403h-197q-26 0-45-19t-19-45 19-45l384-384q19-19 45-19t45 19l384 384q19 19 19 45t-19 45-45 19h-197l402 403q19 19 19 45t-19 45-45 19h-229l402 403q19 19 19 45z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=tree.js.map