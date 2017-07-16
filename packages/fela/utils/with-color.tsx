import React, { Component } from 'react';
import { setTheme } from './redux';

export default getColorFromProps => WrappedComponent => {
  @setTheme
  class WithColorComponent extends Component {
    color = null;
    setColor = (props = this.props) => {
      const { setTheme } = this.props;
      const newColor = getColorFromProps(props) || null;
      if (newColor !== this.color) {
        setTheme({ color: newColor });
        this.color = newColor;
      }
    };
    componentDidMount() {
      this.setColor(this.props);
    }
    componentWillUnmount() {
      const { setTheme } = this.props;
      setTheme({});
    }
    componentWillReceiveProps(newProps) {
      this.setColor(newProps);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return WithColorComponent;
};
