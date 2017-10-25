import { Component } from 'react';
import PropTypes from 'prop-types';

export default class LightboxGallery extends Component {
  static childContextTypes = {
    gallery: PropTypes.string,
  };

  getChildContext() {
    const { gallery } = this.props;
    return {
      gallery:
        gallery ||
        Math.random()
          .toString(36)
          .substr(2, 9),
    };
  }

  render() {
    const { children } = this.props;
    return children;
  }
}
