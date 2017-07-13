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
        React.createElement("path", { d: "M1280 1120v-192q0-14-9-23t-23-9h-224v-224q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v224h-224q-14 0-23 9t-9 23v192q0 14 9 23t23 9h224v224q0 14 9 23t23 9h192q14 0 23-9t9-23v-224h224q14 0 23-9t9-23zm-640-736h512v-128h-512v128zm-384 0v1280h-32q-92 0-158-66t-66-158v-832q0-92 66-158t158-66h32zm1184 0v1280h-1088v-1280h160v-160q0-40 28-68t68-28h576q40 0 68 28t28 68v160h160zm352 224v832q0 92-66 158t-158 66h-32v-1280h32q92 0 158 66t66 158z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=medkit.js.map