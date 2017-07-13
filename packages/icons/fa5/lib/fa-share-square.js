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
        React.createElement("path", { d: "M566.633 169.37L406.63 9.392C386.626-10.612 352 3.395 352 32.022v72.538C210.132 108.474 88 143.455 88 286.3c0 84.74 49.78 133.742 79.45 155.462 24.196 17.695 58.033-4.917 49.7-34.51C188.286 304.843 225.497 284.074 352 280.54V352c0 28.655 34.654 42.606 54.63 22.63l160.003-160c12.489-12.5 12.489-32.76 0-45.26zM384 352V248.04c-141.718.777-240.762 15.03-197.65 167.96C154.91 393 120 351.28 120 286.3c0-134.037 131.645-149.387 264-150.26V32l160 160-160 160zm37.095 52.186c2.216-1.582 4.298-3.323 6.735-5.584 7.68-7.128 20.17-1.692 20.17 8.787V464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h172.146c6.612 0 11.954 5.412 11.852 12.04-.084 5.446-4.045 10.087-9.331 11.396-9.462 2.343-18.465 4.974-27.074 7.914-1.25.427-2.555.65-3.876.65H48c-8.837 0-16 7.163-16 16v352c0 8.837 7.163 16 16 16h352c8.837 0 16-7.163 16-16v-50.002c0-3.905 1.916-7.543 5.095-9.812z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-share-square.js.map