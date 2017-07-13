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
        React.createElement("path", { d: "M500 416c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v340h468zM387.7 167.4l87.9 175.9c2 4-.9 8.7-5.4 8.7H102c-3.3 0-6-2.7-6-6v-88.3c0-1.1.3-2.2.9-3.1l91.2-152c2-3.3 6.6-3.9 9.4-1.2l118.3 118.3c2.3 2.3 6.1 2.3 8.5 0l53.9-53.9c2.8-2.8 7.7-2 9.5 1.6zM128 266.5V314c0 3.3 2.7 6 6 6h284.5c4.5 0 7.4-4.7 5.4-8.7L379 221.5c-1.8-3.7-6.7-4.4-9.6-1.6L324.3 265c-2.3 2.3-6.2 2.3-8.5 0l-112-112a5.96 5.96 0 0 0-9.4 1.2l-65.5 109.2c-.6 1-.9 2-.9 3.1z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-area-chart.js.map