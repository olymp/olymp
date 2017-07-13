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
        React.createElement("path", { d: "M452 432c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm-84-20c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm144-48v104c0 24.3-19.7 44-44 44H44c-24.3 0-44-19.7-44-44V364c0-24.3 19.7-44 44-44h99.4L87 263.6c-25.2-25.2-7.3-68.3 28.3-68.3H168V40c0-22.1 17.9-40 40-40h96c22.1 0 40 17.9 40 40v155.3h52.7c35.6 0 53.4 43.1 28.3 68.3L368.6 320H468c24.3 0 44 19.7 44 44zm-261.7 17.7c3.1 3.1 8.2 3.1 11.3 0L402.3 241c5-5 1.5-13.7-5.7-13.7H312V40c0-4.4-3.6-8-8-8h-96c-4.4 0-8 3.6-8 8v187.3h-84.7c-7.1 0-10.7 8.6-5.7 13.7l140.7 140.7zM480 364c0-6.6-5.4-12-12-12H336.6l-52.3 52.3c-15.6 15.6-41 15.6-56.6 0L175.4 352H44c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12V364z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-download.js.map