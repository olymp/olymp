import React, { Component, Children, PropTypes } from 'react';

export class AmpProvider extends Component {
  static childContextTypes = {
    amp: React.PropTypes.bool,
  };
  getChildContext() {
    return {
      amp: this.props.amp,
    };
  }
  render() {
    return Children.only(this.props.children);
  }
};

export default (WrappedComponent) => {
  const withAmp = (props, context) => (
    <WrappedComponent {...context} {...props} />
  );
  withAmp.contextTypes = {
    amp: React.PropTypes.bool,
  };
  return withAmp;
};
