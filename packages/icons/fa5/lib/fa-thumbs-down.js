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
        React.createElement("path", { d: "M496.7 226.3c5.5-22.3 2.8-49.9-9.6-69.4 4.3-23.8-3.1-49.4-18.2-67.1C470.7 35.9 437.8 0 378.5 0h-41c-46.7 0-91.2 15.3-126.4 27.5-52.8 18.4-56.2 13.6-56.2 13.6-4.4-5.6-11.2-9.2-18.9-9.2H24C10.7 32 0 42.7 0 56v272c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24v-20.5c19.7 6.2 59.2 69 83.6 93.3C265.7 423 257.7 512 306.9 512c59.6 0 82.9-34.7 82.9-93.1 0-30.9-12-52.4-20.7-69.8h70.1c40.7 0 72.7-34.9 72.7-72.6.1-20.5-5.3-37.3-15.2-50.2zM128 320H32V64h96v256zm311.3-2.9h-112c0 40.7 30.5 59.6 30.5 101.8 0 25.6 0 61.1-50.9 61.1-20.4-20.4-10.2-71.3-40.7-101.8-33.7-33.7-68.5-101.8-106.2-101.8V72.7c42.7 0 104.5-40.7 177.5-40.7h40.7c38.3.4 65.5 18.4 57.2 71 16.4 8.8 28.5 39.2 15 62 21.6 11 21.6 59 5.6 70.7 16 4.4 24.1 20.4 24 40.7-.1 20.3-18 40.7-40.7 40.7z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-thumbs-down.js.map