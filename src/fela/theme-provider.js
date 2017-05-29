import { ThemeProvider as FelaThemeProvider } from 'react-fela';
import React from 'react';

const getTheme = theme => ({
  color: '#8e44ad',
  colorSecondary: '#e67e22',
  colorSuccess: '#2ecc71',
  colorInfo: '#3498db',
  colorWarning: '#f39c12',
  colorDanger: '#e74c3c',
  colorMuted: '#bdc3c7',
  textColor: '#333333',
  textColorLight: '#FFFFFF',
  textColorDark: '#000000',
  space0: 0,
  space1: '0.25rem',
  space2: '0.5rem',
  space3: '1rem',
  space4: '2rem',
  space5: '4rem',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: '0.25rem',
  borderColor: 'rgba(0, 0, 0, 0.12)',
  fontSize: '1rem',
  fontSizeSmall: '1rem',
  fontSizeH1: '1rem',
  fontSizeH2: '1rem',
  fontSizeH3: '1rem',
  fontSizeH4: '1rem',
  fontSizeH5: '1rem',
  fontSizeH6: '1rem',
  ...theme,
});

export default ({ theme, ...rest }) => (
  <FelaThemeProvider theme={getTheme(theme)} {...rest} />
);

