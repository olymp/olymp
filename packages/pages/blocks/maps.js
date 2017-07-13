var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { createComponent } from 'olymp-fela';
import { Maps } from 'olymp-google';
var MapContainer = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        width: '100%',
        height: 300,
        position: 'relative',
        display: 'block',
    });
}, function (_a) {
    var attributes = _a.attributes, className = _a.className;
    return (React.createElement("div", { className: className },
        React.createElement(Maps, __assign({ center: { lat: 59.724465, lng: 30.080121 }, zoom: 1, options: function () { return ({
                panControl: false,
                mapTypeControl: false,
                zoomControl: false,
                scrollwheel: false,
                gestureHandling: 'none',
            }); } }, attributes),
            React.createElement(Maps.Marker, { lat: 59.724465, lng: 30.080121 }))));
}, function (p) { return Object.keys(p); });
export default {
    key: 'Pages.Media.MapsBlock',
    label: 'Karte',
    category: 'Medien',
    editable: false,
    component: MapContainer,
};
//# sourceMappingURL=maps.js.map