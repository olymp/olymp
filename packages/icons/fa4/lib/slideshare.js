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
    return (React.createElement("svg", __assign({ width: size || width, height: size || height, viewBox: "0 0 1792 1792" }, rest),
        React.createElement("path", { d: "M873 740q0 83-63.5 142.5t-152.5 59.5-152.5-59.5-63.5-142.5q0-84 63.5-143t152.5-59 152.5 59 63.5 143zm502 0q0 83-63 142.5t-153 59.5q-89 0-152.5-59.5t-63.5-142.5q0-84 63.5-143t152.5-59q90 0 153 59t63 143zm225 180v-667q0-87-32-123.5t-111-36.5h-1112q-83 0-112.5 34t-29.5 126v673q43 23 88.5 40t81 28 81 18.5 71 11 70 4 58.5.5 56.5-2 44.5-2q68-1 95 27 6 6 10 9 26 25 61 51 7-91 118-87 5 0 36.5 1.5t43 2 45.5 1 53-1 54.5-4.5 61-8.5 62-13.5 67-19.5 67.5-27 72-34.5zm163-5q-121 149-372 252 84 285-23 465-66 113-183 148-104 32-182-15-86-51-82-164l-1-326v-1q-8-2-24.5-6t-23.5-5l-1 338q4 114-83 164-79 47-183 15-117-36-182-150-105-180-22-463-251-103-372-252-25-37-4-63t60 1q3 2 11 7t11 8v-694q0-72 47-123t114-51h1257q67 0 114 51t47 123v694l21-15q39-27 60-1t-4 63z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=slideshare.js.map