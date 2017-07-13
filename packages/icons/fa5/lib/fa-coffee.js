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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" }),
        React.createElement("path", { d: "M517.9 448H26.1c-24.5 0-33.1-32-20-32h531.8c13.1 0 4.5 32-20 32zM576 159.1c.5 53.4-42.7 96.9-96 96.9h-32v32c0 53-43 96-96 96H160c-53 0-96-43-96-96V76c0-6.6 5.4-12 12-12h402.8c52.8 0 96.7 42.2 97.2 95.1zM416 96H96v192c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V96zm128 64c0-35.3-28.7-64-64-64h-32v128h32c35.3 0 64-28.7 64-64z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-coffee.js.map