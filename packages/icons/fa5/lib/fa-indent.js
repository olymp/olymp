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
        React.createElement("path", { d: "M0 76V52a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6zm166 134h276a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6H166a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6zM6 466h436a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6zm160-128h276a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6H166a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6zM0 351.987V160.014c0-14.27 17.283-21.346 27.313-11.313l96 95.986c6.249 6.248 6.249 16.379 0 22.627l-96 95.987C17.296 373.318 0 366.281 0 351.987zm32-153.36v114.746L89.373 256 32 198.627z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-indent.js.map