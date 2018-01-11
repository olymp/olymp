import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContext } from 'recompose';
import PropTypes from 'prop-types';
import { createUpdateQuery } from 'olymp-router';
import { asyncComponent } from 'react-async-component';

const LightBox = asyncComponent({
  resolve: () =>
    new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
        [],
        require => {
          resolve(require('olymp-fela/lightbox'));
        },
        'lightbox',
      ),
    ),
});

@getContext({
  gallery: PropTypes.string,
})
@connect(
  ({ location, lightbox }, { gallery }) => {
    const images = (gallery ? lightbox[gallery] : lightbox.images) || [];
    const ref = location.query.lightbox;
    const index = images.findIndex(img => img.ref === ref);
    const prev = index > 0 ? index - 1 : images.length - 1;
    const next = index < images.length - 1 ? index + 1 : 0;

    return {
      images,
      prev,
      next,
      index,
      image: index >= 0 ? images[index] : null,
    };
  },
  dispatch => ({
    updateQuery: createUpdateQuery(dispatch),
  }),
)
export default class Lightbox extends Component {
  render() {
    const {
      updateQuery,
      images,
      index,
      next,
      prev,
      image,
      ...rest
    } = this.props;

    return (
      <LightBox
        images={images}
        currentImage={index}
        isOpen={index >= 0}
        onClose={() => updateQuery({ lightbox: undefined })}
        onClickPrev={() => updateQuery({ lightbox: images[prev].ref })}
        onClickNext={() => updateQuery({ lightbox: images[next].ref })}
        onClickThumbnail={i => updateQuery({ lightbox: images[i].ref })}
        imageCountSeparator=" von "
        backdropClosesModal
        showThumbnails={images.length !== 1}
        {...rest}
      />
    );
  }
}
