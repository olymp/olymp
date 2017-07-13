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
        React.createElement("path", { d: "M880 128q-46 0-79 33t-33 79v656h-32v-528q0-46-33-79t-79-33-79 33-33 79v784l-154-205q-38-51-102-51-53 0-90.5 37.5t-37.5 90.5q0 43 26 77l384 512q38 51 102 51h688q34 0 61-22t34-56l76-405q5-32 5-59v-498q0-46-33-79t-79-33-79 33-33 79v272h-32v-528q0-46-33-79t-79-33-79 33-33 79v528h-32v-656q0-46-33-79t-79-33zm0-128q68 0 125.5 35.5t88.5 96.5q19-4 42-4 99 0 169.5 70.5t70.5 169.5v17q105-6 180.5 64t75.5 175v498q0 40-8 83l-76 404q-14 79-76.5 131t-143.5 52h-688q-60 0-114.5-27.5t-90.5-74.5l-384-512q-51-68-51-154 0-106 75-181t181-75q78 0 128 34v-434q0-99 70.5-169.5t169.5-70.5q23 0 42 4 31-61 88.5-96.5t125.5-35.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=hand-stop-o.js.map