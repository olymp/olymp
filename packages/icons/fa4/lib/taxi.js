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
        React.createElement("path", { d: "M1696 896q93 0 158.5 65.5t65.5 158.5v384q0 14-9 23t-23 9h-96v64q0 80-56 136t-136 56-136-56-56-136v-64h-1024v64q0 80-56 136t-136 56-136-56-56-136v-64h-96q-14 0-23-9t-9-23v-384q0-93 65.5-158.5t158.5-65.5h28l105-419q23-94 104-157.5t179-63.5h128v-224q0-14 9-23t23-9h448q14 0 23 9t9 23v224h128q98 0 179 63.5t104 157.5l105 419h28zm-1504 480q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47zm196-480h1016l-89-357q-2-8-14-17.5t-21-9.5h-768q-9 0-21 9.5t-14 17.5zm1212 480q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=taxi.js.map