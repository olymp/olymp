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
        React.createElement("path", { d: "M246.2 188.5l-9.8 15.2c-2 3-5.7 3.7-8.6 1.5-40.7-31.2-113-14.3-113 48.5 0 64.8 70.1 85.3 111.6 47.6 2.7-2.4 6.8-1.9 9 1l10.7 14.6c1.8 2.4 1.5 5.8-.6 7.9-49.2 50-165.5 29.4-165.5-70.6 0-96.3 118.3-117.1 165.2-73.5 2.2 2.1 2.6 5.4 1 7.8zM464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm16 336c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v288zm-49-211.5l-9.8 15.2c-2 3-5.7 3.7-8.6 1.5-40.7-31.2-113-14.3-113 48.5 0 64.8 70.1 85.3 111.6 47.6 2.7-2.4 6.8-1.9 9 1l10.7 14.6c1.8 2.4 1.5 5.8-.6 7.9-49.1 50.1-165.4 29.5-165.4-70.5 0-96.3 118.3-117.1 165.2-73.5 2.1 2 2.5 5.3.9 7.7z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-closed-captioning.js.map