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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 544 512" }),
        React.createElement("path", { d: "M6 384h20c3.3 0 6 2.7 6 6v116c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V390c0-3.3 2.7-6 6-6zm122-42v164c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6V342c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6zm128-80v244c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6V262c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6zm128-112v356c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6V150c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6zM512 6v500c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6V6c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-signal.js.map