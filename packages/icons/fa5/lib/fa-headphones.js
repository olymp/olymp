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
        React.createElement("path", { d: "M256 32C114.517 32 0 146.497 0 288v51.429a16.003 16.003 0 0 0 8.213 13.978l23.804 13.262c-.005.443-.017.886-.017 1.331 0 61.856 50.144 112 112 112h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-49.675 0-91.79 32.343-106.453 77.118L32 330.027V288C32 164.205 132.184 64 256 64c123.796 0 224 100.184 224 224v42.027l-5.547 3.09C459.79 288.343 417.676 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c61.856 0 112-50.144 112-112 0-.445-.012-.888-.017-1.332l23.804-13.262A16.002 16.002 0 0 0 512 339.428V288c0-141.482-114.497-256-256-256zM144 288h16v160h-16c-44.112 0-80-35.888-80-80s35.888-80 80-80zm224 160h-16V288h16c44.112 0 80 35.888 80 80s-35.888 80-80 80z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-headphones.js.map