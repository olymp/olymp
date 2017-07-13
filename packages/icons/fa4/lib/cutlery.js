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
        React.createElement("path", { d: "M832 64v640q0 61-35.5 111t-92.5 70v779q0 52-38 90t-90 38h-128q-52 0-90-38t-38-90v-779q-57-20-92.5-70t-35.5-111v-640q0-26 19-45t45-19 45 19 19 45v416q0 26 19 45t45 19 45-19 19-45v-416q0-26 19-45t45-19 45 19 19 45v416q0 26 19 45t45 19 45-19 19-45v-416q0-26 19-45t45-19 45 19 19 45zm768 0v1600q0 52-38 90t-90 38h-128q-52 0-90-38t-38-90v-512h-224q-13 0-22.5-9.5t-9.5-22.5v-800q0-132 94-226t226-94h256q26 0 45 19t19 45z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=cutlery.js.map