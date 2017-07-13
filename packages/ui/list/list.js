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
    var side = _a.side, width = _a.width;
    return ({
        position: 'relative',
        overflow: 'hidden',
        width: width || 300,
        borderRight: side === 'left' && '1px solid rgb(233, 233, 233)',
        borderLeft: side === 'right' && '1px solid rgb(233, 233, 233)',
        backgroundColor: 'rgba(0, 0, 0, 0.015)',
        onBefore: {
            content: "'>'",
            position: 'absolute',
            top: '45%',
            right: side === 'left' && -26,
            left: side === 'right' && -26,
            fontSize: 30,
            fontWeight: 'bold',
            opacity: 0.2,
        },
    });
}, 'div', function (_a) {
    var side = _a.side, p = __rest(_a, ["side"]);
    return Object.keys(p);
});
//# sourceMappingURL=list.js.map