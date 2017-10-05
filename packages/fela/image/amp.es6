import React from 'react';
import PropTypes from 'prop-types';

const AmpImage = ({ width, height, src, alt, layout, children }) => (
  <amp-img layout={layout} src={src} alt={alt} width={width} height={height}>
    <noscript>{children}</noscript>
  </amp-img>
);
AmpImage.displayName = 'AmpImage';
AmpImage.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  layout: PropTypes.oneOf(['fill', 'fixed-height', 'responsive']),
  alt: PropTypes.string,
};
AmpImage.defaultProps = {
  alt: '',
  layout: 'responsive',
};
export default AmpImage;
