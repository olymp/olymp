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
        React.createElement("path", { d: "M1790 529q12 155-52.5 292t-186 224-271.5 103v260h224q14 0 23 9t9 23v64q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224h-512v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224h-224q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-260q-150-16-271.5-103t-186-224-52.5-292q17-206 164.5-356.5t352.5-169.5q206-21 377 94 171-115 377-94 205 19 352.5 169.5t164.5 356.5zm-894 360q128-131 128-313t-128-313q-128 131-128 313t128 313zm-320 135q115 0 218-57-154-165-154-391 0-224 154-391-103-57-218-57-185 0-316.5 131.5t-131.5 316.5 131.5 316.5 316.5 131.5zm576 384v-260q-137-15-256-94-119 79-256 94v260h512zm64-384q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5q-115 0-218 57 154 167 154 391 0 226-154 391 103 57 218 57z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=venus-double.js.map