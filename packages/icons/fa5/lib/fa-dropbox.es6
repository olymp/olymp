import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 87.2l-151.9 93.9L0 97.5 150.6 0 256 87.2zM0 265.3l150.6 98.3 105.4-88L104.1 181 0 265.3zm256 10.3l105.4 88L512 265.3l-104.1-84.2L256 275.6zM512 97.5L361.4 0 256 87.2l151.9 93.9L512 97.5zM256.3 294.6l-105.7 87.7-45.2-29.5V385l150.9 90.5L407.2 385v-32.2L362 382.3l-105.7-87.7z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaDropbox';
export default styled(icon);