var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { Badge as AntBadge } from 'antd';
import { createComponent } from 'olymp-fela';
export var Badge = createComponent(function (_a) {
    var theme = _a.theme, color = _a.color;
    return ({
        '> .ant-badge-status-default': {
            backgroundColor: color || theme.color,
        },
    });
}, AntBadge, function (_a) {
    var color = _a.color, p = __rest(_a, ["color"]);
    return Object.keys(p);
});
Badge.defaultProps = {
    status: 'default',
};
//# sourceMappingURL=badge.js.map