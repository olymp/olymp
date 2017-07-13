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
        React.createElement("path", { d: "M1504 896l138 135q30 28 20 70-12 41-52 51l-188 48 53 186q12 41-19 70-29 31-70 19l-186-53-48 188q-10 40-51 52-12 2-19 2-31 0-51-22l-135-138-135 138q-28 30-70 20-41-11-51-52l-48-188-186 53q-41 12-70-19-31-29-19-70l53-186-188-48q-40-10-52-51-10-42 20-70l138-135-138-135q-30-28-20-70 12-41 52-51l188-48-53-186q-12-41 19-70 29-31 70-19l186 53 48-188q10-41 51-51 41-12 70 19l135 139 135-139q29-30 70-19 41 10 51 51l48 188 186-53q41-12 70 19 31 29 19 70l-53 186 188 48q40 10 52 51 10 42-20 70z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=certificate.js.map