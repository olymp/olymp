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
        React.createElement("path", { d: "M1423 640q18 182-131 258 117 28 175 103t45 214q-7 71-32.5 125t-64.5 89-97 58.5-121.5 34.5-145.5 15v255h-154v-251q-80 0-122-1v252h-154v-255q-18 0-54-.5t-55-.5h-200l31-183h111q50 0 58-51v-402h16q-6-1-16-1v-287q-13-68-89-68h-111v-164l212 1q64 0 97-1v-252h154v247q82-2 122-2v-245h154v252q79 7 140 22.5t113 45 82.5 78 36.5 114.5zm-215 545q0-36-15-64t-37-46-57.5-30.5-65.5-18.5-74-9-69-3-64.5 1-47.5 1v338q8 0 37 .5t48 .5 53-1.5 58.5-4 57-8.5 55.5-14 47.5-21 39.5-30 24.5-40 9.5-51zm-71-476q0-33-12.5-58.5t-30.5-42-48-28-55-16.5-61.5-8-58-2.5-54 1-39.5.5v307q5 0 34.5.5t46.5 0 50-2 55-5.5 51.5-11 48.5-18.5 37-27 27-38.5 9-51z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=bitcoin.js.map