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
        React.createElement("path", { d: "M1062 150q-317 121-556 362.5t-358 560.5q-20-89-20-176 0-208 102.5-384.5t278.5-279 384-102.5q82 0 169 19zm269 119q93 65 164 155-389 113-674.5 400.5t-396.5 676.5q-93-72-155-162 112-386 395-671t667-399zm-733 1334q115-356 379.5-622t619.5-384q40 92 54 195-292 120-516 345t-343 518q-103-14-194-52zm1066 58q-193-50-367-115-135 84-290 107 109-205 274-370.5t369-275.5q-21 152-101 284 65 175 115 370z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=forumbee.js.map