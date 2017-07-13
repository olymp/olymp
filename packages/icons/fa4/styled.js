import { createComponent } from 'olymp-fela';
export default function (Wrapped) {
    return createComponent(function (_a) {
        var theme = _a.theme, color = _a.color;
        return ({
            fill: color === true
                ? theme.color
                : typeof color === 'string' ? color : 'rgba(0, 0, 0, 0.85)',
        });
    }, Wrapped, ['width', 'height', 'size', 'onClick']);
};
//# sourceMappingURL=styled.js.map