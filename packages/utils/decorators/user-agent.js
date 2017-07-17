import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import UAParser2 from 'ua-parser-js';

export const UAParser = UAParser2;
export class UAProvider extends Component {
  static childContextTypes = {
    ua: PropTypes.object,
  };
  getChildContext() {
    const { ua } = this.props;
    return {
      ua: ua && typeof ua === 'string' ? new UAParser2(ua) : ua,
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
