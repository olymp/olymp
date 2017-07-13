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
        React.createElement("path", { d: "M276 288c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-50.835a12.002 12.002 0 0 1-10.241-5.745l-61.191-100.18c-5.153-7.443-9.734-16.604-9.734-16.604s-3.435 8.588-9.16 17.177L74.218 314.24A12.002 12.002 0 0 1 63.967 320H12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h36.098l73.861-117.439L54.397 64H12C5.373 64 0 58.627 0 52v-8c0-6.627 5.373-12 12-12h58.264a12 12 0 0 1 10.252 5.763l54.323 89.283c4.581 7.444 9.161 16.605 9.161 16.605s4.008-8.588 9.161-17.177l55.449-88.828A12 12 0 0 1 218.789 32H276c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-39.528l-68.136 106.561L243.342 288H276zm92.454 159.728c2.519-30.07 31.341-49.771 61.78-70.58 36.308-24.822 77.459-52.954 77.459-104.002 0-22.542-8.326-42.999-23.444-57.603C468.304 200.141 446.05 192 419.89 192c-35.475 0-65.345 18.9-82.559 44.759-3.655 5.491-2.163 12.91 3.31 16.592l7.467 5.024c5.341 3.594 12.522 2.299 16.371-2.862 12.982-17.407 32.006-29.673 53.845-29.673 31.312 0 53.181 20.097 53.181 48.872 0 32.67-30.043 53.42-61.851 75.388-37.092 25.617-79.132 54.652-79.132 108.281 0 4.257.225 7.85.551 10.925.645 6.09 5.806 10.694 11.931 10.694H500c6.627 0 12-5.373 12-12v-8.272c0-6.627-5.373-12-12-12H368.454z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-subscript.js.map