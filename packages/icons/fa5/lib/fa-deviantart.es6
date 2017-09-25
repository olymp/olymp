import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M320 93.2l-98.2 179.1 7.4 9.5H320v127.7H159.1l-13.5 9.2-43.7 84c-.3 0-8.6 8.6-9.2 9.2H0v-93.2l93.2-179.4-7.4-9.2H0V102.5h156l13.5-9.2 43.7-84c.3 0 8.6-8.6 9.2-9.2H320v93.1z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaDeviantart';
export default styled(icon);