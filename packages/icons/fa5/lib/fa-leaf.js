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
        React.createElement("path", { d: "M501.1 64c32.3 0 42.9 79.9 42.9 103.1 0 170.4-168.3 259.6-285.7 259.6-73 0-134.3-34.4-134.3-34.4-14.3 0-31.4 55.6-56.3 55.6-24 0-35.7-20.6-35.7-33 0-28.4 56.6-50.5 56.6-66.3 0 0-11.1-18.1-11.1-50.7 0-86.7 72.3-148.6 153.4-174.3 58.6-18.5 183.1 3 222.9-33C469.4 76.8 477.1 64 501.1 64m0-32c-38 0-54.3 22.1-68.6 34.8l-.1.1-.1.1c-25.8 23.4-151.8 7.5-211 26.2C124.6 123.7 45.4 198.1 45.4 298c0 18.8 3 34 6.4 45.3C32.5 358.4 0 380 0 415c0 31.7 27.6 65 67.7 65 31.1 0 48.9-26.9 63.2-48.9 26.6 11.4 74 27.6 127.4 27.6 128.9 0 317.7-97.6 317.7-291.6C576 113.5 556 32 501.1 32zM158.7 334c54.9-74.9 125.6-109.8 227.7-102.2 8.8.7 16.5-5.9 17.2-14.8.7-8.8-5.9-16.5-14.8-17.2-110.6-8.3-192.9 29.2-255.9 115.1-5.2 7.1-3.7 17.1 3.4 22.4 7.1 5.4 17.2 3.9 22.4-3.3z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-leaf.js.map