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
        React.createElement("path", { d: "M1493 228q-165-110-359-110-155 0-293 73t-240 200q-75 93-119.5 218t-48.5 266v42q4 141 48.5 266t119.5 218q102 127 240 200t293 73q194 0 359-110-121 108-274.5 168t-322.5 60q-29 0-43-1-175-8-333-82t-272-193-181-281-67-339q0-182 71-348t191-286 286-191 348-71h3q168 1 320.5 60.5t273.5 167.5zm299 668q0 192-77 362.5t-213 296.5q-104 63-222 63-137 0-255-84 154-56 253.5-233t99.5-405q0-227-99-404t-253-234q119-83 254-83 119 0 226 65 135 125 210.5 295t75.5 361z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=opera.js.map