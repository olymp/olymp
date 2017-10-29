import React from 'react';
import PropTypes from 'prop-types';
import { withPush, withPathname } from './decorators';
import { withLocation } from './link';

@withLocation
class Redirect extends React.Component {
  static propTypes = {
    from: PropTypes.string,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    pathname: PropTypes.string,
    on: PropTypes.bool,
  };

  componentWillMount() {
    if (typeof window === 'undefined') {
      this.perform();
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.perform();
    }
  }

  perform() {
    const { push, location, from, pathname, on } = this.props;

    if (from && from !== pathname) {
      return;
    }
    if (on !== undefined && on !== true) {
      return;
    }
    push(location);
  }

  render() {
    const { children, component: Comp, on, ...rest } = this.props;
    if (Comp) {
      return <Comp {...rest}>{children}</Comp>;
    }
    return children || null;
  }
}

export default withPathname(withPush(Redirect));
