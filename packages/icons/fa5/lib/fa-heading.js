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
        React.createElement("path", { d: "M304.51 64.201h47.851v175.07H95.639V64.201h47.851c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H13.698c-6.627 0-12 5.373-12 12v8.201c0 6.627 5.373 12 12 12h47.851v383.603H13.698c-6.627 0-12 5.373-12 12v8.2c0 6.627 5.373 12 12 12H143.49c6.627 0 12-5.373 12-12v-8.2c0-6.627-5.373-12-12-12H95.639V271.473h256.722v176.331H304.51c-6.627 0-12 5.373-12 12v8.2c0 6.627 5.373 12 12 12h129.792c6.627 0 12-5.373 12-12v-8.2c0-6.627-5.373-12-12-12h-47.851V64.201h47.851c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H304.51c-6.627 0-12 5.373-12 12v8.201c0 6.628 5.373 12 12 12z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-heading.js.map