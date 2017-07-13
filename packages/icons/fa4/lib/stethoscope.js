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
        React.createElement("path", { d: "M1472 704q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128 0q0 62-35.5 111t-92.5 70v395q0 159-131.5 271.5t-316.5 112.5-316.5-112.5-131.5-271.5v-132q-164-20-274-128t-110-252v-512q0-26 19-45t45-19q6 0 16 2 17-30 47-48t65-18q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5q-33 0-64-18v402q0 106 94 181t226 75 226-75 94-181v-402q-31 18-64 18-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5q35 0 65 18t47 48q10-2 16-2 26 0 45 19t19 45v512q0 144-110 252t-274 128v132q0 106 94 181t226 75 226-75 94-181v-395q-57-21-92.5-70t-35.5-111q0-80 56-136t136-56 136 56 56 136z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=stethoscope.js.map