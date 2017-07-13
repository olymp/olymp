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
        React.createElement("path", { d: "M1120 576q0 13-9.5 22.5t-22.5 9.5-22.5-9.5-9.5-22.5q0-46-54-71t-106-25q-13 0-22.5-9.5t-9.5-22.5 9.5-22.5 22.5-9.5q50 0 99.5 16t87 54 37.5 90zm160 0q0-72-34.5-134t-90-101.5-123-62-136.5-22.5-136.5 22.5-123 62-90 101.5-34.5 134q0 101 68 180 10 11 30.5 33t30.5 33q128 153 141 298h228q13-145 141-298 10-11 30.5-33t30.5-33q68-79 68-180zm128 0q0 155-103 268-45 49-74.5 87t-59.5 95.5-34 107.5q47 28 47 82 0 37-25 64 25 27 25 64 0 52-45 81 13 23 13 47 0 46-31.5 71t-77.5 25q-20 44-60 70t-87 26-87-26-60-70q-46 0-77.5-25t-31.5-71q0-24 13-47-45-29-45-81 0-37 25-64-25-27-25-64 0-54 47-82-4-50-34-107.5t-59.5-95.5-74.5-87q-103-113-103-268 0-99 44.5-184.5t117-142 164-89 186.5-32.5 186.5 32.5 164 89 117 142 44.5 184.5z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=lightbulb-o.js.map