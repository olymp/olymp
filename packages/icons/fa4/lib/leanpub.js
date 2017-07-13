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
        React.createElement("path", { d: "M1765 392l155 1272q-131 0-257-57-200-91-393-91-226 0-374 148-148-148-374-148-193 0-393 91-128 57-252 57h-5l155-1272q224-127 482-127 233 0 387 106 154-106 387-106 258 0 482 127zm-495 987q129 0 232 28.5t260 93.5l-124-1021q-171-78-368-78-224 0-374 141-150-141-374-141-197 0-368 78l-124 1021q105-43 165.5-65t148.5-39.5 178-17.5q202 0 374 108 172-108 374-108zm40-34l-55-907q-211 4-359 155-152-155-374-155-176 0-336 66l-114 941q124-51 228.5-76t221.5-25q209 0 374 102 172-107 374-102z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=leanpub.js.map