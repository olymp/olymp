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
        React.createElement("path", { d: "M176 60.9l6.2 12.7 14 2-10.1 9.8 2.4 13.9-12.5-6.5-12.5 6.6 2.4-13.9-10.1-9.8 14-2 6.2-12.8m-5.1-25.7L159.2 59 133 62.8c-4.7.7-6.6 6.5-3.2 9.8l19 18.5-4.5 26.1c-.8 4.7 4.1 8.3 8.3 6.1L176 111l23.4 12.3c4.2 2.2 9.1-1.4 8.3-6.1L203.3 91l19-18.5c3.4-3.3 1.5-9.1-3.2-9.8l-26.2-3.8-11.7-23.8c-2.1-4.1-8.2-4.2-10.3.1zm97.7-16.6l-7.8 15.8-17.5 2.6c-3.1.5-4.4 4.3-2.1 6.5l12.6 12.3-3 17.4c-.5 3.1 2.8 5.5 5.6 4L272 69l15.6 8.2c2.8 1.5 6.1-.9 5.6-4l-3-17.4 12.6-12.3c2.3-2.2 1-6.1-2.1-6.5l-17.5-2.5-7.8-15.8c-1.4-3-5.4-3-6.8-.1zm-192 0l-7.8 15.8L51.3 37c-3.1.5-4.4 4.3-2.1 6.5l12.6 12.3-3 17.4c-.5 3.1 2.8 5.5 5.6 4L80 69l15.6 8.2c2.8 1.5 6.1-.9 5.6-4l-3-17.4 12.6-12.3c2.3-2.2 1-6.1-2.1-6.5l-17.5-2.5-7.8-15.8c-1.4-3-5.4-3-6.8-.1zm384 191.5l-7.8 15.8-17.5 2.5c-3.1.5-4.4 4.3-2.1 6.5l12.6 12.3-3 17.4c-.5 3.1 2.8 5.5 5.6 4l15.6-8.2 15.6 8.2c2.8 1.5 6.1-.9 5.6-4l-3-17.4 12.6-12.3c2.3-2.2 1-6.1-2.1-6.5l-17.5-2.5-7.8-15.8c-1.4-2.8-5.4-2.8-6.8 0zM76.1 502.6L9.4 435.9c-12.5-12.5-12.5-32.8 0-45.3L390.6 9.4c12.5-12.5 32.8-12.5 45.3 0l66.7 66.7c12.5 12.5 12.5 32.8 0 45.3L121.4 502.6c-12.5 12.5-32.8 12.5-45.3 0zm282-281.9L291.4 154 32 413.3 98.7 480l259.4-259.3zM480 98.7L413.3 32 314 131.3l66.7 66.7L480 98.7z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-magic.js.map