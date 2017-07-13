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
        React.createElement("path", { d: "M1345 470v102q0 14-9 23t-23 9h-168q-23 144-129 234t-276 110q167 178 459 536 14 16 4 34-8 18-29 18h-195q-16 0-25-12-306-367-498-571-9-9-9-22v-127q0-13 9.5-22.5t22.5-9.5h112q132 0 212.5-43t102.5-125h-427q-14 0-23-9t-9-23v-102q0-14 9-23t23-9h413q-57-113-268-113h-145q-13 0-22.5-9.5t-9.5-22.5v-133q0-14 9-23t23-9h832q14 0 23 9t9 23v102q0 14-9 23t-23 9h-233q47 61 64 144h171q14 0 23 9t9 23z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=inr.js.map