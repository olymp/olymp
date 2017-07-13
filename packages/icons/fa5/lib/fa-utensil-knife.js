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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }),
        React.createElement("path", { d: "M72.9 498.4l-48.3-48.3C7 432.5 6.2 404.5 23.3 387.4l375-375C415.2-4.5 443.4-4 461 13.7c20.8 20.6 40 60.8 40 122.3 0 102.8-67.6 225.8-231.9 205.2L138.1 497c-16.6 19.7-46.7 19.9-65.2 1.4zM421 35L46 410c-4.6 4.6-3.7 12.5 1.3 17.5l48.3 48.3c5.4 5.4 13.8 5.7 18 .7L256.1 307c82.8 12.7 153.2-4 191.3-79.3 14.7-29 21.7-61.4 21.7-91.7 0-48-11.3-80.4-30.6-99.7-5.2-5.2-13-5.8-17.5-1.3z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-utensil-knife.js.map