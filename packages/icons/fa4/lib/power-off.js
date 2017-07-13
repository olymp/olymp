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
        React.createElement("path", { d: "M1664 896q0 156-61 298t-164 245-245 164-298 61-298-61-245-164-164-245-61-298q0-182 80.5-343t226.5-270q43-32 95.5-25t83.5 50q32 42 24.5 94.5t-49.5 84.5q-98 74-151.5 181t-53.5 228q0 104 40.5 198.5t109.5 163.5 163.5 109.5 198.5 40.5 198.5-40.5 163.5-109.5 109.5-163.5 40.5-198.5q0-121-53.5-228t-151.5-181q-42-32-49.5-84.5t24.5-94.5q31-43 84-50t95 25q146 109 226.5 270t80.5 343zm-640-768v640q0 52-38 90t-90 38-90-38-38-90v-640q0-52 38-90t90-38 90 38 38 90z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=power-off.js.map