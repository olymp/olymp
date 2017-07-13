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
        React.createElement("path", { d: "M0 116V44c0-6.627 5.373-12 12-12h264c6.627 0 12 5.373 12 12v72c0 6.627-5.373 12-12 12h-8.48c-6.627 0-12-5.373-12-12V64h-94.965v384H204c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H84c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h43.444V64H32.48v52c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12zm393.87-81.123l-39.984 48.001C349.914 87.648 352.49 96 360.03 96H384v320h-23.998c-6.841 0-10.434 7.971-6.143 13.122l39.985 48.001c3.193 3.833 9.089 3.838 12.287 0l39.984-48.001c3.973-4.77 1.396-13.122-6.143-13.122H416V96h23.998c6.841 0 10.434-7.971 6.143-13.122l-39.985-48.001c-3.192-3.834-9.088-3.838-12.286 0z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-text-height.js.map