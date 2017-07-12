import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import UAParser from 'ua-parser-js';

export class UAProvider extends Component {
  static childContextTypes = {
    ua: PropTypes.object,
  };
  getChildContext() {
    return {
      ua: new UAParser(this.props.ua),
    };
  }
  render() {
    return Children.only(this.props.children);
  }
}

export default (WrappedComponent) => {
  const withUA = (props, context) =>
    <WrappedComponent ua={context.ua} {...props} />;
  withUA.contextTypes = {
    ua: PropTypes.object,
  };
  return withUA;
};
