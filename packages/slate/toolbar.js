var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { createComponent } from 'react-fela';
export var Button = createComponent(function (_a) {
    var theme = _a.theme, active = _a.active;
    return ({
        paddingX: 20,
        '> svg': {
            fill: active ? theme.light : theme.light2,
            size: 16,
            marginBottom: -4,
        },
        '> div > svg': {
            fill: active ? theme.light : theme.light2,
            size: 16,
            marginBottom: -4,
        }
    });
}, function (_a) {
    var onMouseDown = _a.onMouseDown, tooltip = _a.tooltip, children = _a.children, className = _a.className;
    return onMouseDown = { onMouseDown: onMouseDown };
}, className = { className: className } >
    placement, "bottom", title = { tooltip:  || '' } >
    { children: children }
    < /Tooltip>
    < /div>), p => Object.keys(p)););
var Close = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        position: 'absolute!important',
        right: 0,
    });
}, function (p) { return (__assign({}, p) /  > ); }, function (p) { return Object.keys(p); });
export default createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        position: 'fixed',
        top: 0,
        zIndex: 10,
        width: '100%',
        boxShadow: 'inset 0 -10px 10px -10px #000000',
        paddingX: theme.space2,
        justifyContent: 'center',
        display: 'flex',
        '> li': {
            padding: 0,
        },
    });
}, function (props) {
    var isOpened = props.isOpened, className = props.className, children = props.children, show = props.show;
    if (!isOpened) {
        return />;;
    }
    return isOpened = {};
    isOpened;
},  >
    style, {}, show ? { display: 'none' } : null, selectedKeys = (_a = {}, _a[] = , _a), className = { className: className }, mode = "horizontal", theme = "dark" >
    { children: children }
    < Close >
    type, "close" /  >
    /Close>
    < /Menu>
    < /Portal>);
(function (p) { return Object.keys(p); });
;
var _a;
//# sourceMappingURL=toolbar.js.map