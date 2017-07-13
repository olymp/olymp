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
        React.createElement("path", { d: "M1360 1307l35 159q3 12-3 22.5t-17 14.5l-5 1q-4 2-10.5 3.5t-16 4.5-21.5 5.5-25.5 5-30 5-33.5 4.5-36.5 3-38.5 1q-234 0-409-130.5t-238-351.5h-95q-13 0-22.5-9.5t-9.5-22.5v-113q0-13 9.5-22.5t22.5-9.5h66q-2-57 1-105h-67q-14 0-23-9t-9-23v-114q0-14 9-23t23-9h98q67-210 243.5-338t400.5-128q102 0 194 23 11 3 20 15 6 11 3 24l-43 159q-3 13-14 19.5t-24 2.5l-4-1q-4-1-11.5-2.5l-17.5-3.5-22.5-3.5-26-3-29-2.5-29.5-1q-126 0-226 64t-150 176h468q16 0 25 12 10 12 7 26l-24 114q-5 26-32 26h-488q-3 37 0 105h459q15 0 25 12 9 12 6 27l-24 112q-2 11-11 18.5t-20 7.5h-387q48 117 149.5 185.5t228.5 68.5q18 0 36-1.5t33.5-3.5 29.5-4.5 24.5-5 18.5-4.5l12-3 5-2q13-5 26 2 12 7 15 21z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=euro.js.map