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
        React.createElement("path", { d: "M506 240h-34.591C463.608 133.462 378.538 48.392 272 40.591V6a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v34.591C133.462 48.392 48.392 133.462 40.591 240H6a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h34.591C48.392 378.538 133.462 463.608 240 471.409V506a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6v-34.591C378.538 463.608 463.608 378.538 471.409 272H506a6 6 0 0 0 6-6v-20a6 6 0 0 0-6-6zM272 439.305V374a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v65.305C151.282 431.711 80.315 361.031 72.695 272H138a6 6 0 0 0 6-6v-20a6 6 0 0 0-6-6H72.695C80.289 151.282 150.969 80.316 240 72.695V138a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V72.695C360.718 80.289 431.685 150.969 439.305 240H374a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h65.305C431.711 360.718 361.031 431.684 272 439.305zM280 256c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-crosshairs.js.map