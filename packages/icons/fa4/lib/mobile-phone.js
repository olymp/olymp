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
        React.createElement("path", { d: "M976 1408q0-33-23.5-56.5t-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5 56.5-23.5 23.5-56.5zm208-160v-704q0-13-9.5-22.5t-22.5-9.5h-512q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h512q13 0 22.5-9.5t9.5-22.5zm-192-848q0-16-16-16h-160q-16 0-16 16t16 16h160q16 0 16-16zm288-16v1024q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-1024q0-52 38-90t90-38h512q52 0 90 38t38 90z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=mobile-phone.js.map