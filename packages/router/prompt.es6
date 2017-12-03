import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortID from 'shortid';
import { createBlock, createUnblock } from './redux';

@connect(null, dispatch => ({
  block: createBlock(dispatch),
  unblock: createUnblock(dispatch),
}))
class Prompt extends Component {
  id = shortID.generate();

  static propTypes = {
    when: PropTypes.bool,
    message: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  };

  static defaultProps = {
    when: true,
  };

  componentWillMount() {
    if (this.props.when) {
      this.enable(this.props.message);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) {
        this.enable(nextProps.message);
      }
    } else {
      this.disable();
    }
  }

  componentWillUnmount() {
    this.disable();
  }

  enable(message) {
    this.props.block(this.id, message);
  }

  disable() {
    this.props.unblock(this.id);
  }

  render() {
    return null;
  }
}

export default Prompt;
