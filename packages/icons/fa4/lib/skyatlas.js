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
        React.createElement("path", { d: "M1302 583zm260 204q148 0 253 98.5t105 244.5q0 157-109 261.5t-267 104.5q-85 0-162-27.5t-138-73.5-118-106-109-126.5-103.5-132.5-108.5-126-117-106-136-73.5-159-27.5q-154 0-251.5 91.5t-97.5 244.5q0 157 104 250t263 93q100 0 208-37.5t193-98.5q5-4 21-18.5t30-24 22-9.5q14 0 24.5 10.5t10.5 24.5q0 24-60 77-101 88-234.5 142t-260.5 54q-133 0-245.5-58t-180-165-67.5-241q0-205 141.5-341t347.5-136q120 0 226.5 43.5t185.5 113 151.5 153 139 167.5 133.5 153.5 149.5 113 172.5 43.5q102 0 168.5-61.5t66.5-162.5q0-95-64.5-159t-159.5-64q-30 0-81.5 18.5t-68.5 18.5q-20 0-35.5-15t-15.5-35q0-18 8.5-57t8.5-59q0-159-107.5-263t-266.5-104q-58 0-111.5 18.5t-84 40.5-55.5 40.5-33 18.5q-15 0-25.5-10.5t-10.5-25.5q0-19 25-46 59-67 147-103.5t182-36.5q191 0 318 125.5t127 315.5q0 37-4 66 57-15 115-15z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=skyatlas.js.map