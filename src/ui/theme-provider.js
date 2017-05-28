import { ThemeProvider } from 'react-fela';
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
}

getShadow
getInnerShadow
getBorder(theme.color)
getGradient(theme.color)
getColor(theme.color)
getColor('muted', theme.color)
getSpace(1)
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

const getTheme = (theme) => {
  return {
    getColor: (type, color) => {
      if (!color && !COLOR_TYPE[type]) { // if no second argument and first not a type
        color = type;
        type = null;
      }
      if (!type) return theme[color];
      if (!color) return theme[type];
      return null; // TODO: return color depending on type+color
    },
    ...theme,
  };
};

export default ({ theme, ...rest }) => (
  <ThemeProvider theme={getTheme(theme)} {...rest} />
);
