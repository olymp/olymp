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
        React.createElement("path", { d: "M469.9 1.7l-288 96C168.8 102 160 114.2 160 128v272.3c-17-10.1-39.4-16.3-64-16.3-53 0-96 28.6-96 64 0 35.3 43 64 96 64s96-28.7 96-64V225.7l288-96v206.6c-17-10.1-39.4-16.3-64-16.3-53 0-96 28.6-96 64 0 35.3 43 64 96 64s96-28.7 96-64V32c0-21.9-21.5-37.2-42.1-30.3zM96 484c-37 0-68-18.3-68-36 0-23 42.2-36 68-36 37 0 68 18.3 68 36 0 23-42.2 36-68 36zm96-292v-64l288-96v64l-288 96zm224 228c-37 0-68-18.3-68-36 0-23 42.2-36 68-36 37 0 68 18.3 68 36 0 23-42.2 36-68 36z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-music.js.map