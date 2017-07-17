import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M203.3 478l-181-118.6c-5.6-3.7-7.2-11.2-3.5-16.9l6.7-10.2c3.7-5.6 11.2-7.2 16.9-3.5l160.7 105.3L462.7 37.5c3.7-5.6 11.2-7.2 16.9-3.5l10.2 6.7c5.6 3.7 7.2 11.2 3.5 16.9l-273.2 417c-3.7 5.5-11.2 7.1-16.8 3.4z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);