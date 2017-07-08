import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default WrappedComponent =>
  class WithSelektor extends Component {
    static childContextTypes = {
      skeletorLoading: PropTypes.bool,
    };

    state = { isLoading: true };

    getChildContext() {
      const { isLoading } = this.state;

      return { skeletorLoading: isLoading };
    }

    componentWillReceiveProps({ isLoading }) {
      if (this.props.isLoading !== isLoading) {
        this.setState({ isLoading });
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
