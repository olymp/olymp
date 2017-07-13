var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { Blocks } from 'olymp-pages';
import { createComponent } from 'olymp-fela';
import { Maps } from 'olymp-google';
import { ImageStyles } from './image/block';
var Label = Blocks.ImageBlockLabel.component;
var MapContainer = createComponent(function (_a) {
    var theme = _a.theme;
    return (__assign({ width: '100%', height: 300, position: 'relative', display: 'block', '> div > div > div > div': {
            borderBottomRightRadius: 100,
            overflow: 'hidden',
            ifSmallDown: {
                borderBottomRightRadius: 50,
            },
            '> div': {
                borderBottomRightRadius: 100,
                overflow: 'hidden',
                ifSmallDown: {
                    borderBottomRightRadius: 50,
                },
            },
        } }, ImageStyles({ theme: theme }), { ifSmallDown: __assign({}, ImageStyles({ theme: theme }).ifSmallDown, { height: 150 }) }));
}, function (_a) {
    var attributes = _a.attributes, className = _a.className, children = _a.children;
    return (React.createElement("div", __assign({ className: className }, attributes),
        React.createElement(Maps, { center: { lat: 50.13429468, lng: 8.45419139 }, zoom: 17, options: function () { return ({
                panControl: false,
                mapTypeControl: false,
                zoomControl: false,
                scrollwheel: false,
                gestureHandling: 'none',
            }); } },
            React.createElement(Maps.Marker, { lat: 50.13476404, lng: 8.45419139 })),
        React.createElement(Label, null, children)));
}, function (p) { return Object.keys(p); });
export default {
    key: 'GZK.Header.MapsBlock',
    label: 'Karte',
    category: 'Kopfleiste',
    editable: true,
    component: function (p) { return React.createElement(MapContainer, __assign({}, p)); },
};
//# sourceMappingURL=maps.js.map