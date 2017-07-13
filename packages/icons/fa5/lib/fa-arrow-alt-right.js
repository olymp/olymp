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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448.012 512" }),
        React.createElement("path", { d: "M32 212.573C32 201.211 41.211 192 52.572 192h171.437V75.021c0-7.125 8.612-10.695 13.653-5.66l172.303 172.083c8.046 8.036 8.047 21.076 0 29.112L237.662 442.64c-5.041 5.035-13.653 1.464-13.653-5.66V320H52.572C41.211 320 32 310.789 32 299.427v-86.854m-32 0v86.855C0 328.416 23.584 352 52.572 352h139.437v84.979c0 35.507 43.04 53.497 68.266 28.302l172.303-172.083c20.576-20.55 20.58-53.842 0-74.396L260.276 46.719c-25.122-25.091-68.266-7.351-68.266 28.302V160H52.572C23.584 160 0 183.584 0 212.573z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-arrow-alt-right.js.map