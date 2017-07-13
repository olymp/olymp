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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512" }),
        React.createElement("path", { d: "M472 120c75.2 0 136 60.8 136 136s-60.8 136-136 136c-42.1 0-80-24-97-40H265c-17 16-43.1 40-97 40-75.2 0-136-60.8-136-136s60.8-136 136-136h304m0-32H168C75.2 88 0 163.2 0 256s75.2 168 168 168c41.5 0 79.5-15.1 108.8-40h86.4c29.3 24.9 67.3 40 108.8 40 92.8 0 168-75.2 168-168S564.8 88 472 88zm40 100c-19.9 0-36 16.1-36 36s16.1 36 36 36 36-16.1 36-36-16.1-36-36-36zm-64 64c-19.9 0-36 16.1-36 36s16.1 36 36 36 36-16.1 36-36-16.1-36-36-36zm-268-16v-46c0-3.3-2.7-6-6-6h-28c-3.3 0-6 2.7-6 6v46H94c-3.3 0-6 2.7-6 6v28c0 3.3 2.7 6 6 6h46v46c0 3.3 2.7 6 6 6h28c3.3 0 6-2.7 6-6v-46h46c3.3 0 6-2.7 6-6v-28c0-3.3-2.7-6-6-6h-46z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-gamepad.js.map