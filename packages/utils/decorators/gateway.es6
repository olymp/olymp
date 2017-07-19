import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GatewayRegistry } from 'react-gateway';

const withToolbar = type => WrappedComponent => {
  class WithToolbar extends Component {
    static contextTypes = {
      gatewayRegistry: PropTypes.instanceOf(GatewayRegistry).isRequired,
    };

    constructor(props, context) {
      super(props, context);
      this.gatewayRegistry = context.gatewayRegistry;
    }

    state = {
      children: null,
    };

    componentWillMount() {
      this.gatewayRegistry.addContainer(type, this);
    }

    componentWillUnmount() {
      this.gatewayRegistry.removeContainer(type, this);
    }

    render() {
      const props = {
        ...this.props,
      };
      props[type] = this.state.children;

      return <WrappedComponent {...props} />;
    }
  }

  return WithToolbar;
};
export default withToolbar;
