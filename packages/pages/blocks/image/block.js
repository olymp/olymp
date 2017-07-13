var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { createBlockList } from 'olymp-slate';
import Image from './image';
import Label from './label';
export default {
    key: 'Pages.Media.ImageBlock',
    defaultNodes: function () { return createBlockList([Image, Label]); },
    label: 'Bild mit Text',
    category: 'Medien',
    editable: true,
    component: function (_a) {
        var className = _a.className, children = _a.children, attributes = _a.attributes;
        return React.createElement("div", __assign({ className: className }, attributes), children);
    },
};
//# sourceMappingURL=block.js.map