import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUpdateQuery } from 'olymp-router';
import { asyncComponent } from 'react-async-component';

const LightBox = asyncComponent({
  resolve: () =>
    new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
        [],
        (require) => {
          resolve(require('olymp-fela/lightbox'));
        },
        'lightbox',
      ),),
});

@connect(
  ({ location }) => ({
    queryLightbox: location.query.lightbox,
  }),
  dispatch => ({
    updateQuery: createUpdateQuery(dispatch),
  }),
)
export default class Lightbox extends Component {
  static contextTypes = {
    lightbox: PropTypes.object,
  };

  render() {
    const { queryLightbox, updateQuery, ...rest } = this.props;
    const { lightbox } = this.context;

    const image = lightbox.images.find(img => img.ref === queryLightbox);
    const images = (image && lightbox.images.filter(img => img.gallery === image.gallery)) || [];
    const currIndex = images.findIndex(img => img.ref === queryLightbox);
    const prevIndex = currIndex > 0 ? currIndex - 1 : images.length - 1;
    const nextIndex = currIndex < images.length - 1 ? currIndex + 1 : 0;

    return (
      <LightBox
        images={images}
        currentImage={currIndex}
        isOpen={currIndex >= 0}
        onClose={() => updateQuery({ lightbox: undefined })}
        onClickPrev={() => updateQuery({ lightbox: images[prevIndex].ref })}
        onClickNext={() => updateQuery({ lightbox: images[nextIndex].ref })}
        onClickThumbnail={i => updateQuery({ lightbox: images[i].ref })}
        imageCountSeparator=" von "
        backdropClosesModal
        showThumbnails={images.length !== 1}
        {...rest}
      />
    );
  }
}
