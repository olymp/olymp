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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" }),
        React.createElement("path", { d: "M249.139 242.128c33.922-18.988 53.22-53.503 53.22-95.748 0-42.421-19.499-80.713-49.665-97.55C232.561 37.505 207.478 32 176.01 32H12C5.373 32 0 37.373 0 44v8c0 6.627 5.373 12 12 12h19.95v384H12c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h169.68c19.934 0 45.622-1.177 67.493-10.348C292.198 451.781 320 406.247 320 353.65c0-52.496-28.196-96.372-70.861-111.522zM66.041 64.201H176.01c24.929 0 43.694 4.153 57.357 12.692 21.38 13.439 33.642 38.537 33.642 68.858 0 49.531-32.265 82.81-80.289 82.81H66.041V64.201zm167.194 375.685c-12.585 5.325-29.449 7.914-51.555 7.914H66.041V260.76h124.458c56.314 0 94.151 37.837 94.151 94.151 0 40.208-19.2 71.966-51.415 84.975z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-bold.js.map