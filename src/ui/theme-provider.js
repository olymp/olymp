import { ThemeProvider } from 'react-fela';
import tinycolor from 'tinycolor2';
import React from 'react';

// todo
// color: {primary, accent, success, info, warning, danger, muted}
  // color.primary.getPrimaryText() = Gibt je nach Hintergrund (hier primary) helle oder dunkle Schriftfarbe zurück https://material.io/guidelines/style/color.html#color-usability
  // color.primary.getSecondaryText() = Gibt je nach Hintergrund (hier primary) helle oder dunkle Schriftfarbe zurück https://material.io/guidelines/style/color.html#color-usability
  // color.primary.getMutedText() = Gibt je nach Hintergrund (hier primary) helle oder dunkle Schriftfarbe zurück https://material.io/guidelines/style/color.html#color-usability
  // color.primary.getLight(percent = 4%) = Gibt hellere Farbe zurück
  // color.primary.getDark(percent = 4%) = Gibt dunklere Farbe zurück
  // color.primary.getNuance(grad = 180°) = Gibt spin der Farbe zurück
  // color.primary.getGradient(grad = 45°, color = undefined) = Gibt Gradient der Farbe zurück
// space: {d0, d1, d2 ... d5} (d = dynamisch = x rem) https://v4-alpha.getbootstrap.com/utilities/spacing/
// fontSize: {primary, small}
// boxShadows: normal und inner
// textColorLight/Dark
// borderWidth/Style/Radius => getBorder(color) => `${theme.borderWidth} ${theme.borderStyle} ${color}`

/*
PRIMARY, SECONDARY, SUCCESS, INFO, WARNING, DANGER, MUTED

theme: {
  space: INT | [INT]
  fontSize: INT | [INT (default), INT (h1), INT (h2), INT (h3), INT (h4), INT (h5), INT (h6), INT (small)]
  borderWidth: INT (pixel)
  borderStyle: BORDER_STYLE
  borderRadius: INT (pixel)
  color: STRING
  colorSuccess: STRING
  textColorLight: STRING
  textColorDark: STRING
}

getShadow
getInnerShadow
getBorder(theme.color)
getGradient(theme.color)
getColor(theme.color)
getColor('muted', theme.color)
getLight(theme.color, 2)
getDark(theme.color, 2)
getSpin(theme.color, 2)

*/
export const COLOR_TYPE = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  SUCCESS: 'SUCCESS',
  INFO: 'INFO',
  WARNING: 'WARNING',
  DANGER: 'DANGER',
  MUTED: 'MUTED',
};

export const TEXT_TYPE = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  MUTED: 'MUTED',
};

const getTheme = ({ color, textColor, ...rest }) => {
  const theme = {
    color: {
      primary: '#8e44ad',
      secondary: '#e67e22',
      success: '#2ecc71',
      info: '#3498db',
      warning: '#f39c12',
      danger: '#e74c3c',
      muted: '#bdc3c7',
      ...color,
    },
    textColor: {
      light: '#FFFFFF',
      dark: '#000000',
      ...textColor,
    },
    ...rest
  };

  return {
    getColor: color => theme.color[color] || theme.color.primary,
    getTextColor: (type, bgColor) => {
      let newType = TEXT_TYPE[type];
      let newColor = bgColor;

      if (!bgColor && !TEXT_TYPE[type]) { // if no second argument and first not a type
        newColor = type;
        newType = 'PRIMARY';
      }

      const textColors = Object.keys(theme.textColor).map(color => theme.textColor[color]);
      const color = tinycolor.mostReadable(newColor, textColors);

      switch (newType) {
        case 'SECONDARY':
          return color.isDark() ?
            color.setAlpha(0.46).toRgbString()
              : color.setAlpha(0.3).toRgbString();

        case 'MUTED':
          return color.isDark() ?
            color.setAlpha(0.62).toRgbString()
              : color.setAlpha(0.5).toRgbString();

        default:
          return color.isDark() ?
            color.setAlpha(0.13).toRgbString()
              : color.toRgbString();
      }
    },
    getSpace: space => `${0.25 * ((2 ** space) - 1)}.rem`,
    ...theme,
  };
};

export default ({ theme, ...rest }) => (
  <ThemeProvider theme={getTheme(theme)} {...rest} />
);
