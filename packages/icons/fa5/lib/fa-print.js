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
        React.createElement("path", { d: "M416 192V81.9c0-6.4-2.5-12.5-7-17L351 7c-4.5-4.5-10.6-7-17-7H120c-13.2 0-24 10.8-24 24v168c-53 0-96 43-96 96v136c0 13.2 10.8 24 24 24h72v40c0 13.2 10.8 24 24 24h272c13.2 0 24-10.8 24-24v-40h72c13.2 0 24-10.8 24-24V288c0-53-43-96-96-96zM128 32h202.8L384 85.2V256H128V32zm256 448H128v-96h256v96zm96-64h-64v-40c0-13.2-10.8-24-24-24H120c-13.2 0-24 10.8-24 24v40H32V288c0-35.3 28.7-64 64-64v40c0 13.2 10.8 24 24 24h272c13.2 0 24-10.8 24-24v-40c35.3 0 64 28.7 64 64v128zm-28-112c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-print.js.map