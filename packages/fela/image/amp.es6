import React from 'react';
import PropTypes from 'prop-types';

const ImageAmp = ({ width, height, src, alt, layout, children, ...rest }) =>
  (<amp-img
    layout={layout || 'responsive'}
    src={src}
    alt={alt}
    width={width}
    height={height}
    {...rest}
  >
    <noscript>
      {children}
    </noscript>
  </amp-img>);
ImageAmp.displayName = 'Image.Amp';
ImageAmp.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
ImageAmp.defaultProps = {
  alt: '',
};
export default ImageAmp;
