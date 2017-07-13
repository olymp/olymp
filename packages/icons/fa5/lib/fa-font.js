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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }),
        React.createElement("path", { d: "M232.594 32h-17.187a11.998 11.998 0 0 0-11.239 7.796L51.473 448H28c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h88c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12H87.913l44.651-120.46h182.253L360.063 448H332c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h88c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12h-23.473L243.833 39.796A12 12 0 0 0 232.594 32zm-87.958 263.34l75.696-201.241c1.5-3.857 2.714-7.827 3.668-11.427.95 3.589 2.159 7.544 3.651 11.382l75.098 201.286H144.636z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-font.js.map