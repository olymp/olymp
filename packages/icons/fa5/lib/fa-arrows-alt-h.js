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
        React.createElement("path", { d: "M384 192.032V239H128v-46.962c0-28.425-34.488-42.767-54.627-22.627l-64 63.962c-12.496 12.496-12.498 32.757 0 45.255l64 63.968C93.472 362.695 128 348.45 128 319.968V273h256v46.962c0 28.425 34.487 42.767 54.627 22.627l64-63.962c12.496-12.496 12.498-32.757 0-45.255l-64-63.968C418.528 149.305 384 163.55 384 192.032zM100 319.968c0 3.548-4.296 5.361-6.833 2.823l-63.995-63.963a3.995 3.995 0 0 1-.006-5.651l64.006-63.968c2.533-2.532 6.829-.724 6.829 2.828v127.931zm318.833-130.76l63.995 63.963a3.995 3.995 0 0 1 .006 5.651l-64.006 63.968c-2.532 2.532-6.829.725-6.829-2.828v-127.93c.001-3.548 4.297-5.361 6.834-2.824z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-arrows-alt-h.js.map