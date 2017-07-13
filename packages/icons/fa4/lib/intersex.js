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
        React.createElement("path", { d: "M1152 32q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q126 158 126 359 0 221-147.5 384.5t-364.5 187.5v132h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96v96q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-96h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96v-132q-149-16-270.5-103t-186.5-223.5-53-291.5q16-204 160-353.5t347-172.5q118-14 228 19t198 103l255-254h-134q-14 0-23-9t-9-23v-64zm-448 1248q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=intersex.js.map