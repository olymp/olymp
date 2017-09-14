import { Component } from 'react';
import PropTypes from 'prop-types';
import { unstable_createPortal } from 'react-dom';

class Portal extends Component {
  componentWillMount() {
    if (typeof document !== 'undefined') {
      this.popup = document.createElement('div');
      document.body.appendChild(this.popup);
    }
  }

  componentWillUnmount() {
    if (typeof document !== 'undefined') {
      document.body.removeChild(this.popup);
    }
  }

  render() {
    if (typeof document !== 'undefined') {
      return unstable_createPortal(this.props.children, this.popup);
    }
    return null;
  }
}

Portal.propTypes = {
  children: PropTypes.node, // eslint-disable-line
};

export default Portal;
