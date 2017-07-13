var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { createComponent } from 'react-fela';
export default createComponent(function (_a) {
    var theme = _a.theme, height = _a.height, size = _a.size;
    return ({
        minHeight: 30,
        height: height,
        position: 'relative',
        marginX: 'auto',
        onAfter: {
            content: '""',
            clear: 'both',
            display: 'block',
            visibility: 'hidden',
            height: 0,
        },
        ifMini: {
            width: '100%',
            paddingX: theme.space3,
        },
        ifSmallUp: {
            width: 540,
            maxWidth: '100%',
        },
        ifMediumUp: {
            width: 720,
            maxWidth: '100%',
        },
        ifLargeUp: {
            width: 960,
            maxWidth: '100%',
        },
        ifHugeUp: {
            width: 1140,
            maxWidth: '100%',
        },
        extend: [
            {
                condition: size === 'small',
                style: {
                    onAfter: {
                        content: '""',
                        clear: 'both',
                        display: 'block',
                        visibility: 'hidden',
                        height: 0,
                    },
                    ifMediumUp: {
                        width: 400,
                        maxWidth: '100%',
                    },
                    ifLargeUp: {
                        width: 520,
                        maxWidth: '100%',
                    },
                    ifHugeUp: {
                        width: 640,
                        maxWidth: '100%',
                    },
                },
            },
        ],
    });
}, 'div', function (_a) {
    var height = _a.height, p = __rest(_a, ["height"]);
    return Object.keys(p);
});
//# sourceMappingURL=container.js.map