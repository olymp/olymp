import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shallowEqual from 'shallowequal';
import { get } from 'lodash';

export default getColorFromProps => (WrappedComponent) => {
  class WithColorComponent extends Component {
    static contextTypes = {
      theme: PropTypes.object,
    };
    originalTheme = null;
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
      if (!this.originalTheme) {
        this.originalTheme = theme.get();
      }
      const newTheme = { ...this.originalTheme, ...(getColorFromProps(props) || {}) };
      if (!shallowEqual(newTheme, this.theme)) {
        theme.update(newTheme);
        this.theme = newTheme;
      }
    };
    componentWillUnmount() {
      const { theme } = this.context;
      if (this.originalTheme) {
        theme.update(this.originalTheme);
      }
    }
    componentWillReceiveProps(props) {
      this.setTheme(props);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return WithColorComponent;
};
