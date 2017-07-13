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
        React.createElement("path", { d: "M766.5 544v117q0 13-9.5 22t-22.5 9h-298v812q0 13-9 22.5t-22 9.5h-135q-13 0-22.5-9t-9.5-23v-812h-297q-13 0-22.5-9t-9.5-22v-117q0-14 9-23t23-9h793q13 0 22.5 9.5t9.5 22.5zm1038-3l77 961q1 13-8 24-10 10-23 10h-134q-12 0-21-8.5t-10-20.5l-46-588-189 425q-8 19-29 19h-120q-20 0-29-19l-188-427-45 590q-1 12-10 20.5t-21 8.5h-135q-13 0-23-10-9-10-9-24l78-961q1-12 10-20.5t21-8.5h142q20 0 29 19l220 520q10 24 20 51 3-7 9.5-24.5t10.5-26.5l221-520q9-19 29-19h141q13 0 22 8.5t10 20.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=trademark.js.map