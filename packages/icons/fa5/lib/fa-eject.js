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
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }),
        React.createElement("path", { d: "M435.322 239.565L259.383 47.558c-19.014-20.743-51.751-20.745-70.767 0L12.67 239.565C-15.475 270.268 6.324 320 48.053 320h351.886c41.651 0 63.581-49.674 35.383-80.435zM399.939 288H48.053c-13.866 0-21.169-16.585-11.791-26.816L212.205 69.181c6.323-6.897 17.248-6.918 23.585-.005l175.943 192.012c9.371 10.223 2.076 26.812-11.794 26.812zM448 400v32c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-32c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-48-16H48c-8.822 0-16 7.178-16 16v32c0 8.823 7.178 16 16 16h352c8.822 0 16-7.177 16-16v-32c0-8.822-7.178-16-16-16z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-eject.js.map