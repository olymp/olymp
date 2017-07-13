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
import { createComponent } from 'olymp-fela';
import ReactMap from 'google-map-react';
var defaultCenter = { lat: 59.938043, lng: 30.337157 };
var defaultZoom = 9;
var StyledMap = createComponent(function (_a) { return ({
    height: '100%',
    width: '100%',
    '& *': {
        overflow: 'visible',
    },
}); }, function (_a) {
    var className = _a.className, rest = __rest(_a, ["className"]);
    return (React.createElement("div", { className: className },
        React.createElement(ReactMap, __assign({}, rest))));
}, function (p) { return Object.keys(p); });
var Marker = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'block',
        fill: theme.color,
    });
}, function (_a) {
    var lat = _a.lat, lng = _a.lng, className = _a.className;
    return (React.createElement("svg", { className: className, width: 40, height: 40, viewBox: "0 0 1792 1792" },
        React.createElement("path", { d: "M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z" })));
}, function (p) { return Object.keys(p); });
var GoogleMap = function (_a) {
    var children = _a.children, center = _a.center, zoom = _a.zoom, key = _a.key, rest = __rest(_a, ["children", "center", "zoom", "key"]);
    return (React.createElement(StyledMap, __assign({ defaultCenter: defaultCenter, center: center, defaultZoom: defaultZoom, zoom: zoom, bootstrapURLKeys: { key: key } }, rest), children));
};
GoogleMap.defaultProps = {
    center: defaultCenter,
    zoom: defaultZoom,
    key: process.env.GM_KEY,
};
GoogleMap.Marker = Marker;
export default GoogleMap;
//# sourceMappingURL=maps.js.map