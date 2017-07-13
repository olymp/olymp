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
        React.createElement("path", { d: "M509.8 227.5L448 177.8v-76c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6v50.1L276.1 39.1c-11.7-9.5-28.5-9.5-40.2 0L2.2 227.5c-2.6 2.1-3 5.9-.9 8.4l12.6 15.6c2.1 2.6 5.9 3 8.5.9L64 218.9v229c0 17.7 14.3 32 32 32h116c6.6 0 12-5.4 12-12V335.8l64 .3v132.2c0 6.6 5.4 12 12 12l116-.3c17.7 0 32-14.3 32-32V219l41.6 33.5c2.6 2.1 6.4 1.7 8.5-.9l12.6-15.6c2.1-2.6 1.6-6.4-.9-8.5zM416 448l-96 .3V316c0-6.6-5.4-12-12-12l-104-.3c-6.6 0-12 5.4-12 12V448H96V193.1l156.2-126c2.2-1.8 5.3-1.8 7.5 0l156.2 126V448z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-home.js.map