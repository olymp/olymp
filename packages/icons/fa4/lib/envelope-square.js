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
        React.createElement("path", { d: "M1376 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960zm32 1056v-436q-31 35-64 55-34 22-132.5 85t-151.5 99q-98 69-164 69t-164-69q-46-32-141.5-92.5t-142.5-92.5q-12-8-33-27t-31-27v436q0 40 28 68t68 28h832q40 0 68-28t28-68zm0-573q0-41-27.5-70t-68.5-29h-832q-40 0-68 28t-28 68q0 37 30.5 76.5t67.5 64.5q47 32 137.5 89t129.5 83q3 2 17 11.5t21 14 21 13 23.5 13 21.5 9.5 22.5 7.5 20.5 2.5 20.5-2.5 22.5-7.5 21.5-9.5 23.5-13 21-13 21-14 17-11.5l267-174q35-23 66.5-62.5t31.5-73.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=envelope-square.js.map