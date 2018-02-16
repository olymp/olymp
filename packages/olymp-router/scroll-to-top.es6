import { Children, Component } from 'react';
import { findDOMNode } from 'react-dom';
import { withPathname } from './decorators';

@withPathname
export default class ScrollToTop extends Component {
  componentDidUpdate(prevProps = {}) {
    if (this.props.pathname !== prevProps.pathname) {
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
