import React, { Component } from 'react';
import { Image, withLightbox } from 'olymp';
import withImageUpload from './with-image-upload';

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
      if (typeof onImageClick === 'function') {
        onImageClick({ showLightbox, showMediathek });
      } else if (typeof showMediathek === 'function' && onChange) {
        showMediathek({ showMediathek });
      }
    }

    if (lightbox) {
      showLightbox();
    }
  }

  render() {
    const { cloudinary, asImg, style, className, width, height, ratio, children, border, retina, mode } = this.props;
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
        mode={mode}
        border={border}
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
