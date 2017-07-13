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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512.001 512" }),
        React.createElement("path", { d: "M497.942 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.744-18.744-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48 48 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12H323.883l174.059-174.059zM292.686 68.687c6.243-6.243 16.374-6.254 22.628-.001l160 160c6.243 6.243 6.253 16.374 0 22.627L358.627 368.001 176 185.373 292.686 68.687zM144 448a15.895 15.895 0 0 1-11.314-4.686l-96-96c-6.243-6.243-6.253-16.374 0-22.627L153.373 208 336 390.628l-52.686 52.686A15.895 15.895 0 0 1 272 448H144z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-eraser.js.map