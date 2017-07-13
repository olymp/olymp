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
        React.createElement("path", { d: "M1536 128q0 261-106.5 461.5t-266.5 306.5q160 106 266.5 306.5t106.5 461.5h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96q0-261 106.5-461.5t266.5-306.5q-160-106-266.5-306.5t-106.5-461.5h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1472q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96zm-128 0h-1024q0 66 9 128h1006q9-61 9-128zm0 1536q0-130-34-249.5t-90.5-208-126.5-152-146-94.5h-230q-76 31-146 94.5t-126.5 152-90.5 208-34 249.5h1024z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=hourglass-start.js.map