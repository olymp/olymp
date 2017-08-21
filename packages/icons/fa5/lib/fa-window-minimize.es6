import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M496 480H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h480c8.8 0 16 7.2 16 16s-7.2 16-16 16z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaWindowMinimize';
export default styled(icon);