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
        React.createElement("path", { d: "M1256 434l37-194q5-23-9-40t-35-17h-712q-23 0-38.5 17t-15.5 37v1101q0 7 6 1l291-352q23-26 38-33.5t48-7.5h239q22 0 37-14.5t18-29.5q24-130 37-191 4-21-11.5-40t-36.5-19h-294q-29 0-48-19t-19-48v-42q0-29 19-47.5t48-18.5h346q18 0 35-13.5t20-29.5zm227-222q-15 73-53.5 266.5t-69.5 350-35 173.5q-6 22-9 32.5t-14 32.5-24.5 33-38.5 21-58 10h-271q-13 0-22 10-8 9-426 494-22 25-58.5 28.5t-48.5-5.5q-55-22-55-98v-1410q0-55 38-102.5t120-47.5h888q95 0 127 53t10 159zm0 0l-158 790q4-17 35-173.5t69.5-350 53.5-266.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=foursquare.js.map