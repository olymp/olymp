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
import { Image, SimpleImageEdit } from 'olymp-cloudinary';
import { createComponent } from 'olymp-fela';
import { FaPlus, FaMinus } from 'olymp-icons';
var Container = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        paddingY: theme.space3,
        display: 'flex',
        flexWrap: 'wrap',
        clearfix: true,
    });
}, 'div', function (p) { return Object.keys(p); });
var ImageContainer = createComponent(function (_a) {
    var theme = _a.theme, size = _a.size;
    var style = {
        paddingRight: theme.space3,
        paddingBottom: theme.space3,
        float: 'left',
        width: 100 / size + "%",
        minWidth: 100 / size + "%",
        display: 'flex',
    };
    style[":nth-child(" + size + "n)"] = { paddingRight: 0 };
    return style;
}, 'div', function (_a) {
    var size = _a.size, p = __rest(_a, ["size"]);
    return Object.keys(p);
});
export default {
    key: 'Pages.Media.Gallery',
    label: 'Galerie',
    category: 'Medien',
    component: function (_a) {
        var getData = _a.getData, setActive = _a.setActive, className = _a.className, attributes = _a.attributes;
        return (React.createElement(Container, __assign({}, attributes), getData('value', [
            {
                url: 'https://lorempixel.com/400/300/cats/',
                width: 400,
                height: 300,
            },
        ]).map(function (image, i) {
            return (React.createElement(ImageContainer, { size: getData('size', 4), key: image.id || i },
                React.createElement(Image, { className: className, onClick: setActive, width: "100%", value: image })));
        })));
    },
    styles: function (_a) {
        var getData = _a.getData;
        return ({
            float: getData('float', 'none'),
        });
    },
    actions: [
        {
            tooltip: function (getData) { return "Bilder " + (getData('value') ? 'wechseln' : 'wählen'); },
            component: function (_a) {
                var setData = _a.setData, getData = _a.getData, p = __rest(_a, ["setData", "getData"]);
                return (React.createElement(SimpleImageEdit, __assign({}, p, { onChange: function (value) { return setData({ value: value }); }, value: getData('value', []), multi: true })));
            },
            toggle: function () { },
        },
        {
            label: React.createElement(FaPlus, null),
            tooltip: 'Spalte hinzufügen',
            toggle: function (_a) {
                var setData = _a.setData, getData = _a.getData;
                var size = getData('size', 4);
                setData({
                    size: size < 8 ? size + 1 : 8,
                });
            },
        },
        {
            label: React.createElement(FaMinus, null),
            tooltip: 'Spalte entfernen',
            toggle: function (_a) {
                var setData = _a.setData, getData = _a.getData;
                var size = getData('size', 4);
                setData({
                    size: size > 1 ? size - 1 : 1,
                });
            },
        },
    ],
};
//# sourceMappingURL=gallery.js.map