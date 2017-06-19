import { Component } from 'react';
import PropTypes from 'prop-types';

export default class LightboxGallery extends Component {
  static contextTypes = {
    lightbox: PropTypes.object,
  };
  static childContextTypes = {
    lightbox: PropTypes.object,
  };

  getChildContext() {
    const { lightbox } = this.context;
    const { gallery } = this.props;

    return {
      lightbox: {
        ...lightbox,
        gallery: gallery || Math.random().toString(36).substr(2, 9),
      },
    };
  }

  render() {
    const { children } = this.props;

    return children;
  }
}
