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
        React.createElement("path", { d: "M480 1408v128h-352v-128h352zm352-128q26 0 45 19t19 45v256q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h256zm160-384v128h-864v-128h864zm-640-512v128h-224v-128h224zm1312 1024v128h-736v-128h736zm-960-1152q26 0 45 19t19 45v256q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h256zm640 512q26 0 45 19t19 45v256q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h256zm320 128v128h-224v-128h224zm0-512v128h-864v-128h864z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=sliders.js.map