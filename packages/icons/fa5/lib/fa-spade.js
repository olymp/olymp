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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }),
        React.createElement("path", { d: "M471.4 200.3C456.1 186.4 327 57.7 278.6 9.3c-12.5-12.5-32.7-12.5-45.2 0-48.4 48.4-177.5 177-192.8 191C15.1 223.5 0 256.4 0 292c0 68.4 55.6 124 124 124 35.5 0 52-8 76-32 0 24-9.7 27.6-30.2 53.4-23.9 30.1-2.4 74.6 36 74.6h100.3c38.5 0 60-44.5 36-74.6-19-24.1-30.1-29.4-30.1-53.4 24 24 48.9 32 76 32 68.4 0 124-55.6 124-124 0-35.7-15.2-68.5-40.6-91.7zM385.5 384c-41-.4-54.6-11.3-87.2-45.2-3.7-3.9-10.3-1.2-10.3 4.2v25c0 40.6 0 52.6 29.1 89.3 7.3 9.2.7 22.7-11 22.7H205.8c-11.7 0-18.3-13.5-11-22.7C224 420.6 224 408.6 224 368v-25c0-5.4-6.6-8.1-10.3-4.2-32.3 33.7-45.9 44.7-87.1 45.2-51.8.5-95-41-94.5-92.8.2-26 11.4-50.1 30.1-67.2C81.3 206.5 256 32 256 32s174.7 174.5 193.9 192c19 17.3 29.9 41.6 30.1 67.3.4 51.8-42.7 93.2-94.5 92.7z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-spade.js.map