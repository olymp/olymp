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
        React.createElement("path", { d: "M368 64l-33.6-44.8C325.3 7.1 311.1 0 296 0h-80c-15.1 0-29.3 7.1-38.4 19.2L144 64H40c-13.3 0-24 10.7-24 24v2c0 3.3 2.7 6 6 6h20.9l33.2 372.3C78.3 493 99 512 123.9 512h264.2c24.9 0 45.6-19 47.8-43.7L469.1 96H490c3.3 0 6-2.7 6-6v-2c0-13.3-10.7-24-24-24H368zM216 32h80c5 0 9.8 2.4 12.8 6.4L328 64H184l19.2-25.6c3-4 7.8-6.4 12.8-6.4zm188 433.4c-.7 8.3-7.6 14.6-15.9 14.6H123.9c-8.3 0-15.2-6.3-15.9-14.6L75 96h362l-33 369.4z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-trash.js.map