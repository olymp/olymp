import React, { Component } from 'react';
import { ThemeProvider as FelaThemeProvider } from 'react-fela';
import { observer, inject } from 'mobx-react';

@inject('$theme')
@observer
export default class ThemeProvider extends Component {
  render() {
    const { children, $theme } = this.props;
    return (
      <FelaThemeProvider theme={$theme.theme}>
        {children}
      </FelaThemeProvider>
    );
  }
}
