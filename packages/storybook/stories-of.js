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
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { FelaDecorator, RouterDecorator } from './decorator';
import { createComponent } from 'react-fela';
var Container = createComponent(function (_a) {
    var customStyle = _a.customStyle;
    return (__assign({ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eeeeee', '> div': {
            width: '100%',
            '> div': {
                display: 'flex',
                justifyContent: 'center',
            },
        } }, customStyle));
}, 'div', function (_a) {
    var customStyle = _a.customStyle, p = __rest(_a, ["customStyle"]);
    return Object.keys(p);
});
export default function (title, customStyle) { return function (subtitle, compFn, text) {
    return storiesOf(title, module)
        .addDecorator(withKnobs)
        .addDecorator(function (storyFn) {
        return customStyle = { customStyle:  || {} } >
            {}
            < /Container>);
    })
        .addDecorator(RouterDecorator)
        .addDecorator(FelaDecorator)
        .addWithInfo(subtitle, text, compFn, {
        styles: function (style) { return (__assign({}, style, { info: __assign({}, style.info, { maxWidth: 960, margin: '0 auto', padding: '.5rem' }) })); },
    });
}; };
//# sourceMappingURL=stories-of.js.map