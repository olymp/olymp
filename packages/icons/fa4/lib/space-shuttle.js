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
        React.createElement("path", { d: "M428 1120q-110 64-268 64h-128v-64h-64q-13 0-22.5-23.5t-9.5-56.5q0-24 7-49-58-2-96.5-10.5t-38.5-20.5 38.5-20.5 96.5-10.5q-7-25-7-49 0-33 9.5-56.5t22.5-23.5h64v-64h128q158 0 268 64h1113q42 7 106.5 18t80.5 14q89 15 150 40.5t83.5 47.5 22.5 40-22.5 40-83.5 47.5-150 40.5q-16 3-80.5 14t-106.5 18h-1113zm1119-252q53 36 53 92t-53 92l81 30q68-48 68-122t-68-122zm-1114 268h1015q-217 38-456 80-57 0-113 24t-83 48l-28 24-288 288q-26 26-70.5 45t-89.5 19h-96l-93-464h29q157 0 273-64zm-273-416h-29l93-464h96q46 0 90 19t70 45l288 288q4 4 11 10.5t30.5 23 48.5 29 61.5 23 72.5 10.5l456 80h-1015q-116-64-273-64z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=space-shuttle.js.map