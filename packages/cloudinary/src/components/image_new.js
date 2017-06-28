import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'olymp-fela';

// https://github.com/cloudinary/cloudinary-react
// http://cloudinary.com/documentation/image_transformation_reference

class CloudinaryImage extends Component {
  getUrl = (value, options) => {
    const newUrl = value.url
      .split('ttp://res.cloudinary.com/')
      .join('ttps://res.cloudinary.com/');

    const crop = value.crop && value.crop.length
      ? `w_${value.crop[0]},h_${value.crop[1]},x_${value.crop[2]},y_${value
          .crop[3]},c_crop/`
      : '';

    let query = '';
    Object.keys(options).forEach(
      key => (query = `${query}${key}_${options[key]},`)
    );

    return newUrl.replace('/upload/', `/upload/${crop}${query}/`);
  };

  render() {
    const { options, value, ratio, avatar, ...rest } = this.props;

    if (!value) {
      return <div />;
    }

    const width = (value.crop && value.crop[0]) || value.width;
    const height = (value.crop && value.crop[1]) || value.height;

    return (
      <Image
        {...rest}
        setUrl={(w, h) =>
          this.getUrl(value, {
            w,
            h,
            c: 'fill',
            f: 'auto',
            q: 'auto:eco',
            fl: 'lossy',
            dpr: 2,
            g: avatar ? 'face' : 'center',
            ...options,
          })}
        ratio={ratio || height / width}
      />
    );
  }
}
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
};
CloudinaryImage.defaultProps = {
  value: undefined,
  ratio: undefined,
  options: {},
  avatar: false,
};
export default CloudinaryImage;
