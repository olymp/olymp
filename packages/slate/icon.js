import React from 'react';
import { createComponent } from 'react-fela';
export default createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        marginTop: 3,
        marginBottom: -3,
        display: 'block',
        '> svg': {
            fill: theme.light2,
        },
        onHover: {
            '> svg': {
                fill: theme.light,
            },
        },
    });
}, function (_a) {
    var className = _a.className, Icon = _a.icon;
    return (React.createElement("span", { className: className },
        React.createElement(Icon, { size: 14, color: "" })));
}, function (p) { return Object.keys(p); });
//# sourceMappingURL=icon.js.map