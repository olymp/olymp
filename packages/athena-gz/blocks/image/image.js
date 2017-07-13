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
import { renderHelmet } from 'olymp-utils';
import { Image, SimpleImageEdit } from 'olymp-cloudinary';
export default {
    key: 'GZK.Header.ImageBlock.Image',
    component: function (_a) {
        var getData = _a.getData, setActive = _a.setActive, className = _a.className;
        return (React.createElement(Image, { className: className, onClick: setActive, width: "100%", maxHeight: 450, maxResolution: 500000, value: getData('value', {
                url: 'https://lorempixel.com/1000/300/cats/',
                width: 1000,
                height: 300,
            }) }, renderHelmet({ image: getData('value') })));
    },
    actions: [
        {
            component: function (_a) {
                var setData = _a.setData, getData = _a.getData, p = __rest(_a, ["setData", "getData"]);
                return (React.createElement(SimpleImageEdit, __assign({}, p, { onChange: function (value) { return setData({ value: value }); }, value: getData('value', {}), multi: false })));
            },
            toggle: function () { },
        },
    ],
};
//# sourceMappingURL=image.js.map