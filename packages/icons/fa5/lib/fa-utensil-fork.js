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
        React.createElement("path", { d: "M458.5 107.1c.4-27.4-27.3-54-53.6-53.6.4-34.4-43.8-68.7-75.3-46.5-8.8 6.1-80.1 55.7-105.2 80.7-42.1 42.1-51.5 97.7-32 145.8L13 395c-16.8 15.1-17.5 41.2-1.5 57.2l48.3 48.3c16.2 16.2 42.3 15 57.2-1.5l161.4-179.2c49 19.8 104.3 9.4 145.8-32 25.1-25.1 74.5-96.4 80.6-105.2 22-31.3-10.2-76-46.3-75.5zm20.2 57s-53.2 77-77.2 101c-38.1 38.1-89.2 41.9-130.4 14.8l-178 197.6c-2.8 3.2-7.7 3.3-10.7.3l-48.3-48.3c-3-3-2.9-7.9.3-10.7l197.6-178c-27.1-41.3-23.2-92.4 14.8-130.4 23.9-23.9 101-77.2 101-77.2 9.2-6.7 30.6 15 23.6 24l-98.6 98.6c-8.5 10 13.3 32.2 23.6 24l105-93.1c9.1-6.5 30.3 14.7 23.8 23.8l-93.1 105c-8.2 10.3 14 32.1 24 23.6l98.6-98.6c9.1-7 30.7 14.4 24 23.6z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-utensil-fork.js.map