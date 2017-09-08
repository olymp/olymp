import React, { Component } from 'react';
import shortId from 'shortid';
import shallowEqual from 'shallowequal';
import { setTheme } from './redux';

export default getColorFromProps => (WrappedComponent) => {
  @setTheme
  class WithColorComponent extends Component {
    id = shortId.generate();
    color = null;
    constructor(props) {
      super(props);
      this.setColor(props);
    }
    setColor = (props = this.props) => {
      const { setTheme } = this.props;
      const newTheme = getColorFromProps(props) || null;
      if (!shallowEqual(newTheme, this.theme)) {
        setTheme(this.id, newTheme);
        this.theme = newTheme;
      }
    };
    componentWillUnmount() {
      const { unsetTheme } = this.props;
      unsetTheme(this.id);
    }
    componentWillReceiveProps(props) {
      this.setColor(props);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return WithColorComponent;
};
