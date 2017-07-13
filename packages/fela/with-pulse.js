var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { createComponent } from 'react-fela';
export default function (WrappedComponent) {
    return createComponent(function () { return ({
        animationName: {
            '0%': {
                opacity: 0.8,
            },
            '50%': {
                opacity: 0.4,
            },
            '100%': {
                opacity: 0.8,
            },
        },
        animationDuration: '1.5s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
    }); }, function (props) { return React.createElement(WrappedComponent, __assign({}, props)); }, function (props) { return Object.keys(props); });
};
//# sourceMappingURL=with-pulse.js.map