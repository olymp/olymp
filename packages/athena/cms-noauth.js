var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { AuthModals } from 'olymp-auth';
import { GatewayDest } from 'react-gateway';
import { PageRoute } from 'olymp-pages';
import { Lightbox } from 'olymp-cloudinary';
export default function (props) {
    var navigation = props.navigation, Wrapped = props.wrapper;
    return (React.createElement("div", null,
        React.createElement(Lightbox, null),
        React.createElement(AuthModals, null),
        React.createElement(GatewayDest, { name: "modal" }),
        React.createElement(PageRoute, __assign({}, props, { navigation: navigation, Wrapped: Wrapped }))));
};
//# sourceMappingURL=cms-noauth.js.map