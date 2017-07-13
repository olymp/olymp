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
        React.createElement("path", { d: "M496.7 285.7c9.9-12.9 15.3-29.7 15.3-50.2 0-37.7-32.1-72.6-72.7-72.6h-70.1c8.7-17.4 20.7-38.9 20.7-69.8C389.9 34.7 366.6 0 307 0c-49.3 0-40.9 88.7-63.4 111.2-26.5 26.5-63.7 88.6-86.1 94-4-7.8-12.1-13.2-21.4-13.2H24c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24v-16.7c32.5 0 100.7 40.7 177.5 40.7h41c59.3 0 92.3-35.9 90.3-89.8 15.1-17.7 22.5-43.3 18.2-67.1 12.5-19.5 15.2-47.1 9.7-69.4zM32 480V224h96v256H32zm424-203.6c16 11.6 16 59.6-5.6 70.7 13.5 22.8 1.4 53.2-15 62 8.3 52.5-19 70.6-57.2 71h-40.7c-72.9 0-134.7-40.7-177.5-40.7V235.6c37.7 0 72.3-67.9 106.2-101.8 30.5-30.5 20.4-81.5 40.7-101.8 50.9 0 50.9 35.5 50.9 61.1 0 42.2-30.5 61.1-30.5 101.8h112c22.7 0 40.6 20.4 40.7 40.7.1 20.4-8 36.4-24 40.8z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-thumbs-up.js.map