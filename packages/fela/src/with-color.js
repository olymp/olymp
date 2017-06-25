import { ThemeProvider as FelaThemeProvider } from 'react-fela';
import React, { Component, Children } from 'react';
import { func } from 'prop-types';
import shortId from 'shortid';

export class WithColorProvider extends Component {
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
    const { children, ...rest } = this.props;
    const { color } = this.state;

    if (color) {
      return (
        <FelaThemeProvider theme={{ color }} {...rest}>
          {children}
        </FelaThemeProvider>
      );
    }
    return Children.only(children);
  }
}

export const withColor = getColorFromProps => WrappedComponent =>
  class WithColorComponent extends Component {
    static contextTypes = {
      setColor: func,
    };
    id = shortId.generate();
    setColor = (props = this.props) => {
      const { setColor } = this.context;
      const newColor = getColorFromProps(props);
      console.log(newColor);
      if (newColor !== this.color) {
        setColor(this.id, newColor);
        this.color = newColor;
      }
    };
    componentDidMount() {
      this.setColor(this.props);
    }
    componentWillUnmount() {
      const { setColor } = this.context;
      setColor(this.id, null);
    }
    componentWillReceiveProps(newProps) {
      this.setColor(newProps);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
