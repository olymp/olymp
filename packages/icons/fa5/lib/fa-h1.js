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
        React.createElement("path", { d: "M224.121 114.075V108c0-6.627 5.373-12 12-12h94.176c6.627 0 12 5.373 12 12v6.075c0 6.627-5.373 12-12 12h-29.354v259.85h29.354c6.627 0 12 5.373 12 12V404c0 6.627-5.373 12-12 12h-94.176c-6.627 0-12-5.373-12-12v-6.075c0-6.627 5.373-12 12-12h29.354V271.262H86.534v114.663h29.354c6.627 0 12 5.373 12 12V404c0 6.627-5.373 12-12 12H21.711c-6.627 0-12-5.373-12-12v-6.075c0-6.627 5.373-12 12-12h29.354v-259.85H21.711c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h94.177c6.627 0 12 5.373 12 12v6.075c0 6.627-5.373 12-12 12H86.534v114.214h178.941V126.075h-29.354c-6.627 0-12-5.373-12-12zM509.59 96h-14.648a12 12 0 0 0-8.458 3.488l-61.51 61.123c-4.674 4.645-4.729 12.19-.122 16.901l5.776 5.907c4.67 4.776 12.342 4.819 17.065.096l26.537-26.537c6.537-6.304 10.589-11.199 13-14.505-.108 3.229-.21 7.435-.21 11.715v229.939H428c-6.627 0-12 5.373-12 12V404c0 6.627 5.373 12 12 12h151.262c6.627 0 12-5.373 12-12v-7.873c0-6.627-5.373-12-12-12H521.59V108c0-6.627-5.373-12-12-12z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-h1.js.map