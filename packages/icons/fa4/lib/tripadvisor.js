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
        React.createElement("path", { d: "M395 997q0 39-27.5 66.5t-65.5 27.5q-39 0-66.5-27.5t-27.5-66.5q0-38 27.5-65.5t66.5-27.5q38 0 65.5 27.5t27.5 65.5zm1154-1q0 39-27.5 66.5t-66.5 27.5-66.5-27.5-27.5-66.5 27.5-66 66.5-27 66.5 27 27.5 66zm-1040 1q0-79-56.5-136t-136.5-57-136.5 56.5-56.5 136.5 56.5 136.5 136.5 56.5 136.5-56.5 56.5-136.5zm1153-1q0-80-56.5-136.5t-136.5-56.5q-79 0-136 56.5t-57 136.5 56.5 136.5 136.5 56.5 136.5-56.5 56.5-136.5zm-1068 1q0 116-81.5 197.5t-196.5 81.5q-116 0-197.5-82t-81.5-197 82-196.5 197-81.5 196.5 81.5 81.5 196.5zm1154-1q0 115-81.5 196.5t-197.5 81.5q-115 0-196.5-81.5t-81.5-196.5 81.5-196.5 196.5-81.5q116 0 197.5 81.5t81.5 196.5zm-964 3q0-191-135.5-326.5t-326.5-135.5q-125 0-231 62t-168 168.5-62 231.5 62 231.5 168 168.5 231 62q191 0 326.5-135.5t135.5-326.5zm668-573q-254-111-556-111-319 0-573 110 117 0 223 45.5t182.5 122.5 122 183 45.5 223q0-115 43.5-219.5t118-180.5 177.5-123 217-50zm479 573q0-191-135-326.5t-326-135.5-326.5 135.5-135.5 326.5 135.5 326.5 326.5 135.5 326-135.5 135-326.5zm-266-566h383q-44 51-75 114.5t-40 114.5q110 151 110 337 0 156-77 288t-209 208.5-287 76.5q-133 0-249-56t-196-155q-47 56-129 179-11-22-53.5-82.5t-74.5-97.5q-80 99-196.5 155.5t-249.5 56.5q-155 0-287-76.5t-209-208.5-77-288q0-186 110-337-9-51-40-114.5t-75-114.5h365q149-100 355-156.5t432-56.5q224 0 421 56t348 157z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=tripadvisor.js.map