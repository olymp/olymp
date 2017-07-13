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
        React.createElement("path", { d: "M514 1195l81-299h-159l75 300q1 1 1 3t1 3q0-1 .5-3.5t.5-3.5zm116-427l35-128h-292l32 128h225zm192 0h139l-35-128h-70zm449 428l78-300h-162l81 299q0 1 .5 3.5t1.5 3.5q0-1 .5-3t.5-3zm111-428l33-128h-297l34 128h230zm410 32v64q0 14-9 23t-23 9h-213l-164 616q-7 24-31 24h-159q-24 0-31-24l-166-616h-209l-167 616q-7 24-31 24h-159q-11 0-19.5-7t-10.5-17l-160-616h-208q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h175l-33-128h-142q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h109l-89-344q-5-15 5-28 10-12 26-12h137q26 0 31 24l90 360h359l97-360q7-24 31-24h126q24 0 31 24l98 360h365l93-360q5-24 31-24h137q16 0 26 12 10 13 5 28l-91 344h111q14 0 23 9t9 23v64q0 14-9 23t-23 9h-145l-34 128h179q14 0 23 9t9 23z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=krw.js.map