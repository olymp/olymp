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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512" }),
        React.createElement("path", { d: "M372 480H12c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12zm-218.9-96h77.7c8.8 0 16-7.2 16-16V224h93.9c7.1 0 10.7-8.6 5.7-13.6L203.3 66.8c-6.3-6.3-16.4-6.3-22.7 0l-143 143.6c-5 5-1.5 13.6 5.7 13.6h93.9v144c-.1 8.8 7.1 16 15.9 16m0 32c-26.5 0-48-21.5-48-48V256H43.3c-35.6 0-53.4-43.1-28.3-68.2L158 44.2c18.8-18.8 49.2-18.8 68 0l143.1 143.5c25.2 25.2 7.2 68.2-28.3 68.2h-61.9v112c0 26.5-21.5 48-48 48h-77.8v.1z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-arrow-alt-from-bottom.js.map