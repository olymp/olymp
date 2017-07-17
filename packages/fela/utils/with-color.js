import React, { Component } from 'react';
import { setTheme } from './redux';

export default getColorFromProps => WrappedComponent => {
  @setTheme
  class WithColorComponent extends Component {
    color = null;
    constructor(props) {
      super(props);
      this.setColor(props);
    }
    setColor = (props = this.props) => {
      const { setTheme } = this.props;
      const newColor = getColorFromProps(props) || null;
      if (newColor !== this.color) {
        setTheme({ color: newColor });
        this.color = newColor;
      }
    };
    componentWillUnmount() {
      const { setTheme } = this.props;
      setTheme({});
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
