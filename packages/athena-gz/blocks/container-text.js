var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import Container from './container';
export default __assign({}, Container, { key: 'GZK.Template.ContainerTextBlock', label: 'Container Text', category: 'Template', styles: function (_a) {
        var theme = _a.theme, _b = _a.color, color = _b === void 0 ? theme.color : _b;
        return (__assign({}, Container.styles({ theme: theme, color: color }), { maxWidth: '100%', ifMediumUp: {
                width: 400,
            }, ifLargeUp: {
                width: 520,
            }, ifHugeUp: {
                width: 640,
            } }));
    } });
//# sourceMappingURL=container-text.js.map