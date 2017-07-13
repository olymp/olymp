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
        React.createElement("path", { d: "M1325 1024h-109q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h109q-32-108-112.5-188.5t-188.5-112.5v109q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-109q-108 32-188.5 112.5t-112.5 188.5h109q26 0 45 19t19 45v128q0 26-19 45t-45 19h-109q32 108 112.5 188.5t188.5 112.5v-109q0-26 19-45t45-19h128q26 0 45 19t19 45v109q108-32 188.5-112.5t112.5-188.5zm339-192v128q0 26-19 45t-45 19h-143q-37 161-154.5 278.5t-278.5 154.5v143q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-143q-161-37-278.5-154.5t-154.5-278.5h-143q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h143q37-161 154.5-278.5t278.5-154.5v-143q0-26 19-45t45-19h128q26 0 45 19t19 45v143q161 37 278.5 154.5t154.5 278.5h143q26 0 45 19t19 45z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=crosshairs.js.map