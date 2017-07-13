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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512" }),
        React.createElement("path", { d: "M200.343 0C124.032 0 69.761 31.599 28.195 93.302c-14.213 21.099-9.458 49.674 10.825 65.054l42.034 31.872c20.709 15.703 50.346 12.165 66.679-8.51 21.473-27.181 28.371-31.96 46.132-31.96 10.218 0 25.289 6.999 25.289 18.242 0 25.731-109.3 20.744-109.3 122.251V304c0 16.007 7.883 30.199 19.963 38.924C109.139 360.547 96 386.766 96 416c0 52.935 43.065 96 96 96s96-43.065 96-96c0-29.234-13.139-55.453-33.817-73.076 12.08-8.726 19.963-22.917 19.963-38.924v-4.705c25.386-18.99 104.286-44.504 104.286-139.423C378.432 68.793 288.351 0 200.343 0zM192 480c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm50.146-186.406V304c0 8.837-7.163 16-16 16h-68.292c-8.836 0-16-7.163-16-16v-13.749c0-86.782 109.3-57.326 109.3-122.251 0-32-31.679-50.242-57.289-50.242-33.783 0-49.167 16.18-71.242 44.123-5.403 6.84-15.284 8.119-22.235 2.848l-42.034-31.872c-6.757-5.124-8.357-14.644-3.62-21.677C88.876 60.499 132.358 32 200.343 32c70.663 0 146.089 55.158 146.089 127.872 0 96.555-104.286 98.041-104.286 133.722z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-question.js.map