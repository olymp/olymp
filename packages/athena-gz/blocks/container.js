var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Blocks } from 'olymp-pages';
export default __assign({}, Blocks.ContainerBlock, { label: 'Container', category: 'Template', styles: function (_a) {
        var theme = _a.theme, _b = _a.color, color = _b === void 0 ? theme.color : _b;
        return ({
            '& h1': {
                textAlign: 'left',
                position: 'relative',
                marginTop: theme.space3,
                marginBottom: theme.space2,
                onAfter: {
                    content: '""',
                    bottom: -1,
                    display: 'block',
                    overflow: 'hidden',
                    height: 1,
                    left: 0,
                    position: 'absolute',
                    minWidth: 75,
                    width: '100%',
                    background: "linear-gradient(to right, " + (color || theme.color) + ", #FFF)",
                },
            },
            '& h2': {
                textAlign: 'left',
                position: 'relative',
                marginTop: theme.space3,
                marginBottom: theme.space2,
                onAfter: {
                    content: '""',
                    bottom: -1,
                    display: 'block',
                    overflow: 'hidden',
                    height: 1,
                    left: 0,
                    position: 'absolute',
                    minWidth: 75,
                    width: '100%',
                    background: "linear-gradient(to right, " + (color || theme.color) + ", #FFF)",
                },
            },
            '& a': {
                color: color,
            },
            '& p': {
                marginBottom: theme.space2,
            },
            '& li': {
                marginY: theme.space2,
                onBefore: {
                    content: '"■"',
                    color: color,
                    position: 'absolute',
                    left: "-" + theme.space3,
                },
            },
            '& blockquote': {
                display: 'block',
                position: 'relative',
                padding: theme.space3,
                paddingLeft: theme.space4,
                marginX: 'auto',
                marginY: theme.space3,
                fontFamily: 'Raleway, sans-serif',
                fontSize: '1.5rem',
                lineHeight: 1.2,
                borderLeft: "3px solid " + theme.color,
                color: theme.dark2,
                onBefore: {
                    content: '"\\201C"',
                    fontFamily: 'Times New Roman',
                    fontSize: '3rem',
                    fontWeight: 700,
                    color: theme.dark3,
                    position: 'absolute',
                    left: 8,
                    top: 0,
                },
            },
        });
    } });
//# sourceMappingURL=container.js.map