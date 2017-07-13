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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" }),
        React.createElement("path", { d: "M288 32C129 32 0 125.1 0 240c0 50.2 24.6 96.3 65.6 132.2-10.4 36.3-29.7 45.9-52.3 62.1-27.6 19.7-7.9 47.6 17.4 45.6 58.7-4.7 113.3-19.9 159.2-44.2 30.6 8 63.6 12.3 98 12.3 159.1 0 288-93 288-208C576 125.1 447.1 32 288 32zm0 384c-35.4 0-69.7-4.9-102-14.7-40.9 24-90 46.7-154 54.7 48-32 62.5-56.9 69.1-96.3C61.6 330.6 32 289.2 32 240c0-96.5 115.7-176 256-176 141.5 0 256 80.2 256 176 0 96.5-115.6 176-256 176zm32-176c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm96 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm-192 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-comment-alt.js.map