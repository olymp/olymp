import React, { Component } from 'react';
import { ThemeProvider as FelaThemeProvider } from 'react-fela';
import { func } from 'prop-types';

export default class WithColorProvider extends Component {
  colors = {};
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
    const colors = { ...this.colors };
    if (color) {
      this.colors = { ...colors, [id]: color };
    } else {
      delete colors[id];
      this.colors = colors;
    }

    this.forceUpdate();
  };
  render() {
    const { children } = this.props;
    const color = this.colors[Object.keys(this.colors).reverse()[0]];
    const theme = {};

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
