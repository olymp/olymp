import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 416c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-21.3 14.3-32 32-32s32 14.3 32 32zM448 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h352c26.5 0 48 21.5 48 48zm-32 0c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V48z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaTablet';
export default styled(icon);