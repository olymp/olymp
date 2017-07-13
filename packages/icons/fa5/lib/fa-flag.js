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
        React.createElement("path", { d: "M445.648 3.735C408.386 19.093 367.522 32 328 32c-53.412 0-95.546-32-168-32-56.277 0-97.76 16.342-136.523 39.428C8.928 48.093 0 63.766 0 80.699V500c0 6.627 5.373 12 12 12h8c6.627 0 12-5.373 12-12V393.714C76.708 372.28 132.221 352 184 352c53.412 0 95.546 32 168 32 56.277 0 97.76-16.342 136.523-39.428C503.072 335.907 512 320.234 512 303.3V48.087c0-34.203-34.73-57.385-66.352-44.352zM480 303.3c0 5.615-3.008 10.894-7.851 13.778C431.049 341.556 395.116 352 352 352c-66.702 0-107.682-32-168-32-44.493 0-95.465 12.897-152 38.406V80.7c0-5.614 3.008-10.894 7.851-13.778C80.951 42.444 116.883 32 160 32c67.061 0 107.3 32 168 32 37.801 0 79.06-9.748 129.843-30.679C468.493 28.93 480 36.698 480 48.087V303.3z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-flag.js.map