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
        React.createElement("path", { d: "M447.7 364l.3 104c0 6.6-5.4 12-12 12l-104-.3c-6.6 0-12-5.4-12-12v-10c0-6.6 5.4-12 12-12l58 .3.7-.7L224 278.6 57.3 445.3l.7.7 58-.3c6.6 0 12 5.4 12 12v10c0 6.6-5.4 12-12 12L12 480c-6.6 0-12-5.4-12-12l.3-104c0-6.6 5.4-12 12-12h10c6.6 0 12 5.4 12 12l-.3 58 .7.7L201.4 256 34.7 89.3l-.7.7.3 58c0 6.6-5.4 12-12 12h-10c-6.6 0-12-5.4-12-12L0 44c0-6.6 5.4-12 12-12l104 .3c6.6 0 12 5.4 12 12v10c0 6.6-5.4 12-12 12L58 66l-.7.7L224 233.4 390.7 66.7l-.7-.7-58 .3c-6.6 0-12-5.4-12-12v-10c0-6.6 5.4-12 12-12l104-.3c6.6 0 12 5.4 12 12l-.3 104c0 6.6-5.4 12-12 12h-10c-6.6 0-12-5.4-12-12l.3-58-.7-.7L246.6 256l166.7 166.7.7-.7-.3-58c0-6.6 5.4-12 12-12h10c6.6 0 12 5.4 12 12z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-expand-arrows.js.map