import React, { Children, Component, createElement, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import withRouter from './with-router';

@withRouter
export default class ScrollToTop extends Component {
  componentDidUpdate(prevProps: {}) {
    if (
      get(this.props.location, 'pathname') !==
      get(prevProps.location, 'pathname')
    ) {
      const node = findDOMNode(this);
      if (node) {
        node.scrollTop = 0;
      }
    }
  }

  render() {
    return Children.only(this.props.children);
  }
}
