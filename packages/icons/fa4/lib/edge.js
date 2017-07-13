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
        React.createElement("path", { d: "M69 795h1q16-126 58.5-241.5t115-217 167.5-176 223.5-117.5 276.5-43q231 0 414 105.5t294 303.5q104 187 104 442v188h-1125q1 111 53.5 192.5t136.5 122.5 189.5 57 213 3 208-46.5 173.5-84.5v377q-92 55-229.5 92t-312.5 38-316-53q-189-73-311.5-249t-124.5-372q-3-242 111-412t325-268q-48 60-78 125.5t-46 159.5h635q8-77-8-140t-47-101.5-70.5-66.5-80.5-41-75-20.5-56-8.5l-22-1q-135 5-259.5 44.5t-223.5 104.5-176 140.5-138 163.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=edge.js.map