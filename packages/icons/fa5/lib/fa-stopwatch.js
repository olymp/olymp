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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }),
        React.createElement("path", { d: "M393.3 141.3l17.5-17.5c4.7-4.7 4.7-12.3 0-17l-5.7-5.7c-4.7-4.7-12.3-4.7-17 0l-17.5 17.5c-35.8-31-81.5-50.9-131.7-54.2V32h25c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12h-80c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h23v32.6C91.2 73.3 0 170 0 288c0 123.7 100.3 224 224 224s224-100.3 224-224c0-56.1-20.6-107.4-54.7-146.7zM224 480c-106.1 0-192-85.9-192-192S117.9 96 224 96s192 85.9 192 192-85.9 192-192 192zm4-128h-8c-6.6 0-12-5.4-12-12V172c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v168c0 6.6-5.4 12-12 12z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-stopwatch.js.map