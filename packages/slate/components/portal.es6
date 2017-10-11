import { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal, unstable_renderSubtreeIntoContainer } from 'react-dom';

const isReact16 = createPortal !== undefined;
const portal = isReact16 ? createPortal : unstable_renderSubtreeIntoContainer;

class Portal extends Component {
  componentWillMount() {
    if (typeof document !== 'undefined' && !this.popup) {
      this.popup = document.createElement('div');
      document.body.appendChild(this.popup);
    }
  }

  componentWillUnmount() {
    if (typeof document !== 'undefined' && this.popup) {
      document.body.removeChild(this.popup);
    }
  }

  render() {
    if (this.popup) {
      return portal(this.props.children, this.popup);
    }
    return null;
  }
}

Portal.propTypes = {
  children: PropTypes.node, // eslint-disable-line
};

export default Portal;
