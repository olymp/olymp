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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512" }),
        React.createElement("path", { d: "M341.86 180.883c-7.538-4.615-17.388-2.239-21.998 5.297-4.612 7.537-2.241 17.387 5.297 21.998C341.966 218.462 352 236.34 352 256s-10.034 37.538-26.841 47.822c-7.538 4.611-9.909 14.461-5.297 21.998 4.611 7.538 14.463 9.909 21.998 5.297C368.247 314.972 384 286.891 384 256s-15.753-58.972-42.14-75.117zM256 88.017v335.964c0 21.436-25.942 31.999-40.971 16.971L126.059 352H24c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h102.059l88.971-88.954C230.037 56.038 256 66.551 256 88.017zm-32 19.311l-77.659 77.644A24.001 24.001 0 0 1 129.372 192H32v128h97.372a24.001 24.001 0 0 1 16.969 7.028L224 404.67V107.328z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-volume-down.js.map