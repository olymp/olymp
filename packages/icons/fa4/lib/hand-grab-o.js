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
        React.createElement("path", { d: "M896 384q-53 0-90.5 37.5t-37.5 90.5v128h-32v-93q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v429l-32-30v-172q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v224q0 47 35 82l310 296q39 39 39 102 0 26 19 45t45 19h640q26 0 45-19t19-45v-25q0-41 10-77l108-436q10-36 10-77v-246q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v32h-32v-125q0-40-25-72.5t-64-40.5q-14-2-23-2-46 0-79 33t-33 79v128h-32v-122q0-51-32.5-89.5t-82.5-43.5q-5-1-13-1zm0-128q84 0 149 50 57-34 123-34 59 0 111 27t86 76q27-7 59-7 100 0 170 71.5t70 171.5v246q0 51-13 108l-109 436q-6 24-6 71 0 80-56 136t-136 56h-640q-84 0-138-58.5t-54-142.5l-308-296q-76-73-76-175v-224q0-99 70.5-169.5t169.5-70.5q11 0 16 1 6-95 75.5-160t164.5-65q52 0 98 21 72-69 174-69z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=hand-grab-o.js.map