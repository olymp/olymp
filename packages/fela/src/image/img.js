import React from 'react';
import PropTypes from 'prop-types';

const ImageImg = ({ width, height, src, alt }) =>
  <img src={src} alt={alt} width={width} height={height} />;
ImageImg.displayName = 'Image.Img';
ImageImg.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
ImageImg.defaultProps = {
  alt: '',
};
export default ImageImg;
