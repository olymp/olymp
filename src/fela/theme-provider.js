import { ThemeProvider as FelaThemeProvider } from 'react-fela';
import React from 'react';

const getTheme = theme => ({
  // Colors
  color: '#8e44ad',
  colorSecondary: '#e67e22',
  colorSuccess: '#2ecc71',
  colorInfo: '#3498db',
  colorWarning: '#f39c12',
  colorDanger: '#e74c3c',
  colorMuted: '#bdc3c7',
  light: '#FFFFFF',
  light1: 'rgba(255, 255, 255, 0.85)',
  light2: 'rgba(255, 255, 255, 0.7)',
  light3: 'rgba(255, 255, 255, 0.5)',
  light4: 'rgba(255, 255, 255, 0.12)',
  dark: 'rgba(0, 0, 0, 0.87)',
  dark1: 'rgba(0, 0, 0, 0.7)',
  dark2: 'rgba(0, 0, 0, 0.54)',
  dark3: 'rgba(0, 0, 0, 0.38)',
  dark4: 'rgba(0, 0, 0, 0.12)',

  // Spaces
  space0: 0,
  space1: '0.25rem',
  space2: '0.5rem',
  space3: '1rem',
  space4: '2rem',
  space5: '4rem',

  // Borders
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: '0.25rem',
  borderColor: 'rgba(0, 0, 0, 0.12)',

  // Shadows
  shadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.08)',
  innerShadow: 'inset 0px 0px 10px 0px rgba(0, 0, 0, 0.15)',
  /*boxShadowLeft: '0px 3px 6px 0px rgba(0, 0, 0, 0.08)',
  boxShadowRight: '0px 3px 6px 0px rgba(0, 0, 0, 0.08)',
  boxShadowTop: '0px 3px 6px 0px rgba(0, 0, 0, 0.08)',
  boxShadowBottom: '0px 3px 6px 0px rgba(0, 0, 0, 0.08)',*/

  // Font
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontSize: '1rem',
  fontSizeSmall: '0.9rem',
  fontSizeH1: '1.6rem',
  fontSizeH2: '1.5rem',
  fontSizeH3: '1.4rem',
  fontSizeH4: '1.33rem',
  fontSizeH5: '1.2rem',
  fontSizeH6: '0.9rem',
  ...theme,
});

export default ({ theme, ...rest }) => (
  <FelaThemeProvider theme={getTheme(theme)} {...rest} />
);

