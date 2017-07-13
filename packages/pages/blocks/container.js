var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
export default {
    key: 'Pages.Template.ContainerBlock',
    label: 'Container',
    category: 'Template',
    editable: true,
    component: function (_a) {
        var attributes = _a.attributes, className = _a.className, children = _a.children;
        return (__assign({}, attributes));
    }, className: className,
    actions: [
        {
            type: 'small',
            icon: 'align-left',
            label: 'Linksbündig',
            toggle: function (_a) {
                var setData = _a.setData;
                return setData({ alignment: 'left' });
            },
            active: function (_a) {
                var alignment = _a.alignment;
                return alignment === 'left';
            },
        },
    ],
};
//# sourceMappingURL=container.js.map