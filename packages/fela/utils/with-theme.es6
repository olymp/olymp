import React, { Component } from 'react';
import { withTheme } from 'react-fela';
import { shallowEqual } from 'recompose';
import { get } from 'lodash';

export default getThemeFromProps => WrappedComponent => {
  @withTheme
  class WithThemeComponent extends Component {
    constructor(props) {
      super(props);
      this.skip = get(props.editor, 'props.prefetch', false);
      this.setTheme(props);
    }

    componentWillReceiveProps(props) {
      this.setTheme(props);
    }

    componentWillUnmount() {
      const { theme } = this.props;

      theme.update({});
    }

    setTheme = (props = this.props) => {
      const { theme } = props;

      if (this.skip || !theme) {
        return;
      }

      const newTheme = getThemeFromProps(props) || {};
      if (!shallowEqual(newTheme, this.theme)) {
        theme.update(newTheme);
        this.theme = newTheme;
      }
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return WithThemeComponent;
};
