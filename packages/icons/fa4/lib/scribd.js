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
        React.createElement("path", { d: "M1628 1549q0 89-63 152.5t-153 63.5-153.5-63.5-63.5-152.5q0-90 63.5-153.5t153.5-63.5 153 63.5 63 153.5zm-233-281q-115 15-192.5 102.5t-77.5 205.5q0 74 33 138-146 78-379 78-109 0-201-21t-153.5-54.5-110.5-76.5-76-85-44.5-83-23.5-66.5-6-39.5q0-19 4.5-42.5t18.5-56 36.5-58 64-43.5 94.5-18 94 17.5 63 41 35.5 53 17.5 49 4 33.5q0 34-23 81 28 27 82 42t93 17l40 1q115 0 190-51t75-133q0-26-9-48.5t-31.5-44.5-49.5-41-74-44-93.5-47.5-119.5-56.5q-28-13-43-20-116-55-187-100t-122.5-102-72-125.5-20.5-162.5q0-78 20.5-150t66-137.5 112.5-114 166.5-77 221.5-28.5q120 0 220 26t164.5 67 109.5 94 64 105.5 19 103.5q0 46-15 82.5t-36.5 58-48.5 36-49 19.5-39 5h-40l-39-5-44-14-41-28-37-46-24-70.5-10-97.5q-15-16-59-25.5t-81-10.5l-37-1q-68 0-117.5 31t-70.5 70-21 76q0 24 5 43t24 46 53 51 97 53.5 150 58.5q76 25 138.5 53.5t109 55.5 83 59 60.5 59.5 41 62.5 26.5 62 14.5 63.5 6 62 1 62.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=scribd.js.map