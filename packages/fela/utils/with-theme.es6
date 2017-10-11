import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { shallowEqual } from 'recompose';
import { get } from 'lodash';

export default getThemeFromProps => (WrappedComponent) => {
  class WithThemeComponent extends Component {
    static contextTypes = {
      theme: PropTypes.object,
    };
    constructor(props, context) {
      super(props);
      this.skip = get(props.editor, 'props.prefetch', false);
      this.setTheme(props, context);
    }
    setTheme = (props = this.props, context = this.context) => {
      if (this.skip || !context.theme) {
        return;
      }
      const { theme } = context;
      const newTheme = getThemeFromProps(props) || {};
      if (!shallowEqual(newTheme, this.theme)) {
        theme.update(newTheme);
        this.theme = newTheme;
      }
    };
    componentWillUnmount() {
      const { theme } = this.context;
      theme.update({});
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
