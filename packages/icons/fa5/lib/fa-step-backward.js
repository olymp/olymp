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
        React.createElement("path", { d: "M76 479h8c6.6 0 12-5.4 12-12V276.7c1.1 1.2 2.2 2.4 3.5 3.4l232 191.4c20.6 17.2 52.5 2.8 52.5-24.6V63c0-27.4-31.9-41.8-52.5-24.6L99.5 231c-1.3 1.1-2.4 2.2-3.5 3.4V43c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v424c0 6.6 5.4 12 12 12zm40.5-223.4L351.8 63.2l.1-.1.1-.1v384l-.1-.1-.2-.1-235.2-191.2z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-step-backward.js.map