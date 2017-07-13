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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 192 512" }),
        React.createElement("path", { d: "M181.415 399.959c-4.686-4.686-12.284-4.686-16.971 0L113 451.887V60.113l51.444 51.928c4.686 4.686 12.284 4.686 16.971 0l7.07-7.071c4.686-4.686 4.686-12.284 0-16.97l-84-84.485c-4.686-4.686-12.284-4.686-16.971 0L3.515 88c-4.686 4.686-4.686 12.284 0 16.97l7.07 7.071c4.686 4.686 12.284 4.686 16.971 0L79 60.113v391.773l-51.444-51.928c-4.686-4.686-12.284-4.686-16.971 0l-7.07 7.071c-4.686 4.686-4.686 12.284 0 16.97l84 84.485c4.686 4.687 12.284 4.687 16.971 0l84-84.485c4.686-4.686 4.686-12.284 0-16.97l-7.071-7.07z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-arrows-v.js.map