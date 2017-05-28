import tinycolor from 'tinycolor2';

export const border = (theme, color) => `${theme.borderWidth}px ${theme.borderStyle} ${color || theme.color}`;
export const lighten = (color, percent) => tinycolor(color).lighten(percent || 8).toRgbString();
export const darken = (color, percent) => tinycolor(color).darken(percent || 4).toRgbString();
export const spin = (color, deg) => tinycolor(color).spin(deg || 180).toRgbString();
export const fade = (color, percent) => tinycolor(color).setAlpha(percent / 100 || 0.67).toRgbString();
export const shadow = color => `0px 0px 5px 0px ${tinycolor(color).toRgbString()}`;
export const innerShadow = color => `inset ${shadow(color)}`;
export const gradient = (color1, color2, deg) => {
  let tColor1 = tinycolor(lighten(color1)).spin(8);
  let tColor2 = tinycolor(darken(color1)).spin(-4);
  let tDeg = deg || 90;

  if (color2 && deg) { // color1, color2, deg
    tColor1 = tinycolor(color1);
    tColor2 = tinycolor(color2);
  } else if (!deg && color2 === parseInt(color2, 10)) { // color1, deg
    tDeg = color2;
  }

  return `linear-gradient(${tDeg + 90}deg, ${tColor1.toRgbString()} 0%, ${tColor2.toRgbString()} 100%)`;

  /* return `
    background: ${tColor1.toString()}; // Old browsers
    background: -moz-linear-gradient(${tDeg - 90}, ${tColor1.toRgbString()} 0%, ${tColor2.toRgbString()} 100%); // FF3.6-15
    background: -webkit-linear-gradient(${tDeg - 90}, ${tColor1.toRgbString()} 0%, ${tColor2.toRgbString()} 100%); // Chrome10-25,Safari5.1-6
    background: linear-gradient(${tDeg + 90}, ${tColor1.toRgbString()} 0%, ${tColor2.toRgbString()} 100%); // W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${tColor1.toString()}', endColorstr='${tColor2.toString()}',GradientType=1 ); // IE6-9 fallback on horizontal gradient
  `; */
};
