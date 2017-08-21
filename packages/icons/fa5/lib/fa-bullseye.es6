import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 40c118.663 0 216 96.055 216 216 0 118.663-96.055 216-216 216-118.663 0-216-96.055-216-216 0-118.663 96.055-216 216-216m0-32C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 128c66.319 0 120 53.67 120 120 0 66.319-53.67 120-120 120-66.319 0-120-53.67-120-120 0-66.319 53.67-120 120-120m0-32c-83.947 0-152 68.053-152 152s68.053 152 152 152 152-68.053 152-152-68.053-152-152-152zm0 96c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaBullseye';
export default styled(icon);