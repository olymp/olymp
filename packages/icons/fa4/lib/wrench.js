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
        React.createElement("path", { d: "M448 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm644-420l-682 682q-37 37-90 37-52 0-91-37l-106-108q-38-36-38-90 0-53 38-91l681-681q39 98 114.5 173.5t173.5 114.5zm634-435q0 39-23 106-47 134-164.5 217.5t-258.5 83.5q-185 0-316.5-131.5t-131.5-316.5 131.5-316.5 316.5-131.5q58 0 121.5 16.5t107.5 46.5q16 11 16 28t-16 28l-293 169v224l193 107q5-3 79-48.5t135.5-81 70.5-35.5q15 0 23.5 10t8.5 25z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=wrench.js.map