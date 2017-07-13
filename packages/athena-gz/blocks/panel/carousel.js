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
import { createComponent, Grid, fade } from 'olymp-fela';
import { Carousel, H2 } from '../../components';
export default createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        '> .image-gallery': {
            width: '100%',
            '> .image-gallery-content': {
                '> .image-gallery-slide-wrapper': {
                    position: 'relative',
                    onAfter: {
                        content: '""',
                        position: 'absolute',
                        width: 33,
                        height: 33,
                        backgroundColor: theme.dark4,
                        bottom: 0,
                        borderTopLeftRadius: 30,
                        right: 0,
                    },
                    onHover: {
                        onAfter: {
                            backgroundColor: fade(theme.color),
                        },
                    },
                    '> .image-gallery-swipe': {
                        '> .image-gallery-slides': {
                            borderBottomRightRadius: 100,
                            ifSmallDown: {
                                borderBottomRightRadius: 50,
                            },
                        },
                    },
                },
                '> .image-gallery-thumbnails-wrapper': {
                    '> .image-gallery-thumbnails': {
                        '> .image-gallery-thumbnails-container': {
                            '> .image-gallery-thumbnail': {
                                borderTopLeftRadius: '67%',
                                overflow: 'hidden',
                                width: 60,
                                borderWidth: 0,
                            },
                            '> .active': {
                                backgroundColor: theme.color,
                                '> div': {
                                    '> img': {
                                        opacity: 0.67,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    });
}, function (_a) {
    var className = _a.className, title = _a.title, size = _a.size, p = __rest(_a, ["className", "title", "size"]);
    return (React.createElement(Grid.Item, { mini: 12, medium: size, className: className, paddingMini: "0.5rem 1rem", paddingMedium: "0 1rem" },
        React.createElement(H2, null, title),
        React.createElement(Carousel, __assign({ slideInterval: 7500, ratio: 0.33 * size, radius: "0:0:400", thumbRadius: "100:0:0" }, p))));
}, function (p) { return Object.keys(p); });
//# sourceMappingURL=carousel.js.map