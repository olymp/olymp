import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'olymp-fela';
import { withHandlers } from 'recompose';

// https://github.com/cloudinary/cloudinary-react
// http://cloudinary.com/documentation/image_transformation_reference

export const cloudinaryUrl = (value, options) => {
  const newOptions = {
    c: 'fill',
    f: 'auto',
    q: 'auto:eco',
    fl: 'lossy',
    dpr: 2,
    ...options,
  };

  if (!value || !value.url) {
    return '';
  }

  const newUrl =
    value.url.indexOf('http://res.cloudinary.com/') === 0
      ? `https${value.url.substr(4)}`
      : value.url;

  const crop =
    value.crop && value.crop.length
      ? `w_${value.crop[0]},h_${value.crop[1]},x_${value.crop[2]},y_${value
          .crop[3]},c_crop/`
      : '';

  const query = Object.keys(newOptions)
    .map(key => `${key}_${newOptions[key]}`)
    .join(',');

  if (newUrl.indexOf('/upload/') !== -1) {
    return newUrl.replace('/upload/', `/upload/${crop}${query}/`);
  } else if (newUrl.indexOf('/fetch/') !== -1) {
    return newUrl.replace('/fetch/', `/fetch/${crop}${query}/`);
  }
};

const enhance = withHandlers({
  getUrl: ({ avatar, value, options }) => (w, h) =>
    value && value.url
      ? cloudinaryUrl(value, {
          w,
          h,
          g: avatar ? 'face' : 'auto',
          ...options,
        })
      : undefined,
});
const CloudinaryImage = enhance(
  ({ options, value, ratio, avatar, alt, maxResolution, getUrl, ...rest }) => {
    if (!value) {
      return <div />;
    }

    const width = (value.crop && value.crop[0]) || value.width;
    const height = (value.crop && value.crop[1]) || value.height;

    return (
      <Image
        {...rest}
        maxResolution={maxResolution > 6000000 ? 6000000 : maxResolution}
        src={getUrl}
        alt={alt || value.caption}
        ratio={ratio || height / width}
        srcRatio={height / width}
      />
    );
  },
);
CloudinaryImage.propTypes = {
  value: PropTypes.shape({
    url: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  ratio: PropTypes.number,
  maxResolution: PropTypes.number,
  options: PropTypes.shape({
    w: PropTypes.number,
    h: PropTypes.number,
    c: PropTypes.string,
    f: PropTypes.string,
    q: PropTypes.string,
    fl: PropTypes.string,
    dpr: PropTypes.number,
    // ...
  }),
  avatar: PropTypes.bool,
  alt: PropTypes.string,
};
CloudinaryImage.defaultProps = {
  value: undefined,
  ratio: undefined,
  maxResolution: 111000, // 333*333px
  options: {},
  avatar: false,
  alt: undefined,
};
export default CloudinaryImage;
