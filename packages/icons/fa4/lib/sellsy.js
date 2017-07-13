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
        React.createElement("path", { d: "M1372 1371v-733q0-21-15-36t-35-15h-93q-20 0-35 15t-15 36v733q0 20 15 35t35 15h93q20 0 35-15t15-35zm-284 0v-531q0-20-15-35t-35-15h-101q-20 0-35 15t-15 35v531q0 20 15 35t35 15h101q20 0 35-15t15-35zm-292 0v-429q0-20-15-35t-35-15h-101q-20 0-35 15t-15 35v429q0 20 15 35t35 15h101q20 0 35-15t15-35zm-292 0v-362q0-20-15-35t-35-15h-101q-20 0-35 15t-15 35v362q0 20 15 35t35 15h101q20 0 35-15t15-35zm1416-146q0 166-118 284t-284 118h-1244q-166 0-284-118t-118-284q0-116 63-214.5t168-148.5q-10-34-10-73 0-113 80.5-193.5t193.5-80.5q102 0 180 67 45-183 194-300t338-117q149 0 275 73.5t199.5 199.5 73.5 275q0 66-14 122 135 33 221 142.5t86 247.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=sellsy.js.map