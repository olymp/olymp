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
        React.createElement("path", { d: "M704 192q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm896-32v320q0 16-12 25-8 7-20 7-4 0-7-1l-448-96q-11-2-18-11t-7-20h-256v102q111 23 183.5 111t72.5 203v800q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-800q0-106 62.5-190.5t161.5-114.5v-111h-32q-59 0-115 23.5t-91.5 53-66 66.5-40.5 53.5-14 24.5q-17 35-57 35-16 0-29-7-23-12-31.5-37t3.5-49q5-10 14.5-26t37.5-53.5 60.5-70 85-67 108.5-52.5q-25-42-25-86 0-66 47-113t113-47 113 47 47 113q0 33-14 64h302q0-11 7-20t18-11l448-96q3-1 7-1 12 0 20 7 12 9 12 25z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fire-extinguisher.js.map