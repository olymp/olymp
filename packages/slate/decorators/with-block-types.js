import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default WrappedComponent =>
  class WithBlockTypes extends Component {
    static contextTypes = {
      blockTypes: PropTypes.object,
    };
    render() {
      return (
        <WrappedComponent
          blockTypes={this.context.blockTypes}
          {...this.props}
        />
      );
    }
  };
