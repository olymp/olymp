import React, { Component } from 'react';

export default WrappedComponent => class WithBlockTypes extends Component {
  static contextTypes = {
    blockTypes: React.PropTypes.object,
  };
  render() {
    return <WrappedComponent blockTypes={this.context.blockTypes} {...this.props} />;
  }
};

export const useBlockTypes = blockTypes => WrappedComponent => class UseBlockTypes extends Component {
  static childContextTypes = {
    blockTypes: React.PropTypes.object,
  };
  getChildContext() {
    return {
      blockTypes: blockTypes || this.props.blockTypes,
    };
  }
  render() {
    return <WrappedComponent {...this.props} />;
  }
};
