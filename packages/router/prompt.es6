import React from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';

class Prompt extends React.Component {
  static propTypes = {
    when: PropTypes.bool,
    message: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  };

  static defaultProps = {
    when: true,
  };

  static contextTypes = {
    history: PropTypes.object,
  };

  enable(message) {
    if (this.unblock) { this.unblock(); }

    this.unblock = this.context.history && this.context.history.block(message);
  }

  disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  }

  componentWillMount() {
    if (this.props.when) { this.enable(this.props.message); }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) { this.enable(nextProps.message); }
    } else {
      this.disable();
    }
  }

  componentWillUnmount() {
    this.disable();
  }

  render() {
    return null;
  }
}

export default Prompt;
