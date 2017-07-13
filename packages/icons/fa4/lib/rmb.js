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
        React.createElement("path", { d: "M985.5 1536h-172q-13 0-22.5-9t-9.5-23v-330h-288q-13 0-22.5-9t-9.5-23v-103q0-13 9.5-22.5t22.5-9.5h288v-85h-288q-13 0-22.5-9t-9.5-23v-104q0-13 9.5-22.5t22.5-9.5h214l-321-578q-8-16 0-32 10-16 28-16h194q19 0 29 18l215 425q19 38 56 125 10-24 30.5-68t27.5-61l191-420q8-19 29-19h191q17 0 27 16 9 14 1 31l-313 579h215q13 0 22.5 9.5t9.5 22.5v104q0 14-9.5 23t-22.5 9h-290v85h290q13 0 22.5 9.5t9.5 22.5v103q0 14-9.5 23t-22.5 9h-290v330q0 13-9.5 22.5t-22.5 9.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=rmb.js.map