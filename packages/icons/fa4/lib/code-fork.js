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
        React.createElement("path", { d: "M672 1472q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm0-1152q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm640 128q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm96 0q0 52-26 96.5t-70 69.5q-2 287-226 414-68 38-203 81-128 40-169.5 71t-41.5 100v26q44 25 70 69.5t26 96.5q0 80-56 136t-136 56-136-56-56-136q0-52 26-96.5t70-69.5v-820q-44-25-70-69.5t-26-96.5q0-80 56-136t136-56 136 56 56 136q0 52-26 96.5t-70 69.5v497q54-26 154-57 55-17 87.5-29.5t70.5-31 59-39.5 40.5-51 28-69.5 8.5-91.5q-44-25-70-69.5t-26-96.5q0-80 56-136t136-56 136 56 56 136z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=code-fork.js.map