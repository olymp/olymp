import React from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';

/**
 * The public API for updating the location programatically
 * with a component.
 */
class Redirect extends React.Component {
  static propTypes = {
    push: PropTypes.bool,
    from: PropTypes.string,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  static defaultProps = {
    push: false,
  };

  static contextTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired,
    }).isRequired,
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
    const { history } = this.context;
    const { push, to } = this.props;

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  }

  render() {
    return null;
  }
}

export default Redirect;
