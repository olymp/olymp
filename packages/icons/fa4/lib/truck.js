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
        React.createElement("path", { d: "M640 1408q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zm-384-512h384v-256h-158q-13 0-22 9l-195 195q-9 9-9 22v30zm1280 512q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zm256-1088v1024q0 15-4 26.5t-13.5 18.5-16.5 11.5-23.5 6-22.5 2-25.5 0-22.5-.5q0 106-75 181t-181 75-181-75-75-181h-384q0 106-75 181t-181 75-181-75-75-181h-64q-3 0-22.5.5t-25.5 0-22.5-2-23.5-6-16.5-11.5-13.5-18.5-4-26.5q0-26 19-45t45-19v-320q0-8-.5-35t0-38 2.5-34.5 6.5-37 14-30.5 22.5-30l198-198q19-19 50.5-32t58.5-13h160v-192q0-26 19-45t45-19h1024q26 0 45 19t19 45z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=truck.js.map