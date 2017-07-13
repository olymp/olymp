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
        React.createElement("path", { d: "M256 512c-35.5 0-68.1-19.4-85.5-49.6-32.1 8.7-69 1.1-95.5-25.4-25.1-25.1-34.5-61.9-25.4-95.5C19.4 324.2 0 291.5 0 256s19.4-68.2 49.6-85.5c-9.1-33.6.3-70.4 25.4-95.5 25.1-25.1 61.9-34.5 95.5-25.4C187.8 19.4 220.5 0 256 0s68.2 19.4 85.5 49.6c33.6-9.1 70.4.3 95.5 25.4 25.1 25.1 34.5 61.9 25.4 95.5 30.2 17.3 49.6 50 49.6 85.5s-19.4 68.2-49.6 85.5c9.1 33.6-.3 70.4-25.4 95.5-26.1 26.1-62.8 34.3-95.5 25.4-17.4 30.2-50 49.6-85.5 49.6zm-68.3-91.1c3.6 9.6 16.2 59.1 68.3 59.1 51 0 63.7-47 68.3-59.1 32.6 14.8 61.2 22.4 90.1-6.5 36-36 11.8-78.3 6.5-90.1 9.6-3.6 59.1-16.2 59.1-68.3 0-51-47-63.7-59.1-68.3 4.4-9.6 30.3-53.4-6.5-90.1-36-36-78.3-11.8-90.1-6.5C320.7 81.5 308.1 32 256 32c-51 0-63.7 47-68.3 59.1-9.3-4.2-53.3-30.4-90.1 6.5-36 36-11.8 78.3-6.5 90.1C81.5 191.3 32 203.9 32 256c0 51 47 63.7 59.1 68.3-4.4 9.6-30.3 53.4 6.5 90.1 28.8 28.7 57.5 21.3 90.1 6.5z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-badge.js.map