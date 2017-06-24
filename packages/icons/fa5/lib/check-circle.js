import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><style>.st0{fill-rule:evenodd;clip-rule:evenodd;fill:none}</style><path d="M256 40c118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216m0-32C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-8.6 370.6L386.7 166c3.6-5.5 2.1-13-3.5-16.6l-10-6.6c-5.5-3.6-13-2.1-16.6 3.5L230.4 338.8l-81.9-53.7c-5.5-3.6-13-2.1-16.6 3.5l-6.6 10c-3.6 5.5-2.1 13 3.5 16.6l102 66.8c5.5 3.7 12.9 2.1 16.6-3.4z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);