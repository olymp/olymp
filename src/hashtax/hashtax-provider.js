import React, { Component, PropTypes, Children } from 'react';
import hashtax from './hashtax';

// HashtaxProvider
export default options => {
  const Hashtax = hashtax(options);
  class HashtaxProvider extends Component {
    static childContextTypes = {
      Hashtax: PropTypes.func.isRequired,
    }
    getChildContext() {
      return {
        Hashtax,
      };
    }
    render() {
      const { children } = this.props;
      return Children.only(children);
    }
  }
  return HashtaxProvider;
}
