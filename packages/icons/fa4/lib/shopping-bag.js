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
        React.createElement("path", { d: "M1757 1408l35 313q3 28-16 50-19 21-48 21h-1664q-29 0-48-21-19-22-16-50l35-313h1722zm-93-839l86 775h-1708l86-775q3-24 21-40.5t43-16.5h256v128q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5v-128h384v128q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5v-128h256q25 0 43 16.5t21 40.5zm-384-185v256q0 26-19 45t-45 19-45-19-19-45v-256q0-106-75-181t-181-75-181 75-75 181v256q0 26-19 45t-45 19-45-19-19-45v-256q0-159 112.5-271.5t271.5-112.5 271.5 112.5 112.5 271.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=shopping-bag.js.map