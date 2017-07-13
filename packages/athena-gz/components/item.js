var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { createComponent } from 'olymp-fela';
export default createComponent(function (_a) {
    var theme = _a.theme, _b = _a.color, color = _b === void 0 ? theme.color : _b, _c = _a.top, top = _c === void 0 ? theme.space3 : _c, _d = _a.bottom, bottom = _d === void 0 ? theme.space3 : _d;
    return ({
        width: '100%',
        marginTop: top,
        marginBottom: bottom,
        clearfix: true,
        '& a': {
            color: color,
            onHover: {
                textDecoration: 'underline',
            },
        },
        ':last-of-type': {
            marginBottom: 0,
        },
    });
}, 'div', function (_a) {
    var top = _a.top, bottom = _a.bottom, p = __rest(_a, ["top", "bottom"]);
    return Object.keys(p);
});
//# sourceMappingURL=item.js.map