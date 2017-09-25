import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

const ImageImg = createComponent(
  ({ theme, width, height, circle }) => ({
    width,
    height,
    borderRadius: circle ? '50%' : theme.borderRadius,
  }),
  ({ width, height, src, alt, onClick, className, attributes }) => (
    <img
      {...attributes}
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onClick={onClick}
    />
  ),
  p => Object.keys(p),
);

ImageImg.displayName = 'Image.Img';
ImageImg.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  src: PropTypes.string.isRequired,
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
