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
    return (React.createElement("svg", __assign({ width: size || width, height: size || height, viewBox: "0 0 1792 1792" }, rest),
        React.createElement("path", { d: "M893 0q240-2 451 120 232 134 352 372l-742-39q-160-9-294 74.5t-185 229.5l-276-424q128-159 311-245.5t383-87.5zm-747 405l337 663q72 143 211 217t293 45l-230 451q-212-33-385-157.5t-272.5-316-99.5-411.5q0-267 146-491zm1586 169q58 150 59.5 310.5t-48.5 306-153 272-246 209.5q-230 133-498 119l405-623q88-131 82.5-290.5t-106.5-277.5zm-836 20q125 0 213.5 88.5t88.5 213.5-88.5 213.5-213.5 88.5-213.5-88.5-88.5-213.5 88.5-213.5 213.5-88.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=chrome.js.map