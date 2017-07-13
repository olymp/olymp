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
        React.createElement("path", { d: "M249.518 256L446.829 58.828a3.998 3.998 0 0 0 0-5.655c-12.497-12.497-32.758-12.497-45.255 0L224.056 230.556l-48.642-48.607C185.88 166.573 192 148.002 192 128c0-53.019-42.981-96-96-96S0 74.981 0 128s42.981 96 96 96c20.008 0 38.584-6.124 53.962-16.595L198.593 256l-48.631 48.595C134.584 294.124 116.008 288 96 288c-53.019 0-96 42.981-96 96s42.981 96 96 96 96-42.981 96-96c0-20.002-6.12-38.573-16.585-53.949l48.642-48.607 177.518 177.384c12.497 12.497 32.758 12.497 45.255 0a3.998 3.998 0 0 0 0-5.655L249.518 256zM96 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0 256c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm136-192a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-cut.js.map