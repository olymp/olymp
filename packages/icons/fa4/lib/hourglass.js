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
        React.createElement("path", { d: "M1632 1600q14 0 23 9t9 23v128q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-128q0-14 9-23t23-9h1472zm-1374-64q3-55 16-107t30-95 46-87 53.5-76 64.5-69.5 66-60 70.5-55 66.5-47.5 65-43q-43-28-65-43t-66.5-47.5-70.5-55-66-60-64.5-69.5-53.5-76-46-87-30-95-16-107h1276q-3 55-16 107t-30 95-46 87-53.5 76-64.5 69.5-66 60-70.5 55-66.5 47.5-65 43q43 28 65 43t66.5 47.5 70.5 55 66 60 64.5 69.5 53.5 76 46 87 30 95 16 107h-1276zm1374-1536q14 0 23 9t9 23v128q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-128q0-14 9-23t23-9h1472z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=hourglass.js.map