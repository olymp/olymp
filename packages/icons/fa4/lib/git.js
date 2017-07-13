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
        React.createElement("path", { d: "M595 1514q0-100-165-100-158 0-158 104 0 101 172 101 151 0 151-105zm-59-755q0-61-30-102t-89-41q-124 0-124 145 0 135 124 135 119 0 119-137zm269-324v202q-36 12-79 22 16 43 16 84 0 127-73 216.5t-197 112.5q-40 8-59.5 27t-19.5 58q0 31 22.5 51.5t58 32 78.5 22 86 25.5 78.5 37.5 58 64 22.5 98.5q0 304-363 304-69 0-130-12.5t-116-41-87.5-82-32.5-127.5q0-165 182-225v-4q-67-41-67-126 0-109 63-137v-4q-72-24-119.5-108.5t-47.5-165.5q0-139 95-231.5t235-92.5q96 0 178 47 98 0 218-47zm318 881h-222q4-45 4-134v-609q0-94-4-128h222q-4 33-4 124v613q0 89 4 134zm601-222v196q-71 39-174 39-62 0-107-20t-70-50-39.5-78-18.5-92-4-103v-351h2v-4q-7 0-19-1t-18-1q-21 0-59 6v-190h96v-76q0-54-6-89h227q-6 41-6 165h171v190q-15 0-43.5-2t-42.5-2h-85v365q0 131 87 131 61 0 109-33zm-576-947q0 58-39 101.5t-96 43.5q-58 0-98-43.5t-40-101.5q0-59 39.5-103t98.5-44q58 0 96.5 44.5t38.5 102.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=git.js.map