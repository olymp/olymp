var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { ThemeProvider as FelaThemeProvider } from 'react-fela';
var getTheme = function (theme) { return (__assign({ color: '#8e44ad', colorSecondary: '#e67e22', colorSuccess: '#2ecc71', colorInfo: '#3498db', colorWarning: '#f39c12', colorDanger: '#e74c3c', colorMuted: '#bdc3c7', light: '#FFFFFF', light1: 'rgba(255, 255, 255, 0.85)', light2: 'rgba(255, 255, 255, 0.7)', light3: 'rgba(255, 255, 255, 0.5)', light4: 'rgba(255, 255, 255, 0.12)', light5: 'rgba(255, 255, 255, 0.05)', dark: 'rgba(0, 0, 0, 0.87)', dark1: 'rgba(0, 0, 0, 0.7)', dark2: 'rgba(0, 0, 0, 0.54)', dark3: 'rgba(0, 0, 0, 0.38)', dark4: 'rgba(0, 0, 0, 0.12)', dark5: 'rgba(0, 0, 0, 0.05)', space0: 0, space1: '0.25rem', space2: '0.5rem', space3: '1rem', space4: '2rem', space5: '4rem', borderWidth: 1, borderStyle: 'solid', borderRadius: '0.25rem', borderColor: 'rgba(0, 0, 0, 0.12)', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px', innerShadow: 'inset 0px 0px 10px 0px rgba(0, 0, 0, 0.15)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontSize: '1rem', fontSizeSmall: '0.9rem', fontSizeH1: '1.6rem', fontSizeH2: '1.5rem', fontSizeH3: '1.4rem', fontSizeH4: '1.33rem', fontSizeH5: '1.2rem', fontSizeH6: '0.9rem' }, theme)); };
export default function (_a) {
    var children = _a.children, theme = _a.theme;
    return (React.createElement(FelaThemeProvider, { theme: getTheme(theme) }, children));
};
//# sourceMappingURL=theme-provider.js.map