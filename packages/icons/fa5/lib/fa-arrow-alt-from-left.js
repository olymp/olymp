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
        React.createElement("path", { d: "M0 436V76c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v360c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zm96-218.9v77.7c0 8.8 7.2 16 16 16h144v93.9c0 7.1 8.6 10.7 13.6 5.7l141.6-143.1c6.3-6.3 6.3-16.4 0-22.7l-141.6-143c-5-5-13.6-1.5-13.6 5.7v93.9H112c-8.8-.1-16 7.1-16 15.9m-32 0c0-26.5 21.5-48 48-48h112v-61.9c0-35.6 43.1-53.4 68.2-28.3L433.9 222c18.8 18.8 18.8 49.2 0 68L292.2 433.1c-25.2 25.2-68.2 7.2-68.2-28.3v-61.9H112c-26.5 0-48-21.5-48-48v-77.8z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-arrow-alt-from-left.js.map