import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M361.5 14.1c-9-9-21.2-14.1-33.9-14.1H184.5c-12.7 0-24.9 5.1-33.9 14.1L14.1 150.5c-9 9-14.1 21.2-14.1 33.9v143.1c0 12.7 5.1 24.9 14.1 33.9l136.5 136.5c9 9 21.2 14.1 33.9 14.1h143.1c12.7 0 24.9-5.1 33.9-14.1L498 361.4c9-9 14.1-21.2 14.1-33.9v-143c0-12.7-5.1-24.9-14.1-33.9L361.5 14.1zM480 327.5c0 4.3-1.7 8.3-4.7 11.3L338.9 475.3c-3 3-7 4.7-11.3 4.7H184.5c-4.3 0-8.3-1.7-11.3-4.7L36.7 338.9c-3-3-4.7-7-4.7-11.3V184.5c0-4.3 1.7-8.3 4.7-11.3L173.1 36.7c3-3 7-4.7 11.3-4.7h143.1c4.3 0 8.3 1.7 11.3 4.7l136.5 136.5c3 3 4.7 7 4.7 11.3v143z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);