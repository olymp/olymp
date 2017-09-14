import { Component } from 'react';
import PropTypes from 'prop-types';
import { unstable_createPortal } from 'react-dom';

class Portal extends Component {
  componentWillMount() {
    this.popup = document.createElement('div');
    document.body.appendChild(this.popup);
  }

  componentWillUnmount() {
    document.body.removeChild(this.popup);
  }

  render() {
    return unstable_createPortal(this.props.children, this.popup);
  }
}

Portal.propTypes = {
  children: PropTypes.node, // eslint-disable-line
};

export default Portal;
