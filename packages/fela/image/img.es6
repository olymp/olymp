import React from 'react';
import PropTypes from 'prop-types';
import createComponent from '../create-component';

const ImageImg = createComponent(
  ({ theme, width, height }) => ({
    width,
    height,
  }),
  ({ width, height, src, alt, onClick, className }) =>
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onClick={onClick}
    />,
  p => Object.keys(p)
);

ImageImg.displayName = 'Image.Img';
ImageImg.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};
ImageImg.defaultProps = {
  alt: '',
  onClick: () => {},
};
export default ImageImg;
