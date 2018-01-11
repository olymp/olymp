import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default (WrappedComponent = color =>
  class WithSkeletor extends Component {
    static childContextTypes = {
      skeletorLoading: PropTypes.bool,
      skeletorColor: PropTypes.string,
    };

    getChildContext() {
      const { isLoading } = this.props;

      return { skeletorLoading: isLoading, skeletorColor: color };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  });
