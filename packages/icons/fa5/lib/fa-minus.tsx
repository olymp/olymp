import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M436 274c6.6 0 12-5.4 12-12v-12c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v12c0 6.6 5.4 12 12 12h424z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);