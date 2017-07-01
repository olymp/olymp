import React from 'react';
import PropTypes from 'prop-types';

const ImageImg = ({ width, height, src, alt, onClick }) =>
  <img src={src} alt={alt} width={width} height={height} onClick={onClick} />;
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
