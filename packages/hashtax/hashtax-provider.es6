import React, { Component, Children } from 'react';
import hashtax from './hashtax';
import PropTypes from 'prop-types';

// HashtaxProvider
class HashtaxProvider extends Component {
  static childContextTypes = {
    Hashtax: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.Hashtax = hashtax(props);
  }

  shouldComponentUpdate(newProps) {
    this.Hashtax = hashtax(newProps);
    return true;
  }

  getChildContext() {
    return {
      Hashtax: this.Hashtax,
    };
  }

  render() {
    const { children } = this.props;
    return Children.only(children);
  }
}
export default HashtaxProvider;
