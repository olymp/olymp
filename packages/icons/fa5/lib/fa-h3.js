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
        React.createElement("path", { d: "M600 319.542C600 375.874 553.71 420 494.617 420c-36.736 0-72.278-16.619-94.513-36.905-4.653-4.245-5.209-11.373-1.298-16.31l6.327-7.984c4.283-5.405 12.245-6.116 17.377-1.509 18.784 16.867 45.438 29.182 71.66 29.182 37.168 0 70.065-27.476 70.065-66.037 0-41.992-35.653-65.142-77.226-65.142h-14.8a12 12 0 0 1-11.085-7.404l-2.699-6.509a12.001 12.001 0 0 1 1.961-12.391l74.788-87.534c5.276-6.109 10.424-11.405 13.58-14.552-4.27.384-11.339.832-21.016.832H419.585c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h163.939c6.627 0 12 5.373 12 12v6.846a12 12 0 0 1-2.937 7.865L503.659 225.19C555.885 229.715 600 261.409 600 319.542zM236.121 126.075h29.354v114.214H86.534V126.075h29.354c6.627 0 12-5.373 12-12V108c0-6.627-5.373-12-12-12H21.711c-6.627 0-12 5.373-12 12v6.075c0 6.627 5.373 12 12 12h29.354v259.85H21.711c-6.627 0-12 5.373-12 12V404c0 6.627 5.373 12 12 12h94.177c6.627 0 12-5.373 12-12v-6.075c0-6.627-5.373-12-12-12H86.534V271.262h178.941v114.663h-29.354c-6.627 0-12 5.373-12 12V404c0 6.627 5.373 12 12 12h94.176c6.627 0 12-5.373 12-12v-6.075c0-6.627-5.373-12-12-12h-29.354v-259.85h29.354c6.627 0 12-5.373 12-12V108c0-6.627-5.373-12-12-12h-94.176c-6.627 0-12 5.373-12 12v6.075c0 6.627 5.373 12 12 12z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-h3.js.map