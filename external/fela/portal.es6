import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { createPortal, unstable_renderSubtreeIntoContainer } from 'react-dom';

const isReact16 = createPortal !== undefined;
const portal = isReact16 ? createPortal : unstable_renderSubtreeIntoContainer;

class Portal extends Component {
  componentWillMount() {
    const { noPortal, noScroll } = this.props;
    if (!noPortal && typeof document !== 'undefined') {
      this.popup = document.createElement('div');
      document.body.appendChild(this.popup);
    }
    if (noScroll) {
      document.getElementById('app').classList.toggle('with-portal', true);
    }
  }

  componentWillUnmount() {
    const { noScroll } = this.props;
    if (this.popup) {
      document.body.removeChild(this.popup);
    }
    if (noScroll) {
      document.getElementById('app').classList.toggle('with-portal', false);
    }
  }

  render() {
    const { children, noPortal } = this.props;
    if (noPortal) {
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
  noPortal: PropTypes.bool,
  noScroll: PropTypes.bool,
};
Portal.defaultProps = {
  noPortal: false,
  noScroll: false,
};

export default Portal;
