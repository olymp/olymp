import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

// DataProvider: Use inside of decorator to hand props through context to all children
export default class DataProvider extends Component {
  static childContextTypes = {
    hashtaxData: PropTypes.object,
  };
  static contextTypes = {
    hashtaxData: PropTypes.object,
  };
  getChildContext() {
    const hashtaxData = this.context.hashtaxData || {};
    const props = this.props;
    return {
      hashtaxData: {
        ...hashtaxData,
        ...props,
      },
    };
  }
  render() {
    const { children } = this.props;
    return Children.only(children);
  }
}
