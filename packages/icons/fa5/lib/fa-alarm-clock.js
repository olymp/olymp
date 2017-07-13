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
        React.createElement("path", { d: "M298.3 348.7l-4.5 6.6c-3.8 5.5-11.2 6.8-16.7 3.1l-63.8-43.9c-3.3-2.2-5.2-5.9-5.2-9.9V172c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v122l55.2 38c5.3 3.8 6.7 11.2 3 16.7zM377.6 451l33.7 33.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.2-22.6 0l-36-36C316.3 497 271.9 512 224 512s-92.3-15-128.7-40.7l-36 36c-6.2 6.3-16.4 6.2-22.6 0-6.2-6.2-6.2-16.4 0-22.6L70.4 451C27 410.2 0 352.2 0 288c0-37.7 9.3-73.3 25.8-104.5C9.7 164.1 0 139.2 0 112 0 50.1 50.1 0 112 0c44.8 0 83.4 26.3 101.3 64.2 7.1-.3 14.5-.3 21.3 0C252.4 26.6 290.9 0 336 0c61.9 0 112 50.1 112 112 0 27.2-9.7 52.1-25.8 71.5C438.7 214.7 448 250.3 448 288c0 64.2-27 122.2-70.4 163zM268.9 68.5c55 11.2 102.6 42.5 134.9 85.9 7.7-12.3 12.2-26.8 12.2-42.4 0-44.1-35.9-80-80-80-28.1 0-52.8 14.6-67.1 36.5zM32 112c0 15.6 4.5 30.1 12.2 42.4 32.3-43.4 80-74.7 134.9-85.9C164.8 46.6 140.1 32 112 32c-44.1 0-80 35.9-80 80zm192-16C118 96 32 182 32 288s86 192 192 192 192-86 192-192S330 96 224 96z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-alarm-clock.js.map