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
        React.createElement("path", { d: "M416.012 299.427c0 11.362-9.211 20.573-20.572 20.573H224.002v116.979c0 7.125-8.612 10.695-13.653 5.66L38.047 270.556c-8.046-8.036-8.047-21.076 0-29.112L210.349 69.36c5.041-5.035 13.653-1.464 13.653 5.66V192h171.437c11.362 0 20.572 9.211 20.572 20.573v86.854m32.001 0v-86.855c0-28.989-23.584-52.573-52.572-52.573H256.002V75.021c0-35.507-43.04-53.497-68.266-28.302L15.433 218.802c-20.576 20.55-20.58 53.842 0 74.396l172.303 172.083c25.122 25.091 68.266 7.351 68.266-28.302V352h139.437c28.989 0 52.573-23.584 52.573-52.573z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-arrow-alt-left.js.map