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
        React.createElement("path", { d: "M1255 1210q0-32-30-51-193-115-447-115-133 0-287 34-42 9-42 52 0 20 13.5 34.5t35.5 14.5q5 0 37-8 132-27 243-27 226 0 397 103 19 11 33 11 19 0 33-13.5t14-34.5zm96-215q0-40-35-61-237-141-548-141-153 0-303 42-48 13-48 64 0 25 17.5 42.5t42.5 17.5q7 0 37-8 122-33 251-33 279 0 488 124 24 13 38 13 25 0 42.5-17.5t17.5-42.5zm108-248q0-47-40-70-126-73-293-110.5t-343-37.5q-204 0-364 47-23 7-38.5 25.5t-15.5 48.5q0 31 20.5 52t51.5 21q11 0 40-8 133-37 307-37 159 0 309.5 34t253.5 95q21 12 40 12 29 0 50.5-20.5t21.5-51.5zm205 149q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=spotify.js.map