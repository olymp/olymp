import React, { Component, PropTypes } from 'react';
import Image from './cool-image';
import withImageUpload from './with-image-upload';
import withLightbox from './with-lightbox';
import { cloudinaryUrl } from 'olymp';

const defaultImage = { url: '/img/placeholder.jpg', width: 1680, height: 578 };
const defaultImageClick = ({ showMediathek }) => showMediathek();
@withLightbox()
@withImageUpload()
export default class ImageComponent extends Component {
  static defaultProps = {
    readOnly: false,
    noPreview: false,
  };

  onImageClick = () => {
    const { showLightbox, showMediathek, onImageClick } = this.props;
    if (onImageClick) onImageClick({ showLightbox, showMediathek });
    else defaultImageClick({ showLightbox, showMediathek });
  }

  render() {
    const { showLightbox, showMediathek, onImageClick, lightbox, ...rest } = this.props; // muss hier stehen, sonst wird beim rendern ein Fehler geworfen

    // todo: newReadOnly = !isLoggedin/isAdmin || readObnly;

    return <Image {...rest} onClick={this.onImageClick} />;
  }
}
