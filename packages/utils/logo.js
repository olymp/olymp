import tinycolor from 'tinycolor2';
import { createComponent } from 'react-fela';
export default createComponent(function (_a) {
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? 100 : _b, padding = _a.padding, margin = _a.margin;
    return ({
        width: size,
        height: Math.round(size / 100 * 79),
        padding: padding,
        margin: margin,
        '& stop:first-child': {
            stopColor: tinycolor(theme.color).lighten(8).spin(6).toRgbString(),
        },
        '& stop:last-child': {
            stopColor: tinycolor(theme.color).darken(4).spin(-3).toRgbString(),
        },
    });
}, function (_a) {
    var className = _a.className;
    return className = { className: className };
}, viewBox = "0 0 1000 790", version = "1.1" >
    Olymp < /title>
    < desc > Olymp, mono, repo < /desc>
    < defs >
    x1, "50%", y1 = "0%", x2 = "50%", y2 = "100%", id = "linearGradient-1"
    >
        stopColor, "#FBDA61", offset = "0%" /  >
    stopColor, "#F76B1C", offset = "100%" /  >
    /linearGradient>
    < linearGradient, x1 = "15.7344472%", y1 = "-2.9713044%", x2 = "50%", y2 = "100%", id = "linearGradient-2"
    >
        stopColor, "#FFD022", offset = "0%" /  >
    stopColor, "#F76B1C", offset = "100%" /  >
    /linearGradient>
    < linearGradient, x1 = "82.6809405%", y1 = "0%", x2 = "50%", y2 = "100%", id = "linearGradient-3"
    >
        stopColor, "#FFD22A", offset = "0%" /  >
    stopColor, "#F76B1C", offset = "100%" /  >
    /linearGradient>
    < linearGradient, x1 = "8.79274861%", y1 = "3.8043752%", x2 = "50%", y2 = "100%", id = "linearGradient-4"
    >
        stopColor, "#FBDA61", offset = "0%" /  >
    stopColor, "#FC640E", offset = "100%" /  >
    /linearGradient>
    < /defs>
    < g, id = "Page-1", stroke = "none", strokeWidth = "1", fill = "none", fillRule = "evenodd"
    >
        id, "left", fillOpacity = "0.7", fill = "url(#linearGradient-1)", opacity = "0.7", points = "0 580 300.446897 60 500 790"
    /  >
    id, "inner-left", fillOpacity = "0.6", fill = "url(#linearGradient-2)", points = "1000 580 300 60 500 790"
    /  >
    id, "right", fillOpacity = "0.8", fill = "url(#linearGradient-3)", opacity = "0.7", transform = "translate(750.000000, 395.000000) scale(-1, 1) translate(-750.000000, -395.000000) ", points = "500 580 800 0 1000 790"
    /  >
    id, "inner-right", fillOpacity = "0.6", fill = "url(#linearGradient-4)", transform = "translate(349.998596, 395.000000) scale(-1, 1) translate(-349.998596, -395.000000) ", points = "700 579.999802 -0.00280761719 0 199.997192 790"
    /  >
    /g>
    < /svg>),, function (p) { return Object.keys(p); });
//# sourceMappingURL=logo.js.map