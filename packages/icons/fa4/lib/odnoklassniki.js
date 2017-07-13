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
        React.createElement("path", { d: "M896 907q-188 0-321-133t-133-320q0-188 133-321t321-133 321 133 133 321q0 187-133 320t-321 133zm0-677q-92 0-157.5 65.5t-65.5 158.5q0 92 65.5 157.5t157.5 65.5 157.5-65.5 65.5-157.5q0-93-65.5-158.5t-157.5-65.5zm523 732q13 27 15 49.5t-4.5 40.5-26.5 38.5-42.5 37-61.5 41.5q-115 73-315 94l73 72 267 267q30 31 30 74t-30 73l-12 13q-31 30-74 30t-74-30q-67-68-267-268l-267 268q-31 30-74 30t-73-30l-12-13q-31-30-31-73t31-74l267-267 72-72q-203-21-317-94-39-25-61.5-41.5t-42.5-37-26.5-38.5-4.5-40.5 15-49.5q10-20 28-35t42-22 56 2 65 35q5 4 15 11t43 24.5 69 30.5 92 24 113 11q91 0 174-25.5t120-50.5l38-25q33-26 65-35t56-2 42 22 28 35z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=odnoklassniki.js.map