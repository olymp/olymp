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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 512" }),
        React.createElement("path", { d: "M102.791 64h45.215L73.143 448H23.762a12 12 0 0 0-11.764 9.632l-1.61 8C8.892 473.062 14.573 480 22.151 480h128.817a12 12 0 0 0 11.764-9.632l1.61-8c1.495-7.43-4.186-14.368-11.764-14.368h-45.215l74.864-384h50.011a12 12 0 0 0 11.764-9.632l1.61-8C247.108 38.938 241.427 32 233.849 32H104.401a12 12 0 0 0-11.764 9.632l-1.61 8C89.532 57.062 95.213 64 102.791 64z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-italic.js.map