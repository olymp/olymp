import React, { Component } from 'react';

export default (options = {}) => (Block) => {
  return class AlignmentDecorator extends Component {
    uniqueId = Math.random().toString(36).substr(2, 9);
    static slate = Block.slate;
    render() {
      return (
        <Block {...this.props} uniqueId={this.uniqueId} />
      );
    }
  };
};
