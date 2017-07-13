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
        React.createElement("path", { d: "M391.7 329.7L356 365.4 246.6 256 356 146.6l35.7 35.7c20.7 20.7 56.3 6 56.3-23.3V65c0-18.2-14.8-33-33-33h-94c-29.3 0-44.1 35.5-23.3 56.3l35.7 35.7L224 233.4 114.6 124l35.7-35.7C171 67.6 156.3 32 127 32H33C14.8 32 0 46.8 0 65v94c0 29.3 35.5 44.1 56.3 23.3L92 146.6 201.4 256 92 365.4l-35.7-35.7C35.6 309 0 323.7 0 353v94c0 18.2 14.8 33 33 33h94c29.3 0 44.1-35.5 23.3-56.3L114.6 388 224 278.6 333.4 388l-35.7 35.7c-20.7 20.7-6 56.3 23.3 56.3h94c18.2 0 33-14.8 33-33v-94c0-29.3-35.6-44.1-56.3-23.3zM321 60.9h94c2.3 0 4.1 1.9 4.1 4.1v94c0 3.7-4.4 5.5-7 2.9l-94-94c-2.6-2.6-.8-7 2.9-7zm-285.1 101c-2.6 2.6-7 .8-7-2.9V65c0-2.3 1.9-4.1 4.1-4.1h94c3.7 0 5.5 4.4 2.9 7l-94 94zM127 451.1H33c-2.3 0-4.1-1.9-4.1-4.1v-94c0-3.7 4.4-5.5 7-2.9l94 94c2.6 2.6.8 7-2.9 7zm288 0h-94c-3.7 0-5.5-4.4-2.9-7l94-94c2.6-2.6 7-.8 7 2.9v94c.1 2.3-1.8 4.1-4.1 4.1z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-expand-arrows-alt.js.map