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
        React.createElement("path", { d: "M1055 580q0 66-46.5 112.5t-112.5 46.5-112.5-46.5-46.5-112.5 46.5-112.5 112.5-46.5 112.5 46.5 46.5 112.5zm214 363q-10-20-28-32t-47.5-9.5-60.5 27.5q-10 8-29 20t-81 32-127 20-124-18-86-36l-27-18q-31-25-60.5-27.5t-47.5 9.5-28 32q-22 45-2 74.5t87 73.5q83 53 226 67l-51 52q-142 142-191 190-22 22-22 52.5t22 52.5l9 9q22 22 52.5 22t52.5-22l191-191q114 115 191 191 22 22 52.5 22t52.5-22l9-9q22-22 22-52.5t-22-52.5l-191-190-52-52q141-14 225-67 67-44 87-73.5t-2-74.5zm-49-363q0-134-95-229t-229-95-229 95-95 229 95 229 229 95 229-95 95-229zm444-164v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=odnoklassniki-square.js.map