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
        React.createElement("path", { d: "M1546 1050q46 26 59.5 77.5t-12.5 97.5l-64 110q-26 46-77.5 59.5t-97.5-12.5l-266-153v307q0 52-38 90t-90 38h-128q-52 0-90-38t-38-90v-307l-266 153q-46 26-97.5 12.5t-77.5-59.5l-64-110q-26-46-12.5-97.5t59.5-77.5l266-154-266-154q-46-26-59.5-77.5t12.5-97.5l64-110q26-46 77.5-59.5t97.5 12.5l266 153v-307q0-52 38-90t90-38h128q52 0 90 38t38 90v307l266-153q46-26 97.5-12.5t77.5 59.5l64 110q26 46 12.5 97.5t-59.5 77.5l-266 154z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=asterisk.js.map