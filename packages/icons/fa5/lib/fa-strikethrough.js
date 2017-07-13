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
        React.createElement("path", { d: "M500 272H12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h488c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-199.246 16c34.104 17.688 58.216 40.984 58.216 83.01 0 57.657-45.969 87.221-104.86 87.221-43.044 0-101.711-17.734-101.711-60.762V388c0-6.627-5.373-12-12-12h-10.72c-6.627 0-12 5.373-12 12v15.77c0 60.082 76.565 87.291 136.431 87.291 78.593 0 140.211-46.632 140.211-123.832 0-35.712-11.87-60.522-30.603-79.229h-62.964zm-137.387-64h74.348c-43.357-17.896-75.865-37.601-75.865-84.203 0-52.844 43.64-79.03 96.041-79.03 32.008 0 90.37 12.598 90.37 44.38V116c0 6.627 5.373 12 12 12h10.721c6.627 0 12-5.373 12-12V96.327c0-44.421-64.45-68.391-125.091-68.391-72.526 0-131.392 41.225-131.392 115.011 0 38.214 14.813 63.053 36.868 81.053z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-strikethrough.js.map