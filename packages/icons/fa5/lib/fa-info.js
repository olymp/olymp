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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 512" }),
        React.createElement("path", { d: "M208 368.667V208c0-15.495-7.38-29.299-18.811-38.081C210.442 152.296 224 125.701 224 96c0-52.935-43.065-96-96-96S32 43.065 32 96c0 24.564 9.274 47.004 24.504 64H56c-26.467 0-48 21.533-48 48v48c0 23.742 17.327 43.514 40 47.333v65.333C25.327 372.486 8 392.258 8 416v48c0 26.467 21.533 48 48 48h144c26.467 0 48-21.533 48-48v-48c0-23.742-17.327-43.514-40-47.333zM128 32c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64 28.654-64 64-64zm88 432c0 8.837-7.163 16-16 16H56c-8.837 0-16-7.163-16-16v-48c0-8.837 7.163-16 16-16h24V272H56c-8.837 0-16-7.163-16-16v-48c0-8.837 7.163-16 16-16h104c8.837 0 16 7.163 16 16v192h24c8.837 0 16 7.163 16 16v48z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-info.js.map