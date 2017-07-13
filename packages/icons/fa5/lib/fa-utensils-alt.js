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
        React.createElement("path", { d: "M475.2 16.1l-192 178.2L272 184c12.6-40 6-78.2-26.1-110.3C225 52.8 166.2 12 158.8 6.8c-28-19.7-66.6 6.4-70.6 37.4-20.4 2.5-41.2 21.9-43.9 44-30.1 3.7-57.5 42-37.4 70.6 5.1 7.4 45.9 66.2 66.8 87.1C106.9 279 145.2 284.1 184 272l7.2 7.7L83.1 380c-24.8 23.1-25.7 62.3-1.6 86.4l28 28c24.3 24.3 63.3 23 86.2-1.4.8-.9-6 7.2 90.3-106.3l93.1 105.1c22.8 25.7 62.8 27.2 87.3 2.6l28-28c24.4-24.4 23.2-64.4-2.6-87.3l-104.5-92.5C506.2 275.8 576 202.9 576 60c0-52.3-62.6-79.4-100.8-43.9zM96.3 223.3C76.7 203.6 33 140.4 33 140.4c-5.5-7.6 12.3-25.1 19.7-19.4l80.9 80.9c8.2 7 26.4-11 19.7-19.4L77 96.5C71.6 89 89 71.6 96.5 76.9l86.1 76.4c8.4 6.7 26.3-11.5 19.4-19.7l-80.9-80.9c-5.7-7.4 11.7-25.1 19.4-19.7 0 0 63.2 43.7 82.8 63.3 29.3 29.3 32.7 66.9 13.9 100l22.5 19.9-44.9 41.7-18.4-20.7c-32.8 18.6-70.5 15.6-100.1-13.9zM470.6 403c12.1 10.7 12.6 29.3 1.2 40.8l-28 28c-11.4 11.4-30.1 10.8-40.8-1.2l-96-108.5 50.4-59.3L470.6 403zM355 256L172.4 471.2c-10.8 11.5-29 11.8-40.2.6l-28-28c-11.2-11.2-10.9-29.5.7-40.3l392-364c18-16.6 47.1-3.8 47.1 20.5 0 117.2-49 196-189 196z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-utensils-alt.js.map