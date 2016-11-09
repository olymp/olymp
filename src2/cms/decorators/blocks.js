import React, { Component } from 'react';

export default WrappedComponent => class withBlocks extends Component {
  static contextTypes = {
    blocks: React.PropTypes.object,
  };
  render() {
    return <WrappedComponent blocks={this.context.blocks} {...this.props} />;
  }
};
