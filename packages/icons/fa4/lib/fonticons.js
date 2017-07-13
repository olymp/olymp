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
        React.createElement("path", { d: "M128 128h1536v1536h-1536v-1536zm908 320l-12 33 75 83-31 114 25 25 107-57 107 57 25-25-31-114 75-83-12-33h-95l-53-96h-32l-53 96h-95zm-267 163q32 0 44.5 16t11.5 63l174-21q0-55-17.5-92.5t-50.5-56-69-25.5-85-7q-133 0-199 57.5t-66 182.5v72h-96v128h76q20 0 20 8v382q0 14-5 20t-18 7l-73 7v88h448v-86l-149-14q-6-1-8.5-1.5t-3.5-2.5-.5-4 1-7 .5-10v-387h191l38-128h-231q-6 0-2-6t4-9v-80q0-27 1.5-40.5t7.5-28 19.5-20 36.5-5.5zm607 829v-86l-54-9q-7-1-9.5-2.5t-2.5-3 1-7.5 1-12v-520h-275l-23 101 83 22q23 7 23 27v370q0 14-6 18.5t-20 6.5l-70 9v86h352z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fonticons.js.map