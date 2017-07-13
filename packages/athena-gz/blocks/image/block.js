var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { fade } from 'olymp-fela';
import { createBlockList } from 'olymp-slate';
import { Blocks } from 'olymp-pages';
import Image from './image';
export var ImageStyles = function (_a) {
    var theme = _a.theme, _b = _a.color, color = _b === void 0 ? theme.color : _b;
    return ({
        position: 'relative',
        overflow: 'hidden',
        '> div:nth-child(2)': {
            backgroundColor: fade(color, 90),
            color: theme.light,
            '> h1': {
                color: theme.light,
            },
            '> h2': {
                color: theme.light,
            },
            '> h3': {
                color: theme.light,
            },
            '> p': {
                color: theme.light,
            },
        },
        '> div:nth-child(1)': {
            onAfter: {
                content: '""',
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 100,
                height: 100,
                zIndex: 5,
                backgroundImage: 'url(/img/edge.png)',
                backgroundSize: 'cover',
                ifSmallDown: {
                    width: 50,
                    height: 50,
                },
            },
        },
        ifMediumUp: {
            '> div:nth-child(1) > div > div > img': {
                borderBottomRightRadius: 100,
            },
            '> div:nth-child(2)': {
                width: '66%',
                left: 'auto',
                right: 0,
                backgroundColor: fade(color, 90),
                borderTopLeftRadius: 50,
                borderBottomRightRadius: 100,
                minHeight: 100,
                padding: '1rem 2rem',
            },
        },
        ifSmallDown: {
            paddingX: theme.space2,
            paddingY: theme.space1,
            '> div:nth-child(1) > div > div > img': {
                borderBottomRightRadius: 50,
            },
            '> div:nth-child(2)': {
                width: 'calc(100% - 1rem)',
                borderRadius: theme.borderRadius,
                margin: theme.space2,
                marginBottom: 0,
                padding: theme.space2,
                textAlign: 'center',
                '> h1': {
                    fontSize: '1.3rem',
                },
                '> h2': {
                    fontSize: '1.3rem',
                },
                '> h3': {
                    fontSize: '1.3rem',
                },
            },
        },
    });
};
export default {
    key: 'GZK.Header.ImageBlock',
    label: 'Bild',
    category: 'Kopfleiste',
    editable: true,
    styles: ImageStyles,
    defaultNodes: function () { return createBlockList([Image, Blocks.ImageBlockLabel]); },
    component: function (_a) {
        var className = _a.className, children = _a.children, attributes = _a.attributes;
        return (React.createElement("div", __assign({ className: className }, attributes), children));
    },
};
//# sourceMappingURL=block.js.map