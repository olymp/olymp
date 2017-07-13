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
        React.createElement("path", { d: "M20 8h10c6.627 0 12 5.373 12 12v110.625C85.196 57.047 165.239 7.715 256.793 8.001 393.18 8.428 504.213 120.009 504 256.396 503.786 393.181 392.834 504 256 504c-63.926 0-122.202-24.187-166.178-63.908-5.113-4.618-5.354-12.561-.482-17.433l7.069-7.069c4.503-4.503 11.749-4.714 16.482-.454C150.782 449.238 200.935 470 256 470c117.744 0 214-95.331 214-214 0-117.744-95.331-214-214-214-82.862 0-154.737 47.077-190.289 116H180c6.627 0 12 5.373 12 12v10c0 6.627-5.373 12-12 12H20c-6.627 0-12-5.373-12-12V20c0-6.627 5.373-12 12-12z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-undo.js.map