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
        React.createElement("path", { d: "M500 63h-8c-6.6 0-12 5.4-12 12v157.7c-.9-1-1.9-2-3-2.9L276.5 70.4C255.9 53.3 224 67.6 224 95v117.8L52.5 70.4C31.9 53.3 0 67.6 0 95v320c0 27.4 31.9 41.8 52.5 24.6L224 296.2V415c0 27.4 31.9 41.8 52.5 24.6L477 279c1.1-.9 2.1-1.9 3-2.9V435c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V75c0-6.6-5.4-12-12-12zM219.5 254.4l-.2.1-.2.1L32 415V95l187.3 159.2.1.1.1.1zm231.5.5l-194.8 160-.1.1h-.1V95l.1.1.1.1L451 254v.9z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-fast-forward.js.map