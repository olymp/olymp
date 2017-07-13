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
        React.createElement("path", { d: "M506 114H134a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h372a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm6 154v-24a6 6 0 0 0-6-6H134a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6zm0 160v-24a6 6 0 0 0-6-6H134a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6zM48 60c-19.882 0-36 16.118-36 36s16.118 36 36 36 36-16.118 36-36-16.118-36-36-36zm0 160c-19.882 0-36 16.118-36 36s16.118 36 36 36 36-16.118 36-36-16.118-36-36-36zm0 160c-19.882 0-36 16.118-36 36s16.118 36 36 36 36-16.118 36-36-16.118-36-36-36z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-list-ul.js.map