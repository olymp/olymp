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
        React.createElement("path", { d: "M1299 565q0-100-65-162t-171-62h-320v448h320q106 0 171-62t65-162zm237 0q0 193-126.5 315t-326.5 122h-340v118h505q14 0 23 9t9 23v128q0 14-9 23t-23 9h-505v192q0 14-9.5 23t-22.5 9h-167q-14 0-23-9t-9-23v-192h-224q-14 0-23-9t-9-23v-128q0-14 9-23t23-9h224v-118h-224q-14 0-23-9t-9-23v-149q0-13 9-22.5t23-9.5h224v-629q0-14 9-23t23-9h539q200 0 326.5 122t126.5 315z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=rouble.js.map