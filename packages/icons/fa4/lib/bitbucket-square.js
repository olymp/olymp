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
        React.createElement("path", { d: "M976 870q0-43-41-66t-77-1q-43 20-42.5 72.5t43.5 70.5q39 23 81-4t36-72zm80-16q8 66-36 121t-110 61-119-40-56-113q-2-49 25.5-93t72.5-64q70-31 141.5 10t81.5 118zm172-391q-20 21-53.5 34t-53 16-63.5 8q-155 20-324 0-44-6-63-9.5t-52.5-16-54.5-32.5q13-19 36-31t40-15.5 47-8.5q198-35 408-1 33 5 51 8.5t43 16 39 31.5zm42 746q0-7 5.5-26.5t3-32-17.5-16.5q-161 106-365 106t-366-106l-12 6-5 12q26 154 41 210 47 81 204 108 249 46 428-53 34-19 49-51.5t22.5-85.5 12.5-71zm130-693q9-53-8-75-43-55-155-88-216-63-487-36-132 12-226 46-38 15-59.5 25t-47 34-29.5 54q8 68 19 138t29 171 24 137q1 5 5 31t7 36 12 27 22 28q105 80 284 100 259 28 440-63 24-13 39.5-23t31-29 19.5-40q48-267 80-473zm264-100v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=bitbucket-square.js.map