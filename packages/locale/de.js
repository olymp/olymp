var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import enUS from 'antd/lib/locale-provider/de_DE';
import AntLocaleProvider from 'antd/lib/locale-provider';
import { withLocale as withLocale2, LocaleProvider } from 'olymp-utils';
import dateLocale from 'date-fns/locale/de';
export default function (LANG) {
    if (LANG === void 0) { LANG = {}; }
    return function (WrappedComponent) { return function (props) {
        return (React.createElement(AntLocaleProvider, { locale: enUS },
            React.createElement(LocaleProvider, { locale: __assign({}, LANG, dateLocale) },
                React.createElement(WrappedComponent, __assign({}, props)))));
    }; };
};
export var withLocale = withLocale2;
//# sourceMappingURL=de.js.map