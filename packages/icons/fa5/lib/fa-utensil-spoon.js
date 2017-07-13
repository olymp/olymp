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
        React.createElement("path", { d: "M60.3 499.8l-48.1-48.1C-4.6 435-4 407.4 13.8 391.5L206 219c-22.3-53.2-10.6-111.8 35.2-157.7C303.3-.8 416.7-26 477.3 34.6c60.7 60.7 35.3 174.2-26.7 236.1-45.8 45.9-104.4 57.7-157.6 35.3L120.5 498.2c-15.9 17.7-43.4 18.5-60.2 1.6zM263.8 83.9c-45.7 45.7-44.5 92.6-18.4 142.7L35.2 415.3c-4.1 3.6-4.2 9.9-.4 13.8l48.1 48.1c3.9 3.9 10.2 3.6 13.8-.4l188.7-210.3c49.5 25.8 96.7 27.7 142.7-18.4 49.3-49.4 74-143.7 26.7-191-45.4-45.3-139-25.2-191 26.8z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-utensil-spoon.js.map