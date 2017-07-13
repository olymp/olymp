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
        React.createElement("path", { d: "M384 448q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm1152 576q0-35-21.5-81t-53.5-47q15-17 25-47.5t10-55.5q0-69-53-119 18-32 18-69t-17.5-73.5-47.5-52.5q5-30 5-56 0-85-49-126t-136-41h-128q-131 0-342 73-5 2-29 10.5t-35.5 12.5-35 11.5-38 11-33 6.5-31.5 3h-32v640h32q16 0 35.5 9t40 27 38.5 35.5 40 44 34.5 42.5 31.5 41 23 30q55 68 77 91 41 43 59.5 109.5t30.5 125.5 38 85q96 0 128-47t32-145q0-59-48-160.5t-48-159.5h352q50 0 89-38.5t39-89.5zm128 1q0 103-76 179t-180 76h-176q48 99 48 192 0 118-35 186-35 69-102 101.5t-151 32.5q-51 0-90-37-34-33-54-82t-25.5-90.5-17.5-84.5-31-64q-48-50-107-127-101-131-137-155h-274q-53 0-90.5-37.5t-37.5-90.5v-640q0-53 37.5-90.5t90.5-37.5h288q22 0 138-40 128-44 223-66t200-22h112q140 0 226.5 79t85.5 216v5q60 77 60 178 0 22-3 43 38 67 38 144 0 36-9 69 49 74 49 163z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=thumbs-o-down.js.map