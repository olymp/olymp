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
        React.createElement("path", { d: "M1582 582q0 101-71.5 172.5t-172.5 71.5-172.5-71.5-71.5-172.5 71.5-172.5 172.5-71.5 172.5 71.5 71.5 172.5zm-770 742q0-104-73-177t-177-73q-27 0-54 6l104 42q77 31 109.5 106.5t1.5 151.5q-31 77-107 109t-152 1q-21-8-62-24.5t-61-24.5q32 60 91 96.5t130 36.5q104 0 177-73t73-177zm830-741q0-126-89.5-215.5t-215.5-89.5q-127 0-216.5 89.5t-89.5 215.5q0 127 89.5 216t216.5 89q126 0 215.5-89t89.5-216zm150 0q0 189-133.5 322t-321.5 133l-437 319q-12 129-109 218t-229 89q-121 0-214-76t-118-192l-230-92v-429l389 157q79-48 173-48 13 0 35 2l284-407q2-187 135.5-319t320.5-132q188 0 321.5 133.5t133.5 321.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=steam.js.map