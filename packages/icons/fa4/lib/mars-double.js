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
        React.createElement("path", { d: "M1472 416q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q76 95 107.5 214t9.5 247q-31 182-166 312t-318 156q-210 29-384.5-80t-241.5-300q-117-6-221-57.5t-177.5-133-113.5-192.5-32-230q9-135 78-252t182-191.5 248-89.5q118-14 227.5 19t198.5 103l255-254h-134q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q59 74 93 169 182 9 328 124l255-254h-134q-14 0-23-9t-9-23v-64zm-512 416q0-20-4-58-162 25-271 150t-109 292q0 20 4 58 162-25 271-150t109-292zm-896 0q0 168 111 294t276 149q-3-29-3-59 0-210 135-369.5t338-196.5q-53-120-163.5-193t-245.5-73q-185 0-316.5 131.5t-131.5 316.5zm960 832q185 0 316.5-131.5t131.5-316.5q0-168-111-294t-276-149q3 29 3 59 0 210-135 369.5t-338 196.5q53 120 163.5 193t245.5 73z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=mars-double.js.map