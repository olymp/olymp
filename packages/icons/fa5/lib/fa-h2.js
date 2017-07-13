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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 608 512" }),
        React.createElement("path", { d: "M435.784 384.264H588c6.627 0 12 5.373 12 12V404c0 6.627-5.373 12-12 12H410.208c-6.177 0-11.337-4.687-11.945-10.834-.336-3.398-.523-7.038-.523-11.3 0-111.663 161.125-126.537 161.125-209.911 0-34.401-26.051-58.428-63.352-58.428-25.584 0-48.808 14.904-63.291 34.198-3.861 5.144-11.015 6.46-16.351 2.869l-7.143-4.808c-5.522-3.717-6.925-11.192-3.216-16.719C424.329 113.025 458.799 92 497.303 92c60.832 0 97.773 39.595 97.773 90.165 0 105.913-156.302 121.77-159.292 202.099zM236.121 126.075h29.354v114.214H86.534V126.075h29.354c6.627 0 12-5.373 12-12V108c0-6.627-5.373-12-12-12H21.711c-6.627 0-12 5.373-12 12v6.075c0 6.627 5.373 12 12 12h29.354v259.85H21.711c-6.627 0-12 5.373-12 12V404c0 6.627 5.373 12 12 12h94.177c6.627 0 12-5.373 12-12v-6.075c0-6.627-5.373-12-12-12H86.534V271.262h178.941v114.663h-29.354c-6.627 0-12 5.373-12 12V404c0 6.627 5.373 12 12 12h94.176c6.627 0 12-5.373 12-12v-6.075c0-6.627-5.373-12-12-12h-29.354v-259.85h29.354c6.627 0 12-5.373 12-12V108c0-6.627-5.373-12-12-12h-94.176c-6.627 0-12 5.373-12 12v6.075c0 6.627 5.373 12 12 12z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-h2.js.map