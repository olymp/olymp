import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { createPortal, unstable_renderSubtreeIntoContainer } from 'react-dom';

const isReact16 = createPortal !== undefined;
const portal = isReact16 ? createPortal : unstable_renderSubtreeIntoContainer;

class Portal extends Component {
  componentWillMount() {
    const { usePortal, noScroll } = this.props;
    if (usePortal && typeof document !== 'undefined' && !this.popup) {
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
    const { children, usePortal } = this.props;
    if (!usePortal) {
      return Children.only(children);
    }
    if (this.popup) {
      return portal(children, this.popup);
    }
    return null;
  }
}

Portal.propTypes = {
  children: PropTypes.node, // eslint-disable-line
  usePortal: PropTypes.bool,
};
Portal.defaultProps = {
  usePortal: true,
};

export default Portal;
