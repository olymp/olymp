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
        React.createElement("path", { d: "M1095 1167q16 16 0 31-62 62-199 62t-199-62q-16-15 0-31 6-6 15-6t15 6q48 49 169 49 120 0 169-49 6-6 15-6t15 6zm-307-181q0 37-26 63t-63 26-63.5-26-26.5-63q0-38 26.5-64t63.5-26 63 26.5 26 63.5zm395 0q0 37-26.5 63t-63.5 26-63-26-26-63 26-63.5 63-26.5 63.5 26 26.5 64zm251-120q0-49-35-84t-85-35-86 36q-130-90-311-96l63-283 200 45q0 37 26 63t63 26 63.5-26.5 26.5-63.5-26.5-63.5-63.5-26.5q-54 0-80 50l-221-49q-19-5-25 16l-69 312q-180 7-309 97-35-37-87-37-50 0-85 35t-35 84q0 35 18.5 64t49.5 44q-6 27-6 56 0 142 140 243t337 101q198 0 338-101t140-243q0-32-7-57 30-15 48-43.5t18-63.5zm358 30q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=reddit.js.map