import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LightBox from 'react-images';
import { withRouter } from 'olymp-router';

@withRouter
export default class Lightbox extends Component {
  static contextTypes = {
    lightbox: PropTypes.object,
  };

  render() {
    const { router, query, pathname, ...rest } = this.props;
    const { lightbox } = this.context;
    const { lightbox: queryLightbox, ...queryRest } = query;

    const image = lightbox.images.find(img => img.ref === queryLightbox);
    const images =
      (image && lightbox.images.filter(img => img.gallery === image.gallery)) ||
      [];
    const currIndex = images.findIndex(img => img.ref === queryLightbox);
    const prevIndex = currIndex > 0 ? currIndex - 1 : images.length - 1;
    const nextIndex = currIndex < images.length - 1 ? currIndex + 1 : 0;

    return (
      <LightBox
        images={images}
        currentImage={currIndex}
        isOpen={currIndex >= 0}
        onClose={() => router.push({ pathname, query: { ...queryRest } })}
        onClickPrev={() =>
          router.push({
            pathname,
            query: { ...query, lightbox: images[prevIndex].ref },
          })}
        onClickNext={() =>
          router.push({
            pathname,
            query: { ...query, lightbox: images[nextIndex].ref },
          })}
        onClickThumbnail={i =>
          router.push({
            pathname,
            query: { ...query, lightbox: images[i].ref },
          })}
        imageCountSeparator=" von "
        backdropClosesModal
        showThumbnails={images.length !== 1}
        {...rest}
      />
    );
  }
}
