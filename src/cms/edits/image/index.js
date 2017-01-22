import React, { Component } from 'react';
import Image from './cool-image';
import withImageUpload from './with-image-upload';
import withLightbox from './with-lightbox';

const defaultImage = {
  url: '/img/placeholder.jpg',
  width: 1680,
  height: 578,
};

// @withAuth
@withLightbox()
@withImageUpload()
export default class ImageComponent extends Component {
  onImageClick = () => {
    const { showLightbox, showMediathek, onImageClick, readOnly, auth, onChange, lightbox } = this.props;

    if (!readOnly) {
      if (onImageClick) {
        onImageClick({ showLightbox, showMediathek });
      } else if (/* auth && auth.user && */ onChange) {
        showMediathek({ showMediathek });
      }
    }

    if (lightbox) {
      showLightbox();
    }
  }

  render() {
    const { cloudinary, asImg, style, className, width, height, ratio, children, retina } = this.props;
    let { value } = this.props;

    if (!value) {
      value = defaultImage;
    } else if (typeof value === 'string') {
      value = {
        url: value,
      };
    }

    return (
      <Image
        retina={retina}
        asImg={asImg}
        value={value}
        cloudinary={cloudinary}
        style={style}
        className={className}
        width={width}
        height={height}
        ratio={ratio}
        onClick={this.onImageClick}
      >
        {children}
      </Image>
    );
  }
}
