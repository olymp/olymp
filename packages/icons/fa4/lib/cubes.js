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
        React.createElement("path", { d: "M384 1632l384-192v-314l-384 164v342zm-64-454l404-173-404-173-404 173zm1088 454l384-192v-314l-384 164v342zm-64-454l404-173-404-173-404 173zm-448-293l384-165v-266l-384 164v267zm-64-379l441-189-441-189-441 189zm1088 518v416q0 36-19 67t-52 47l-448 224q-25 14-57 14t-57-14l-448-224q-5-2-7-4-2 2-7 4l-448 224q-25 14-57 14t-57-14l-448-224q-33-16-52-47t-19-67v-416q0-38 21.5-70t56.5-48l434-186v-400q0-38 21.5-70t56.5-48l448-192q23-10 50-10t50 10l448 192q35 16 56.5 48t21.5 70v400l434 186q36 16 57 48t21 70z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=cubes.js.map