import tinycolor from 'tinycolor2';

// COLOR-TRANSFORMATIONS
export const lighten = (color, percent) =>
  tinycolor(color).lighten(percent || 8).toRgbString();
export const darken = (color, percent) =>
  tinycolor(color).darken(percent || 4).toRgbString();
export const spin = (color, deg) =>
  tinycolor(color).spin(deg || 180).toRgbString();
export const fade = (color, percent) =>
  tinycolor(color).setAlpha(percent / 100 || 0.67).toRgbString();

// BORDERS
export const border = (theme, color) =>
  `${theme.borderWidth}px ${theme.borderStyle} ${color || theme.borderColor}`;

// SHADOWS
export const boxShadow = (color = 'rgba(0, 0, 0, 0.1)', intense = 10) =>
  `0px 0px ${intense}px 0px ${tinycolor(color).toRgbString()}`;
export const innerShadow = color => `inset ${boxShadow(color)}`;

export const gradient = (color1, color2, deg) => {
  let tColor1 = tinycolor(lighten(color1)).spin(6);
  let tColor2 = tinycolor(darken(color1)).spin(-3);
  let tDeg = deg || 90;

  if (typeof color2 === 'string') {
    // color1, color2, (deg)
    tColor1 = tinycolor(color1);
    tColor2 = tinycolor(color2);
  } else if (!deg && color2 === parseInt(color2, 10)) {
    // color1, deg
    tDeg = color2;
  }

  return `linear-gradient(${tDeg +
    90}deg, ${tColor1.toRgbString()} 0%, ${tColor2.toRgbString()} 100%)`;
};
