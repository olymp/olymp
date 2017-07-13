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
        React.createElement("path", { d: "M4.5 413.5l211-211.1c4.7-4.7 12.3-4.7 17 0l211 211.1c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L224 242.1 28.5 437.5c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.6-4.6-4.6-12.2.1-16.9zm0-111l7.1 7.1c4.7 4.7 12.3 4.7 17 0L224 114.1l195.5 195.5c4.7 4.7 12.3 4.7 17 0l7.1-7.1c4.7-4.7 4.7-12.3 0-17l-211-211.1c-4.7-4.7-12.3-4.7-17 0L4.5 285.5c-4.7 4.7-4.7 12.3 0 17z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-chevron-double-up.js.map