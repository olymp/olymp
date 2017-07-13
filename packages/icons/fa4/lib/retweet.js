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
        React.createElement("path", { d: "M1216 1504q0 13-9.5 22.5t-22.5 9.5h-960q-8 0-13.5-2t-9-7-5.5-8-3-11.5-1-11.5v-600h-192q-26 0-45-19t-19-45q0-24 15-41l320-384q19-22 49-22t49 22l320 384q15 17 15 41 0 26-19 45t-45 19h-192v384h576q16 0 25 11l160 192q7 11 7 21zm640-416q0 24-15 41l-320 384q-20 23-49 23t-49-23l-320-384q-15-17-15-41 0-26 19-45t45-19h192v-384h-576q-16 0-25-12l-160-192q-7-9-7-20 0-13 9.5-22.5t22.5-9.5h960q8 0 13.5 2t9 7 5.5 8 3 11.5 1 11.5v600h192q26 0 45 19t19 45z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=retweet.js.map