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
        React.createElement("path", { d: "M1389 1098q0-59-34-106.5t-87-68.5q-7 45-23 92-7 24-27.5 38t-44.5 14q-12 0-24-3-31-10-45-38.5t-4-58.5q23-71 23-143 0-123-61-227.5t-166-165.5-228-61q-134 0-247 73t-167 194q108 28 188 106 22 23 22 55t-22 54-54 22-55-22q-75-75-180-75-106 0-181 74.5t-75 180.5 75 180.5 181 74.5h1046q79 0 134.5-55.5t55.5-133.5zm153 0q0 142-100.5 242t-242.5 100h-1046q-169 0-289-119.5t-120-288.5q0-153 100-267t249-136q62-184 221-298t354-114q235 0 408.5 158.5t196.5 389.5q116 25 192.5 118.5t76.5 214.5zm250 0q0 175-97 319-23 33-64 33-24 0-43-13-26-17-32-48.5t12-57.5q71-104 71-233t-71-233q-18-26-12-57t32-49 57.5-11.5 49.5 32.5q97 142 97 318zm256 0q0 244-134 443-23 34-64 34-23 0-42-13-26-18-32.5-49t11.5-57q108-164 108-358 0-195-108-357-18-26-11.5-57.5t32.5-48.5q26-18 57-12t49 33q134 198 134 442z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=mixcloud.js.map