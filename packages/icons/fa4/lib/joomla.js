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
        React.createElement("path", { d: "M1198 1073l-160 160-151 152-30 30q-65 64-151.5 87t-171.5 2q-16 70-72 115t-129 45q-85 0-145-60.5t-60-145.5q0-72 44.5-128t113.5-72q-22-86 1-173t88-152l12-12 151 152-11 11q-37 37-37 89t37 90q37 37 89 37t89-37l30-30 151-152 161-160zm-341-682l12 12-152 152-12-12q-37-37-89-37t-89 37-37 89.5 37 89.5l29 29 152 152 160 160-151 152-161-160-151-152-30-30q-68-67-90-159.5t5-179.5q-70-15-115-71t-45-129q0-85 60-145.5t145-60.5q76 0 133.5 49t69.5 123q84-20 169.5 3.5t149.5 87.5zm807 1067q0 85-60 145.5t-145 60.5q-74 0-131-47t-71-118q-86 28-179.5 6t-161.5-90l-11-12 151-152 12 12q37 37 89 37t89-37 37-89-37-89l-30-30-152-152-160-160 152-152 160 160 152 152 29 30q64 64 87.5 150.5t2.5 171.5q76 11 126.5 68.5t50.5 134.5zm-2-1124q0 77-51 135t-127 69q26 85 3 176.5t-90 158.5l-12 12-151-152 12-12q37-37 37-89t-37-89-89-37-89 37l-30 30-152 152-160 160-152-152 161-160 152-152 29-30q67-67 159-89.5t178 3.5q11-75 68.5-126t135.5-51q85 0 145 60.5t60 145.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=joomla.js.map