import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

const ImageImg = createComponent(
  ({ width, height, circle }) => ({
    width,
    height,
    borderRadius: circle ? '50%' : 0,
  }),
  ({ width, height, src, srcSet, alt, className, attributes, onLoad }) => (
    <img
      {...attributes}
      src={src}
      srcSet={srcSet}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onLoad={onLoad}
    />
  ),
  p => Object.keys(p),
);

ImageImg.displayName = 'Image.Img';
ImageImg.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  circle: PropTypes.bool,
};
ImageImg.defaultProps = {
  alt: '',
  onClick: () => {},
  circle: false,
  attributes: {},
};
export default ImageImg;
