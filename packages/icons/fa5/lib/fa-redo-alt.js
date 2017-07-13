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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }),
        React.createElement("path", { d: "M512 32.015V160c0 17.673-14.327 32-32 32H352.032c-28.482 0-42.727-34.528-22.627-54.627l53.617-53.624C346.671 56.872 302.514 42 256 42 137.589 42 42 137.974 42 256c0 118.415 95.978 214 214 214 53.682 0 104.151-19.797 143.108-54.884 4.728-4.258 11.973-4.035 16.472.464l7.079 7.079c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.189 504 8.252 393.219 8 256.467 7.749 119.827 119.183 8.096 255.822 8c57.021-.04 109.545 19.177 151.456 51.489l50.095-50.101C477.436-10.676 512 3.54 512 32.015zM480 32L352 160h128V32" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-redo-alt.js.map