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
        React.createElement("path", { d: "M571 589q-10-25-34-35t-49 0q-108 44-191 127t-127 191q-10 25 0 49t35 34q13 5 24 5 42 0 60-40 34-84 98.5-148.5t148.5-98.5q25-11 35-35t0-49zm942-356l46 46-244 243 68 68q19 19 19 45.5t-19 45.5l-64 64q89 161 89 343 0 143-55.5 273.5t-150 225-225 150-273.5 55.5-273.5-55.5-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5q182 0 343 89l64-64q19-19 45.5-19t45.5 19l68 68zm8-56q-10 10-22 10-13 0-23-10l-91-90q-9-10-9-23t9-23q10-9 23-9t23 9l90 91q10 9 10 22.5t-10 22.5zm230 230q-11 9-23 9t-23-9l-90-91q-10-9-10-22.5t10-22.5q9-10 22.5-10t22.5 10l91 90q9 10 9 23t-9 23zm41-183q0 14-9 23t-23 9h-96q-14 0-23-9t-9-23 9-23 23-9h96q14 0 23 9t9 23zm-192-192v96q0 14-9 23t-23 9-23-9-9-23v-96q0-14 9-23t23-9 23 9 9 23zm151 55l-91 90q-10 10-22 10-13 0-23-10-10-9-10-22.5t10-22.5l90-91q10-9 23-9t23 9q9 10 9 23t-9 23z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=bomb.js.map