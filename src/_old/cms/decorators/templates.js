import React, { Component } from 'react';

export default WrappedComponent =>
  class withTemplates extends Component {
    static contextTypes = {
      templates: React.PropTypes.object,
    };
    render() {
      return (
        <WrappedComponent templates={this.context.templates} {...this.props} />
      );
    }
  };
