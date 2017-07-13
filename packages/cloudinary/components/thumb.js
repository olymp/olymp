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
import { object, func, number, bool } from 'prop-types';
import { Icon } from 'antd';
import Image from './image';
import { createComponent } from 'olymp-fela';
var ImageContainer = createComponent(function (_a) {
    var theme = _a.theme, isActive = _a.isActive;
    return ({
        position: 'relative',
        margin: '.5rem',
        padding: 1,
        cursor: 'pointer',
        transition: 'all .1s ease-in-out',
        backgroundColor: isActive ? theme.color : '#FFF',
        border: isActive ? "1px solid " + theme.color : '1px solid #ddd',
        '> div': {
            opacity: isActive ? 0.6 : 1,
        },
        ':hover': {
            transform: 'scale(1.025)',
            transition: 'all .1s ease-in-out',
        },
    });
}, 'div', function (_a) {
    var height = _a.height, isActive = _a.isActive, p = __rest(_a, ["height", "isActive"]);
    return Object.keys(p);
});
var ImageLabel = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        position: 'absolute',
        top: '50%',
        right: '50%',
        transform: 'translate(50%, -50%)',
        transition: 'all .15s ease-in-out',
        backgroundColor: theme.color,
        color: '#FFF',
        borderRadius: '50%',
        textAlign: 'center',
        fontSize: 25,
        padding: 5,
        lineHeight: 1,
    });
}, 'span', function (p) { return Object.keys(p); });
var CheckLabel = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        position: 'absolute',
        top: 0,
        right: 0,
        transform: 'translate(40%, -40%) scale(0.667)',
        transition: 'all .15s ease-in-out',
        backgroundColor: theme.color,
        color: '#FFF',
        borderRadius: '50%',
        textAlign: 'center',
        fontSize: 25,
        padding: 5,
        lineHeight: 1,
    });
}, 'span', function (p) { return Object.keys(p); });
var CloseLabel = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        ':hover': {
            transform: 'translate(40%, -40%) scale(0.75)',
            transition: 'all .15s ease-in-out',
        },
    });
}, CheckLabel, function (p) { return Object.keys(p); });
var Thumb = function (_a) {
    var item = _a.item, onClick = _a.onClick, onRemove = _a.onRemove, isActive = _a.isActive, height = _a.height;
    return item
        ? React.createElement(ImageContainer, { isActive: isActive },
            React.createElement(Image, { value: item, height: height, onClick: onClick }),
            item.format === 'pdf'
                ? React.createElement(ImageLabel, null,
                    React.createElement(Icon, { type: "file-pdf" }))
                : undefined,
            isActive
                ? onRemove
                    ? React.createElement(CloseLabel, { onClick: onRemove },
                        React.createElement(Icon, { type: "close" }))
                    : React.createElement(CheckLabel, null,
                        React.createElement(Icon, { type: "check" }))
                : undefined)
        : null;
};
Thumb.propTypes = {
    item: object,
    onClick: func,
    onRemove: func,
    height: number,
    isActive: bool,
};
export default Thumb;
//# sourceMappingURL=thumb.js.map