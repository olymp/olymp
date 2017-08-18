import React, { Component } from 'react';
import { inject } from 'mobx-react';

export default getTheme => (WrappedComponent) => {
  @inject('$theme')
  class WithThemeComponent extends Component {
    constructor(props) {
      super(props);
      this.setTheme(props);
    }
    setTheme = (props = this.props) => {
      const { $theme } = this.props;
      const newTheme = typeof getTheme === 'function' ? getTheme(props) : getTheme;
      if (newTheme !== this.oldTheme) {
        this.oldTheme = newTheme;
        this.themeKey = $theme.add(newTheme || {}, this.themeKey);
      }
    };
    componentWillUnmount() {
      const { $theme } = this.props;
      $theme.remove(this.themeKey);
    }
    componentWillReceiveProps(props) {
      this.setTheme(props);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return WithThemeComponent;
};
