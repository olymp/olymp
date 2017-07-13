import React from 'react';
import { createComponent } from 'olymp-fela';
var component = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: theme.space1 + " " + theme.space3,
        backgroundColor: theme.light2,
        color: theme.dark,
        '> p': {
            padding: 0,
            color: theme.dark2,
        },
        ifSmallDown: {
            position: 'relative',
            padding: theme.space2,
            backgroundColor: theme.dark5,
        },
    });
}, function (_a) {
    var className = _a.className, children = _a.children;
    return (React.createElement("div", { className: className }, children));
}, function (p) { return Object.keys(p); });
export default {
    key: 'Pages.Media.ImageBlock.Label',
    editable: true,
    component: component,
};
//# sourceMappingURL=label.js.map