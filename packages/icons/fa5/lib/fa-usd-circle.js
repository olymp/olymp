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
        React.createElement("path", { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-159.3 6.5c-13-10.2-29.5-16.8-45.5-23.2-30.3-12.1-48.7-20.8-48.7-40.6 0-8 3.7-15.4 10.5-20.9 7.8-6.2 18.7-9.5 31.6-9.5 26.5 0 46 17.6 46.2 17.8 1.6 1.5 3.9 2.2 6.1 1.9 2.2-.3 4.2-1.6 5.3-3.6l11-18.4c1.7-2.9 1.3-6.6-1-9.1-.8-.9-19.5-19.9-53.5-24.1v-29.3c0-4.1-3.3-7.5-7.4-7.5h-18.6c-4.1 0-7.4 3.4-7.4 7.5V134c-16.8 3.2-31.3 10.4-42.2 21-12.3 11.9-19 27.7-19 44.4 0 20.1 7.9 36.1 24 49 13.4 10.7 30.4 17.5 46.8 24.2 29.3 11.8 47 20.3 47 38.1 0 22.9-20.5 33.4-39.5 33.4-32.5 0-55.6-23.2-55.9-23.6-1.5-1.5-3.6-2.3-5.7-2.2-2.1.1-4.1 1.1-5.5 2.8l-13.6 17.1c-2.3 2.8-2.2 6.9.2 9.7 1 1.1 23 25.7 63.4 31.3v29.5c0 4.1 3.3 7.5 7.4 7.5h18.6c4.1 0 7.4-3.4 7.4-7.5v-29.6c17.3-2.9 32-10.5 42.9-22.1 11.8-12.5 18.3-29.3 18.3-47.2.1-19.6-7.5-35-23.2-47.3z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-usd-circle.js.map