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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" }),
        React.createElement("path", { d: "M260.3 441.7l5.3-116c.1-3.2 2.8-5.7 6-5.7h32.9c3.2 0 5.8 2.5 6 5.7l5.3 116c.2 3.4-2.6 6.3-6 6.3h-43.4c-3.5 0-6.3-2.9-6.1-6.3zM272.5 288h31c2.9 0 5.1-2.4 5-5.2l-3.9-86c-.1-2.7-2.3-4.8-5-4.8h-23.2c-2.7 0-4.9 2.1-5 4.8l-3.9 86c-.1 2.8 2.2 5.2 5 5.2zm4.4-120h22.2c2.3 0 4.1-1.9 4-4.2l-2.2-48c-.1-2.1-1.9-3.8-4-3.8h-17.8c-2.1 0-3.9 1.7-4 3.8l-2.2 48c-.1 2.3 1.7 4.2 4 4.2zm2.3-72h17.7c1.7 0 3.1-1.4 3-3.1l-1.2-26c-.1-1.6-1.4-2.9-3-2.9h-15.3c-1.6 0-2.9 1.3-3 2.9l-1.2 26c-.1 1.7 1.2 3.1 3 3.1zM6 448h42.8c2.6 0 4.9-1.7 5.7-4.2L172 67.9c.6-1.9-.8-3.9-2.9-3.9h-17.9c-1.2 0-2.3.8-2.8 1.9L.4 439.8c-1.5 3.9 1.4 8.2 5.6 8.2zm521.2 0H570c4.2 0 7.1-4.3 5.6-8.2l-148-373.9c-.5-1.1-1.6-1.9-2.8-1.9h-17.9c-2 0-3.5 2-2.9 3.9l117.5 375.9c.8 2.5 3.1 4.2 5.7 4.2z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-road.js.map