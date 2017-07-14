import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default WrappedComponent =>
  class WithSkeletor extends Component {
    static childContextTypes = {
      skeletorLoading: PropTypes.bool,
    };

    getChildContext() {
      const { isLoading } = this.props;

      return { skeletorLoading: isLoading };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
