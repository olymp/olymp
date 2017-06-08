import React, { Component, PropTypes } from 'react';

// connect: Decorator to get props from context and interpolate props
export default class HashtaxProvided extends Component {
  static contextTypes = {
    Hashtax: PropTypes.func.isRequired,
  };
  render() {
    const Hashtax = this.context.Hashtax;
    return <Hashtax {...this.props} />;
  }
}
