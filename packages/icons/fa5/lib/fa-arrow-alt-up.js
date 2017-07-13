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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }),
        React.createElement("path", { d: "M180.573 448C169.211 448 160 438.789 160 427.428V255.991H43.021c-7.125 0-10.695-8.612-5.66-13.653L209.444 70.035c8.036-8.046 21.076-8.047 29.112 0L410.64 242.338c5.035 5.041 1.464 13.653-5.66 13.653H288v171.437C288 438.79 278.789 448 267.427 448h-86.854m0 32h86.855C296.416 480 320 456.416 320 427.428V287.991h84.979c35.507 0 53.497-43.04 28.302-68.266L261.198 47.422c-20.55-20.576-53.842-20.58-74.396 0L14.719 219.724c-25.091 25.122-7.351 68.266 28.302 68.266H128v139.437C128 456.416 151.584 480 180.573 480z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-arrow-alt-up.js.map