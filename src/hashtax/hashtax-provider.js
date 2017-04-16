import React, { Component, PropTypes, Children } from 'react';
import hashtax from './hashtax';

// HashtaxProvider
class HashtaxProvider extends Component {
  static childContextTypes = {
    Hashtax: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.Hashtax = hashtax(props);
  }
  shouldComponentUpdate(newProps) {
    console.log('NEW PROPS',newProps)
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
