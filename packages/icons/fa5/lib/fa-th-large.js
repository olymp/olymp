import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M488 448H24c-13.3 0-24-10.7-24-24V88c0-13.3 10.7-24 24-24h464c13.3 0 24 10.7 24 24v336c0 13.3-10.7 24-24 24zM32 108v120c0 6.6 5.4 12 12 12h184c6.6 0 12-5.4 12-12V108c0-6.6-5.4-12-12-12H44c-6.6 0-12 5.4-12 12zm12 308h184c6.6 0 12-5.4 12-12V284c0-6.6-5.4-12-12-12H44c-6.6 0-12 5.4-12 12v120c0 6.6 5.4 12 12 12zm436-12V284c0-6.6-5.4-12-12-12H284c-6.6 0-12 5.4-12 12v120c0 6.6 5.4 12 12 12h184c6.6 0 12-5.4 12-12zm0-176V108c0-6.6-5.4-12-12-12H284c-6.6 0-12 5.4-12 12v120c0 6.6 5.4 12 12 12h184c6.6 0 12-5.4 12-12z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);