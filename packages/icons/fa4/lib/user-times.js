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
        React.createElement("path", { d: "M576 896q-159 0-271.5-112.5t-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5-112.5 271.5-271.5 112.5zm1077 320l249 249q9 9 9 23 0 13-9 22l-136 136q-9 9-22 9-14 0-23-9l-249-249-249 249q-9 9-23 9-13 0-22-9l-136-136q-9-9-9-22 0-14 9-23l249-249-249-249q-9-9-9-23 0-13 9-22l136-136q9-9 22-9 14 0 23 9l249 249 249-249q9-9 23-9 13 0 22 9l136 136q9 9 9 22 0 14-9 23zm-498 0l-181 181q-37 37-37 91 0 53 37 90l83 83q-21 3-44 3h-874q-121 0-194-69t-73-190q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q19 0 39 17 154 122 319 122t319-122q20-17 39-17 28 0 57 6-28 27-41 50t-13 56q0 54 37 91z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=user-times.js.map