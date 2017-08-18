import { Children, Component } from 'react';
import { findDOMNode } from 'react-dom';
import { get } from 'lodash';
import withRouter from './with-router';

@withRouter
export default class ScrollToTop extends Component {
  componentDidUpdate(prevProps: {}) {
    const { location } = this.props;
    if (get(location, 'pathname') !== get(prevProps.location, 'pathname')) {
      const node = findDOMNode(this);
      if (node) {
        node.scrollTop = 0;
      }
    }
  }

  render() {
    const { children } = this.props;
    return Children.only(children);
  }
}
