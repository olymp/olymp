import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'olymp-fela/image';

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

  const newUrl = value.url
    .split('ttp://res.cloudinary.com/')
    .join('ttps://res.cloudinary.com/');

  const crop =
    value.crop && value.crop.length
      ? `w_${value.crop[0]},h_${value.crop[1]},x_${value.crop[2]},y_${value
        .crop[3]},c_crop/`
      : '';

  let query = '';
  Object.keys(newOptions).forEach(
    key => (query = `${query}${key}_${newOptions[key]},`)
  );

  return newUrl.replace('/upload/', `/upload/${crop}${query}/`);
};

const CloudinaryImage = ({
  options,
  value,
  ratio,
  avatar,
  alt,
  maxResolution,
  ...rest
}) => {
  if (!value) {
    return <div />;
  }

  const width = (value.crop && value.crop[0]) || value.width;
  const height = (value.crop && value.crop[1]) || value.height;

  return (
    <Image
      {...rest}
      maxResolution={maxResolution > 6000000 ? 6000000 : maxResolution}
      src={(w, h) =>
        cloudinaryUrl(value, {
          w,
          h,
          g: avatar ? 'face' : 'center',
          ...options,
        })}
      alt={alt || value.caption}
      ratio={ratio || height / width}
      srcRatio={height / width}
    />
  );
};
CloudinaryImage.propTypes = {
  value: PropTypes.shape({
    url: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  ratio: PropTypes.number,
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
  options: {},
  avatar: false,
  alt: undefined,
};
export default CloudinaryImage;
