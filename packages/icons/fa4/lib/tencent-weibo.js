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
        React.createElement("path", { d: "M1098 572q0 80-57 136.5t-136 56.5q-60 0-111-35-62 67-115 146-247 371-202 859 1 22-12.5 38.5t-34.5 18.5h-5q-20 0-35-13.5t-17-33.5q-14-126-3.5-247.5t29.5-217 54-186 69-155.5 74-125q61-90 132-165-16-35-16-77 0-80 56.5-136.5t136.5-56.5 136.5 56.5 56.5 136.5zm381 11q0 158-78 292t-212.5 212-292.5 78q-64 0-131-14-21-5-32.5-23.5t-6.5-39.5q5-20 23-31.5t39-7.5q51 13 108 13 97 0 186-38t153-102 102-153 38-186-38-186-102-153-153-102-186-38-186 38-153 102-102 153-38 186q0 114 52 218 10 20 3.5 40t-25.5 30-39.5 3-30.5-26q-64-123-64-265 0-119 46.5-227t124.5-186 186-124 226-46q158 0 292.5 78t212.5 212.5 78 292.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=tencent-weibo.js.map