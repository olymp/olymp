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
    return (React.createElement("svg", __assign({ width: size || width, height: size || height, viewBox: "0 0 1792 1792" }, rest),
        React.createElement("path", { d: "M800 864v-448q0-14-9-23t-23-9-23 9-9 23v448q0 14 9 23t23 9 23-9 9-23zm672 352q0 26-19 45t-45 19h-429l-51 483q-2 12-10.5 20.5t-20.5 8.5h-1q-27 0-32-27l-76-485h-404q-26 0-45-19t-19-45q0-123 78.5-221.5t177.5-98.5v-512q-52 0-90-38t-38-90 38-90 90-38h640q52 0 90 38t38 90-38 90-90 38v512q99 0 177.5 98.5t78.5 221.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=thumb-tack.js.map