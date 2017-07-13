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
        React.createElement("path", { d: "M0 116V44c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v72c0 6.627-5.373 12-12 12h-8.48c-6.627 0-12-5.373-12-12V64H240.556v256H284c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H164c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h43.444V64H32.48v52c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12zm445.123 309.87l-48.001-39.984c-4.77-3.973-13.122-1.396-13.122 6.143V416H64v-23.998c0-6.841-7.971-10.434-13.122-6.143L2.877 425.843c-3.833 3.193-3.838 9.089 0 12.287l48.001 39.984C55.648 482.087 64 479.51 64 471.971V448h320v23.998c0 6.841 7.971 10.434 13.122 6.143l48.001-39.985c3.834-3.192 3.838-9.088 0-12.286z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-text-width.js.map