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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 511.9 512" }),
        React.createElement("path", { d: "M501.8 19.1c-1.1-4.4-4.5-7.8-8.8-8.8C453.7.7 442.5 0 408 0c-68.6 0-128.1 44.9-173.8 96H106.7c-11.4 0-21.9 6-27.6 15.9l-74.7 128C-8 261.2 7.4 288 32 288h82.7c-8.6 19.1-14.3 33.5-18.6 44.6-1.7 4.4-.7 9.5 2.7 12.8l67.7 67.7c3.4 3.4 8.4 4.4 12.8 2.7 11.2-4.3 25.5-10 44.6-18.6V480c0 24.7 26.8 40.1 48.1 27.6l128-74.7c9.8-5.7 15.9-16.3 15.9-27.6V277.8c51.1-45.7 96-105.2 96-173.8.1-34.5-.6-45.8-10.1-84.9zM32 256l74.7-128h101.1c-32.5 42.6-58.6 88.3-78.1 128H32zm224 224v-97.7c39.7-19.5 85.4-45.5 128-78.1v101.1L256 480zm-76.1-98.7l-49.1-49.1C177.6 215.9 283.8 32 408.1 32c24.7 0 37.3 0 65.5 6.5C480 66.7 480 79.2 480 104c0 124.3-184.1 230.5-300.1 277.3zM368 88c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56zm0 80c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-rocket.js.map