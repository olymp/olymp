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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 512" }),
        React.createElement("path", { d: "M211.082 270.738c-20.645-16.106-47.199-26.623-72.879-36.793-52.27-20.701-84.007-35.924-84.007-72.7 0-14.775 6.838-28.551 19.256-38.79 14.224-11.729 34.232-17.928 57.862-17.928 44.17 0 74.063 28.044 74.332 28.3a12 12 0 0 0 18.455-2.164l12.348-19.327a12.002 12.002 0 0 0-1.484-14.801c-1.316-1.362-30.896-31.36-84.135-37.163V12c0-6.628-5.373-12-12-12h-23.084c-6.627 0-12 5.372-12 12v48.628c-26.917 4.68-50.079 15.699-67.459 32.187-19.507 18.502-30.249 42.997-30.249 68.967 0 31.566 12.416 56.747 37.956 76.979 21.247 16.832 48.384 27.789 74.628 38.386 50.536 20.404 81.22 35.216 81.22 68.775 0 36.556-29.504 62.086-71.749 62.086-55.769 0-91.023-37.421-91.539-37.976-2.298-2.511-5.551-3.945-8.958-3.899a12.003 12.003 0 0 0-8.909 4.078L3.118 387.928a12.001 12.001 0 0 0-.031 15.808c1.538 1.764 36.52 41.1 100.659 49.193V500c0 6.628 5.373 12 12 12h23.084c6.627 0 12-5.372 12-12v-47.312c27.167-4.216 50.427-15.711 67.75-33.589C237.552 399.52 248 373.151 248 344.85c0-30.488-12.076-54.73-36.918-74.112z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-usd.js.map