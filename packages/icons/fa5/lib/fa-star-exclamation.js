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
        React.createElement("path", { d: "M260.2 158.3c-.2-3.4 2.5-6.3 6-6.3h43.6c3.4 0 6.2 2.9 6 6.3l-7.3 132c-.2 3.2-2.8 5.7-6 5.7h-28.9c-3.2 0-5.8-2.5-6-5.7l-7.4-132zM288 320c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm257.9-94L440.1 329l25 145.5c4.5 26.2-23.1 46-46.4 33.7L288 439.6l-130.7 68.7c-23.4 12.3-50.9-7.6-46.4-33.7l25-145.5L30.1 226c-19-18.5-8.5-50.8 17.7-54.6L194 150.2l65.3-132.4c11.8-23.8 45.7-23.7 57.4 0L382 150.2l146.1 21.2c26.2 3.8 36.7 36.1 17.8 54.6zm-22.4-22.9l-162.7-23.7L288 32l-72.8 147.4-162.7 23.7 117.7 114.8-27.8 162L288 403.4l145.5 76.5-27.8-162 117.8-114.8z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-star-exclamation.js.map