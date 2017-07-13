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
        React.createElement("path", { d: "M12 447h8c6.6 0 12-5.4 12-12V277.3c.9 1 1.9 2 3 2.9l200.5 159.4c20.6 17.2 52.5 2.8 52.5-24.6V297.2l171.5 142.4c20.6 17.2 52.5 2.8 52.5-24.6V95c0-27.4-31.9-41.8-52.5-24.6L288 213.9V95.1c0-27.4-31.9-41.8-52.5-24.6L35 231c-1.1.9-2.1 1.9-3 2.9V75c0-6.6-5.4-12-12-12h-8C5.4 63 0 68.4 0 75v360c0 6.6 5.4 12 12 12zm280.5-191.4l.2-.1.2-.1L480 95v320L292.7 255.8l-.1-.1-.1-.1zM61 255.2l194.8-160 .1-.1.1-.1v320l-.1-.1-.1-.1L61 256v-.8z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-fast-backward.js.map