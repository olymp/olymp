import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1280 960q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm128 0q0 117-45.5 223.5t-123 184-184 123-223.5 45.5-223.5-45.5-184-123-123-184-45.5-223.5 45.5-223.5 123-184 184-123 223.5-45.5 223.5 45.5 184 123 123 184 45.5 223.5z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaGenderless';
export default styled(icon);