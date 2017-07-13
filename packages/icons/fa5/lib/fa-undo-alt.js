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
        React.createElement("path", { d: "M54.627 9.387l50.095 50.101C146.632 27.177 199.156 7.96 256.178 8 392.817 8.096 504.251 119.827 504 256.467 503.748 393.219 392.811 504 256 504c-63.926 0-122.202-24.187-166.178-63.908-5.113-4.618-5.354-12.561-.482-17.433l7.079-7.079c4.499-4.499 11.744-4.722 16.472-.464C151.849 450.203 202.318 470 256 470c118.022 0 214-95.585 214-214 0-118.026-95.589-214-214-214-46.514 0-90.671 14.872-127.021 41.749l53.617 53.624c20.099 20.1 5.855 54.627-22.627 54.627H32c-17.673 0-32-14.327-32-32V32.015C0 3.54 34.564-10.676 54.627 9.387zM32 32v128h128L32 32" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-undo-alt.js.map