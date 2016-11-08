import React, { Component, PropTypes } from 'react';
import Image from './cool-image';
import withImageUpload from './with-image-upload';
import withLightbox from './with-lightbox';

const defaultImage = { url: '/img/placeholder.jpg', width: 1680, height: 578 };
const defaultImageClick = ({ showMediathek }) => showMediathek();
@withLightbox()
@withImageUpload()
export default class ImageComponent extends Component {
  static defaultProps = {
    value: null,
    readOnly: false,
  };

  onImageClick = () => {
    const { showLightbox, showMediathek, onImageClick } = this.props;
    if (onImageClick) onImageClick({ showLightbox, showMediathek });
    else defaultImageClick({ showLightbox, showMediathek });
  }

  render() {
    const { value, readOnly, className, children, showLightbox, showMediathek, lightbox, onImageClick, ...rest } = this.props;

    return (
      <Image {...rest} value={value || defaultImage} className={className} onClick={this.onImageClick}>
        {children}
      </Image>
    );
  }
}
