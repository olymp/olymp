import tinycolor from 'tinycolor2';
export var lighten = function (color, percent) {
    return tinycolor(color).lighten(percent || 8).toRgbString();
};
export var darken = function (color, percent) {
    return tinycolor(color).darken(percent || 4).toRgbString();
};
export var spin = function (color, deg) {
    return tinycolor(color).spin(deg || 180).toRgbString();
};
export var fade = function (color, percent) {
    return tinycolor(color).setAlpha(percent / 100 || 0.67).toRgbString();
};
export var border = function (theme, color) {
    return theme.borderWidth + "px " + theme.borderStyle + " " + (color || theme.borderColor);
};
export var boxShadow = function (color, intense) {
    if (color === void 0) { color = 'rgba(0, 0, 0, 0.1)'; }
    if (intense === void 0) { intense = 10; }
    return "0px 0px " + intense + "px 0px " + tinycolor(color).toRgbString();
};
export var innerShadow = function (color) { return "inset " + boxShadow(color); };
export var gradient = function (color1, color2, deg) {
    var tColor1 = tinycolor(lighten(color1)).spin(6);
    var tColor2 = tinycolor(darken(color1)).spin(-3);
    var tDeg = deg || 90;
    if (typeof color2 === 'string') {
        tColor1 = tinycolor(color1);
        tColor2 = tinycolor(color2);
    }
    else if (!deg && color2 === parseInt(color2, 10)) {
        tDeg = color2;
    }
    return "linear-gradient(" + (tDeg +
        90) + "deg, " + tColor1.toRgbString() + " 0%, " + tColor2.toRgbString() + " 100%)";
};
//# sourceMappingURL=utils.js.map