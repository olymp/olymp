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
        React.createElement("path", { d: "M576 1344q0 26-19 45t-45 19-45-19-19-45 19-45 45-19 45 19 19 45zm1024 61q0 121-73 190t-194 69h-874q-121 0-194-69t-73-190q0-68 5.5-131t24-138 47.5-132.5 81-103 120-60.5q-22 52-22 120v203q-58 20-93 70t-35 111q0 80 56 136t136 56 136-56 56-136q0-61-35.5-111t-92.5-70v-203q0-62 25-93 132 104 295 104t295-104q25 31 25 93v64q-106 0-181 75t-75 181v89q-32 29-32 71 0 40 28 68t68 28 68-28 28-68q0-42-32-71v-89q0-52 38-90t90-38 90 38 38 90v89q-32 29-32 71 0 40 28 68t68 28 68-28 28-68q0-42-32-71v-89q0-68-34.5-127.5t-93.5-93.5q0-10 .5-42.5t0-48-2.5-41.5-7-47-13-40q68 15 120 60.5t81 103 47.5 132.5 24 138 5.5 131zm-320-893q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=user-md.js.map