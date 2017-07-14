var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { createComponent } from 'olymp-fela';
import { Button as AntButton } from 'antd';
var Button = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'block!important',
        paddingTop: 1,
        backgroundColor: theme.light,
        color: theme.dark2,
    });
}, function (p) { return React.createElement(AntButton, __assign({ size: "large" }, p)); }, function (p) { return Object.keys(p); });
export default Button;
//# sourceMappingURL=button.js.map