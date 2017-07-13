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
        React.createElement("path", { d: "M1087 1187l102 204q-58 179-210 290t-339 111q-156 0-288.5-77.5t-210-210-77.5-288.5q0-181 104.5-330t274.5-211l17 131q-122 54-195 165.5t-73 244.5q0 185 131.5 316.5t316.5 131.5q126 0 232.5-65t165-175.5 49.5-236.5zm548 100l58 114-256 128q-13 7-29 7-40 0-57-35l-239-477h-472q-24 0-42.5-16.5t-21.5-40.5l-96-779q-2-16 6-42 14-51 57-82.5t97-31.5q66 0 113 47t47 113q0 69-52 117.5t-120 41.5l37 289h423v128h-407l16 128h455q40 0 57 35l228 455z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=wheelchair.js.map