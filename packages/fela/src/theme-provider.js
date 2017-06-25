import React, { Component } from 'react';
import { ThemeProvider as FelaThemeProvider } from 'react-fela';
import { func } from 'prop-types';

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
  light5: 'rgba(255, 255, 255, 0.05)',
  dark: 'rgba(0, 0, 0, 0.87)',
  dark1: 'rgba(0, 0, 0, 0.7)',
  dark2: 'rgba(0, 0, 0, 0.54)',
  dark3: 'rgba(0, 0, 0, 0.38)',
  dark4: 'rgba(0, 0, 0, 0.12)',
  dark5: 'rgba(0, 0, 0, 0.05)',

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
  // boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.08)',
  boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
  innerShadow: 'inset 0px 0px 10px 0px rgba(0, 0, 0, 0.15)',

  // Font
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
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

export default class WithColorProvider extends Component {
  state = {
    colors: {},
    color: null,
  };
  static childContextTypes = {
    setColor: func,
  };
  getChildContext() {
    return {
      setColor: this.setColor,
    };
  }
  setColor = (id, color) => {
    if (!id) {
      return;
    }
    const colors = { ...this.state.colors };
    if (color) {
      this.setState({ colors: { ...colors, [id]: color }, color });
      return;
    }
    delete colors[id];
    this.setState({
      colors,
      color: Object.keys(colors).length
        ? colors[Object.keys(colors).length - 1]
        : null,
    });
  };
  render() {
    const { children } = this.props;
    const { color } = this.state;
    const theme = getTheme(this.props.theme);
    if (color) {
      theme.color = color;
    }

    return (
      <FelaThemeProvider theme={theme}>
        {children}
      </FelaThemeProvider>
    );
  }
}
