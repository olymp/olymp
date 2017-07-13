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
        React.createElement("path", { d: "M560.8 329.8l-94.6-88.7c-2.4-2.3-6.2-2.1-8.5.3L444.1 256c-2.3 2.4-2.1 6.2.3 8.5l59.3 55.6H388.2l-32 64H219.8l-32-64H72.4l59.3-55.6c2.4-2.3 2.5-6.1.3-8.5l-13.7-14.6c-2.3-2.4-6.1-2.5-8.5-.3l-94.6 88.7c-9.7 9-15.2 21.7-15.2 35V464c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48v-99.2c0-13.3-5.5-26-15.2-35zM544 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h120l32 64h176l32-64h120c8.8 0 16 7.2 16 16v96zM416 128h-64V24c0-13.2-10.8-24-24-24h-80c-13.2 0-24 10.8-24 24v104h-64c-28.4 0-42.8 34.5-22.6 54.6l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c20-20.1 5.8-54.6-22.7-54.6zM288 288L160 160h96V32h64v128h96L288 288z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-inbox-in.js.map