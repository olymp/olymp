import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><style>.st0{fill-rule:evenodd;clip-rule:evenodd;fill:none}</style><path d="M400 64c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352m0-32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM215.4 372.2l139.3-212.6c3.6-5.5 2.1-13-3.5-16.6l-10-6.6c-5.5-3.6-13-2.1-16.6 3.5L198.4 332.4l-81.9-53.7c-5.5-3.6-13-2.1-16.6 3.5l-6.6 10c-3.6 5.5-2.1 13 3.5 16.6l102 66.8c5.5 3.7 12.9 2.1 16.6-3.4z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);