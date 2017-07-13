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
        React.createElement("path", { d: "M1168 1216q0 33-23.5 56.5t-56.5 23.5-56.5-23.5-23.5-56.5 23.5-56.5 56.5-23.5 56.5 23.5 23.5 56.5zm256 0q0 33-23.5 56.5t-56.5 23.5-56.5-23.5-23.5-56.5 23.5-56.5 56.5-23.5 56.5 23.5 23.5 56.5zm112 160v-320q0-13-9.5-22.5t-22.5-9.5h-1216q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h1216q13 0 22.5-9.5t9.5-22.5zm-1230-480h1180l-157-482q-4-13-16-21.5t-26-8.5h-782q-14 0-26 8.5t-16 21.5zm1358 160v320q0 66-47 113t-113 47h-1216q-66 0-113-47t-47-113v-320q0-25 16-75l197-606q17-53 63-86t101-33h782q55 0 101 33t63 86l197 606q16 50 16 75z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=hdd-o.js.map