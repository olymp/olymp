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

  isURL = (str) => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

    return pattern.test(str);
  }

  render() {
    const { cloudinary, asImg, style, className, width, height, ratio, children, border, retina, mode, withCaption, withSource } = this.props;
    let { value } = this.props;

    if (!value) {
      value = defaultImage;
    } else if (typeof value === 'string') {
      value = {
        url: value,
      };
    }

    return (
      <div>
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
        {withCaption || withSource ? <div style={{ height: '1rem' }} /> : null}
        {value && withCaption && value.caption ? (
          <figcaption style={{ lineHeight: 1.25, textAlign: 'center'  }}>
            {withCaption && value.caption ? value.caption : null}
          </figcaption>
        ) : null}
        {value && withSource && value.source ? (
          <figcaption style={{ fontSize: 'small', lineHeight: 1.25, whiteSpace: 'nowrap', textAlign: 'center' /* overflow: 'hidden', textOverflow: 'ellipsis' */ }}>
            {withSource && value.source ? (this.isURL(value.source) ? <a href={value.source}>{value.source}</a> : value.source) : null}
          </figcaption>
        ) : null}
      </div>
    );
  }
}
