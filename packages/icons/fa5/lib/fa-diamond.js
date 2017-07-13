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
        React.createElement("path", { d: "M253 13.4c-15.3-17.9-42.8-17.9-58.1 0L9.3 230.9c-12.4 14.5-12.4 35.6 0 50.2L195 498.6c15.3 17.9 42.8 17.9 58.1 0l185.6-217.5c12.4-14.5 12.4-35.6 0-50.2L253 13.4zm161.4 246.9L228.7 477.8c-2.5 2.9-6.9 2.9-9.4 0L33.6 260.3c-2.1-2.5-2.1-6.2 0-8.6L219.3 34.2c2.5-2.9 6.9-2.9 9.4 0l185.7 217.5c2.1 2.5 2.1 6.1 0 8.6z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-diamond.js.map