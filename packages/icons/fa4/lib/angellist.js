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
        React.createElement("path", { d: "M1209 378l-114 328 117 21q165-451 165-518 0-56-38-56-57 0-130 225zm-299 687l33 88q37-42 71-67l-33-5.5-38.5-7-32.5-8.5zm-292-896q0 98 159 521 18-10 49-10 15 0 75 5l-121-351q-75-220-123-220-19 0-29 17.5t-10 37.5zm-79 759q0 36 51.5 119t117.5 153 100 70q14 0 25.5-13t11.5-27q0-24-32-102-13-32-32-72t-47.5-89-61.5-81-62-32q-20 0-45.5 27t-25.5 47zm-158 335q0 41 25 104 59 145 183.5 227t281.5 82q227 0 382-170 152-169 152-427 0-43-1-67t-11.5-62-30.5-56q-56-49-211.5-75.5t-270.5-26.5q-37 0-49 11-12 5-12 35 0 34 21.5 60t55.5 40 77.5 23.5 87.5 11.5 85 4 70 0h23q24 0 40 19 15 19 19 55-28 28-96 54-61 22-93 46-64 46-108.5 114t-44.5 137q0 31 18.5 88.5t18.5 87.5l-3 12q-4 12-4 14-137-10-146-216-8 2-41 2 2 7 2 21 0 53-40.5 89.5t-94.5 36.5q-82 0-166.5-78t-84.5-159q0-34 33-67 52 64 60 76 77 104 133 104 12 0 26.5-8.5t14.5-20.5q0-34-87.5-145t-116.5-111q-43 0-70 44.5t-27 90.5zm-114 9q0-101 42.5-163t136.5-88q-28-74-28-104 0-62 61-123t122-61q29 0 70 15-163-462-163-567 0-80 41-130.5t119-50.5q131 0 325 581 6 17 8 23 6-16 29-79.5t43.5-118.5 54-127.5 64.5-123 70.5-86.5 76.5-36q71 0 112 49t41 122q0 108-159 550 61 15 100.5 46t58.5 78 26 93.5 7 110.5q0 150-47 280t-132 225-211 150-278 55q-111 0-223-42-149-57-258-191.5t-109-286.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=angellist.js.map