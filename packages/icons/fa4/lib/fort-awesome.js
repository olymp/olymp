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
        React.createElement("path", { d: "M640 1008v-224q0-16-16-16h-96q-16 0-16 16v224q0 16 16 16h96q16 0 16-16zm512 0v-224q0-16-16-16h-96q-16 0-16 16v224q0 16 16 16h96q16 0 16-16zm512 32v752h-640v-320q0-80-56-136t-136-56-136 56-56 136v320h-640v-752q0-16 16-16h96q16 0 16 16v112h128v-624q0-16 16-16h96q16 0 16 16v112h128v-112q0-16 16-16h96q16 0 16 16v112h128v-112q0-16 16-16h16v-393q-32-19-32-55 0-26 19-45t45-19 45 19 19 45q0 36-32 55v9h272q16 0 16 16v224q0 16-16 16h-272v128h16q16 0 16 16v112h128v-112q0-16 16-16h96q16 0 16 16v112h128v-112q0-16 16-16h96q16 0 16 16v624h128v-112q0-16 16-16h96q16 0 16 16z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fort-awesome.js.map