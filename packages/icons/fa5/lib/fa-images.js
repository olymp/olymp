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
        React.createElement("path", { d: "M528 32H112c-26.51 0-48 21.49-48 48v16H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-16h16c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-48 400c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V144c0-8.822 7.178-16 16-16h16v240c0 26.51 21.49 48 48 48h368v16zm64-64c0 8.822-7.178 16-16 16H112c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h416c8.822 0 16 7.178 16 16v288zM176 200c30.928 0 56-25.072 56-56s-25.072-56-56-56-56 25.072-56 56 25.072 56 56 56zm0-80c13.234 0 24 10.766 24 24s-10.766 24-24 24-24-10.766-24-24 10.766-24 24-24zm240.971 23.029c-9.373-9.373-24.568-9.373-33.941 0L288 238.059l-31.029-31.03c-9.373-9.373-24.569-9.373-33.941 0l-88 88A24.002 24.002 0 0 0 128 312v28c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12v-92c0-6.365-2.529-12.47-7.029-16.971l-88-88zM480 320H160v-4.686l80-80 48 48 112-112 80 80V320z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-images.js.map