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
    const { push, location, from, pathname } = this.props;

    if (from && from !== pathname) {
      return;
    }
    push(location);
  }

  render() {
    return null;
  }
}

export default withPathname(withPush(Redirect));
