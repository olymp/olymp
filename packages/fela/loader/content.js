var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { Children } from 'react';
import { createComponent } from 'react-fela';
export var ContentLoaderStyles = {
    animationDuration: '1s',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    background: 'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)',
    backgroundSize: '200% 100%',
    animationName: {
        '0%': {
            backgroundPosition: '100% 0',
        },
        '100%': {
            backgroundPosition: '-100% 0',
        },
    },
};
export default createComponent(function (_a) {
    var height = _a.height, width = _a.width;
    return (__assign({ height: height || '100%', width: width || '100%' }, ContentLoaderStyles));
}, function (_a) {
    var className = _a.className, isLoading = _a.isLoading, children = _a.children;
    if (isLoading) {
        return React.createElement("div", { className: className });
    }
    if (children) {
        return Children.only(children);
    }
    return null;
}, function (props) { return Object.keys(props); });
//# sourceMappingURL=content.js.map