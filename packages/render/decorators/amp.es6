import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export class AmpProvider extends Component {
  static childContextTypes = {
    amp: PropTypes.bool,
  };
  getChildContext() {
    return {
      amp: this.props.amp,
    };
  }
  render() {
    return Children.only(this.props.children);
  }
}

export default (WrappedComponent) => {
  const withAmp = (props, context) =>
    <WrappedComponent {...context} {...props} />;
  withAmp.contextTypes = {
    amp: PropTypes.bool,
  };
  return withAmp;
};
