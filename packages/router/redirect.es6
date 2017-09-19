import React from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';
import { withPush, withPathname } from './decorators';

/**
 * The public API for updating the location programatically
 * with a component.
 */
class Redirect extends React.Component {
  static propTypes = {
    push: PropTypes.bool,
    from: PropTypes.string,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    pathname: PropTypes.string,
  };

  static defaultProps = {
    push: false,
  };

  static contextTypes = {
    staticContext: PropTypes.object,
  };

  isStatic() {
    return this.context.staticContext;
  }

  componentWillMount() {
    if (this.isStatic()) {
      this.perform();
    }
  }

  componentDidMount() {
    if (!this.isStatic()) {
      this.perform();
    }
  }

  perform() {
    const { push, to, from, pathname, router } = this.props;

    if (from && from !== pathname) {
      return;
    }
    if (push) {
      router.push(to);
    } else {
      router.replace(to);
    }
  }

  render() {
    return null;
  }
}

export default withPathname(withPush(Redirect));
