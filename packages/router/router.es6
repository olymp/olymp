import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { attachHistory } from './history';

export default class Router extends Component {
  static childContextTypes = {
    history: PropTypes.object,
    staticContext: PropTypes.object,
  };
  constructor(props) {
    super(props);
    if (props.store && props.history) {
      attachHistory(props.history, props.store);
    }
  }
  getChildContext() {
    const { history } = this.props;
    return {
      history,
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}
