import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><style>.st0{fill-rule:evenodd;clip-rule:evenodd;fill:none}</style><path d="M256 40c118.7 0 216 96.1 216 216 0 119.3-96.6 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216zm0-32C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM144.3 320c-11 0-16.2 13.6-8 20.9C165.6 367.4 208.4 384 256 384s90.4-16.6 119.7-43.1c8.2-7.4 3-20.9-8-20.9H144.3zM192 152c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56zm0 44c-6.6 0-12 5.4-12 12s-5.4 12-12 12-12-5.4-12-12c0-19.9 16.1-36 36-36 6.6 0 12 5.4 12 12s-5.4 12-12 12zm128-44c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56zm0 44c-6.6 0-12 5.4-12 12s-5.4 12-12 12-12-5.4-12-12c0-19.9 16.1-36 36-36 6.6 0 12 5.4 12 12s-5.4 12-12 12z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);