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
        React.createElement("path", { d: "M1536 1536q0 63-61.5 113.5t-164 81-225 46-253.5 15.5-253.5-15.5-225-46-164-81-61.5-113.5q0-49 33-88.5t91-66.5 118-44.5 131-29.5q26-5 48 10.5t26 41.5q5 26-10.5 48t-41.5 26q-58 10-106 23.5t-76.5 25.5-48.5 23.5-27.5 19.5-8.5 12q3 11 27 26.5t73 33 114 32.5 160.5 25 201.5 10 201.5-10 160.5-25 114-33 73-33.5 27-27.5q-1-4-8.5-11t-27.5-19-48.5-23.5-76.5-25-106-23.5q-26-4-41.5-26t-10.5-48q4-26 26-41.5t48-10.5q71 12 131 29.5t118 44.5 91 66.5 33 88.5zm-384-896v384q0 26-19 45t-45 19h-64v384q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-384h-64q-26 0-45-19t-19-45v-384q0-53 37.5-90.5t90.5-37.5h384q53 0 90.5 37.5t37.5 90.5zm-96-384q0 93-65.5 158.5t-158.5 65.5-158.5-65.5-65.5-158.5 65.5-158.5 158.5-65.5 158.5 65.5 65.5 158.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=street-view.js.map