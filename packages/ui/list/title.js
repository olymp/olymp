import React from 'react';
import { createComponent } from 'olymp-fela';
export default createComponent(function (_a) {
    var theme = _a.theme, noBorder = _a.noBorder, color = _a.color, center = _a.center;
    return ({
        padding: '5px 6px',
        borderBottom: noBorder || '1px solid #e9e9e9',
        fontSize: '1.17em',
        fontWeight: 200,
        color: color || theme.color,
        textAlign: center ? 'center' : undefined,
        '> div': {
            float: 'right',
        },
    });
}, function (_a) {
    var className = _a.className, children = _a.children, buttons = _a.buttons;
    return (React.createElement("div", { className: className },
        children,
        React.createElement("div", null, buttons)));
}, function (p) { return Object.keys(p); });
//# sourceMappingURL=title.js.map