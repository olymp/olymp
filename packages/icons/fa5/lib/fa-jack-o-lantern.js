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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" }),
        React.createElement("path", { d: "M304 64.2c.1-10.7-.7-26.5 34.6-32.4 8.7-1.5 14.6-9.7 13.2-18.4C350.3 4.7 344.8 0 336 0c-37.9 0-64.5 25.7-64 64.2C68.5 68.7 0 160.6 0 288c0 130.7 72 224 288 224s288-93.3 288-224c0-127.4-68.4-219.3-272-223.8zM288 480c-148.9 0-256-42.1-256-192C32 137.9 139.3 96 288 96c148.9 0 256 42.1 256 192 0 150.1-107.3 192-256 192zm32-192h96c12.4 0 20.1-13.6 13.7-24.2l-48-80c-6.2-10.4-21.2-10.3-27.4 0l-48 80c-3 4.9-3 11.1-.2 16.1 2.8 5 8.1 8.1 13.9 8.1zm48-64.9l19.7 32.9h-39.5l19.8-32.9zm95.7 115.1c-10.7 37.3-43.3 62.2-79.7 76.6V390c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6v34.7c-20.2 4.7-41.9 7.3-64 7.3s-43.8-2.5-64-7.3V390c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6v24.8c-36.4-14.4-69-39.3-79.7-76.6-1.8-6.3 4.3-11.9 10.4-9.7 34.2 12.4 81.5 20.4 133.3 22.8V378c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6v-26c63.9 0 124.2-8.6 165.3-23.5 6.1-2.2 12.2 3.4 10.4 9.7zM160 288h96c12.4 0 20.1-13.6 13.7-24.2l-48-80c-6.2-10.4-21.2-10.3-27.4 0l-48 80c-6.4 10.6 1.3 24.2 13.7 24.2zm48-64.9l19.7 32.9h-39.5l19.8-32.9z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-jack-o-lantern.js.map