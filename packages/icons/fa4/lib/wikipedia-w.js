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
        React.createElement("path", { d: "M1238 1639l-295-695q-25 49-158.5 305.5t-198.5 389.5q-1 1-27.5.5t-26.5-1.5q-82-193-255.5-587t-259.5-596q-21-50-66.5-107.5t-103.5-100.5-102-43q0-5-.5-24t-.5-27h583v50q-39 2-79.5 16t-66.5 43-10 64q26 59 216.5 499t235.5 540q31-61 140-266.5t131-247.5q-19-39-126-281t-136-295q-38-69-201-71v-50l513 1v47q-60 2-93.5 25t-12.5 69q33 70 87 189.5t86 187.5q110-214 173-363 24-55-10-79.5t-129-26.5q1-7 1-25v-24q64 0 170.5-.5t180-1 92.5-.5v49q-62 2-119 33t-90 81l-213 442q13 33 127.5 290t121.5 274l441-1017q-14-38-49.5-62.5t-65-31.5-55.5-8v-50l460 4 1 2-1 44q-139 4-201 145-526 1216-559 1291h-49z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=wikipedia-w.js.map