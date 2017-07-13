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
        React.createElement("path", { d: "M1335 832q0 35-25 60.5t-61 25.5h-702q-36 0-61-25.5t-25-60.5 25-60.5 61-25.5h702q36 0 61 25.5t25 60.5zm214 0q0-86-23-170h-982q-36 0-61-25t-25-60q0-36 25-61t61-25h908q-88-143-235-227t-320-84q-177 0-327.5 87.5t-238 237.5-87.5 327q0 86 23 170h982q36 0 61 25t25 60q0 36-25 61t-61 25h-908q88 143 235.5 227t320.5 84q132 0 253-51.5t208-139 139-208 52-253.5zm371-255q0 35-25 60t-61 25h-131q17 85 17 170 0 167-65.5 319.5t-175.5 263-262.5 176-319.5 65.5q-246 0-448.5-133t-301.5-350h-189q-36 0-61-25t-25-61q0-35 25-60t61-25h132q-17-85-17-170 0-167 65.5-319.5t175.5-263 262.5-176 320.5-65.5q245 0 447.5 133t301.5 350h188q36 0 61 25t25 61z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=ioxhost.js.map