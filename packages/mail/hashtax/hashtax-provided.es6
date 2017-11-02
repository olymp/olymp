import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
