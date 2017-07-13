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
        React.createElement("path", { d: "M1024 452l316 316-572 572-316-316zm-211 979l618-618q19-19 19-45t-19-45l-362-362q-18-18-45-18t-45 18l-618 618q-19 19-19 45t19 45l362 362q18 18 45 18t45-18zm889-637l-907 908q-37 37-90.5 37t-90.5-37l-126-126q56-56 56-136t-56-136-136-56-136 56l-125-126q-37-37-37-90.5t37-90.5l907-906q37-37 90.5-37t90.5 37l125 125q-56 56-56 136t56 136 136 56 136-56l126 125q37 37 37 90.5t-37 90.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=ticket.js.map