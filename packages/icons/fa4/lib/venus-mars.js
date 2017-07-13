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
        React.createElement("path", { d: "M1536 32q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q76 95 107.5 214t9.5 247q-32 180-164.5 310t-313.5 157q-223 34-409-90-117 78-256 93v132h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96v96q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-96h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96v-132q-155-17-279.5-109.5t-187-237.5-39.5-307q25-187 159.5-322.5t320.5-164.5q224-34 410 90 146-97 320-97 201 0 359 126l255-254h-134q-14 0-23-9t-9-23v-64zm-768 1113q128-131 128-313t-128-313q-128 131-128 313t128 313zm-768-313q0 185 131.5 316.5t316.5 131.5q117 0 218-57-154-167-154-391t154-391q-101-57-218-57-185 0-316.5 131.5t-131.5 316.5zm1088 448q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5q-117 0-218 57 154 167 154 391t-154 391q101 57 218 57z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=venus-mars.js.map