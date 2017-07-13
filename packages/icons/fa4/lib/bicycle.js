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
        React.createElement("path", { d: "M506 1152h-314q-40 0-57.5-35t6.5-67l188-251q-65-31-137-31-132 0-226 94t-94 226 94 226 226 94q115 0 203-72.5t111-183.5zm-186-128h186q-18-85-75-148zm480 0l288-384h-480l-99 132q105 103 126 252h165zm1120 64q0-132-94-226t-226-94q-60 0-121 24l174 260q15 23 10 49t-27 40q-15 11-36 11-35 0-53-29l-174-260q-93 95-93 225 0 132 94 226t226 94 226-94 94-226zm128 0q0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-97 39.5-183.5t109.5-149.5l-65-98-353 469q-18 26-51 26h-197q-23 164-149 274t-294 110q-185 0-316.5-131.5t-131.5-316.5 131.5-316.5 316.5-131.5q114 0 215 55l137-183h-224q-26 0-45-19t-19-45 19-45 45-19h384v128h435l-85-128h-222q-26 0-45-19t-19-45 19-45 45-19h256q33 0 53 28l267 400q91-44 192-44 185 0 316.5 131.5t131.5 316.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=bicycle.js.map