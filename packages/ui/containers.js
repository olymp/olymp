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
import { createComponent, border } from 'olymp-fela';
export var SplitView = createComponent(function (_a) {
    var theme = _a.theme, deviceWidth = _a.deviceWidth, center = _a.center, background = _a.background;
    return ({
        display: 'flex',
        flex: '1 1 0%',
        background: background === true &&
            'linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.033))',
        '> :first-child': {
            flexGrow: 0,
            overflowY: 'auto',
        },
        '> :nth-child(2)': {
            flexGrow: 1,
            overflowY: 'auto',
            margin: center && '0 auto',
            borderX: center && border(theme),
            maxWidth: deviceWidth,
            maxHeight: '100%',
        },
    });
}, 'div', function (_a) {
    var deviceWidth = _a.deviceWidth, center = _a.center, background = _a.background, p = __rest(_a, ["deviceWidth", "center", "background"]);
    return Object.keys(p);
});
export var Panel = createComponent(function (_a) {
    var display = _a.display, axis = _a.axis, show = _a.show, alignLabel = _a.alignLabel, rest = __rest(_a, ["display", "axis", "show", "alignLabel"]);
    return (__assign({ position: 'relative', overflowY: 'auto', display: show === false ? 'none' : display, flexDirection: axis === 'x' ? 'row' : axis === 'y' ? 'column' : undefined, '> *': display === 'flex' && {
            overflowY: 'auto',
        } }, rest, { '& .ant-form-item': alignLabel && {
            marginBottom: 12,
            '> .ant-form-item-label': {
                textAlign: alignLabel,
            },
        } }));
}, 'div', ['children', 'itemScope', 'itemType']);
export var Container = createComponent(function (_a) {
    var theme = _a.theme, width = _a.width, padding = _a.padding, minHeight = _a.minHeight, height = _a.height;
    return ({
        width: width || 700,
        maxWidth: width || 700,
        height: height,
        minHeight: minHeight,
        boxShadow: theme.boxShadow,
        marginX: 'auto',
        padding: padding !== undefined ? padding : theme.space3,
        backgroundColor: '#FFFFFF',
        position: 'relative',
    });
}, 'div', function (_a) {
    var width = _a.width, minHeight = _a.minHeight, padding = _a.padding, p = __rest(_a, ["width", "minHeight", "padding"]);
    return Object.keys(p);
});
export var Placeholder = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        textAlign: 'center',
        fontWeight: 200,
        fontSize: '200%',
        opacity: 0.5,
        top: '50%',
        left: '50%',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
    });
}, 'div', function (p) { return Object.keys(p); });
//# sourceMappingURL=containers.js.map