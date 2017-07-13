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
        React.createElement("path", { d: "M735 1032q0-112-79.5-191.5t-191.5-79.5-191 79.5-79 191.5 79 191 191 79 191.5-79 79.5-191zm863-1q0-112-79-191t-191-79-191.5 79-79.5 191q0 113 79.5 192t191.5 79 191-79.5 79-191.5zm322-809v1348q0 44-31.5 75.5t-76.5 31.5h-1832q-45 0-76.5-31.5t-31.5-75.5v-1348q0-44 31.5-75.5t76.5-31.5h431q44 0 76 31.5t32 75.5v161h754v-161q0-44 32-75.5t76-31.5h431q45 0 76.5 31.5t31.5 75.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=simplybuilt.js.map