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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }),
        React.createElement("path", { d: "M448 416c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-12.965 2.576-25.327 7.235-36.61l-95.45-59.657C150.199 339.525 124.558 352 96 352c-53.019 0-96-42.981-96-96s42.981-96 96-96c28.558 0 54.199 12.475 71.784 32.267l95.45-59.657C258.576 121.327 256 108.965 256 96c0-53.019 42.981-96 96-96s96 42.981 96 96-42.981 96-96 96c-28.558 0-54.199-12.475-71.784-32.267l-95.451 59.656c9.661 23.396 9.641 49.87 0 73.22l95.451 59.656C297.801 332.475 323.442 320 352 320c53.019 0 96 42.981 96 96zM352 32c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64M96 192c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64m256 160c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-share-alt.js.map