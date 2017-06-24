import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 500v-8c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12zM291.142 12v8c0 6.627 5.373 12 12 12h42.72v226.509c0 85.451-46.451 128.726-122.145 128.726-74.322 0-121.569-40.289-121.569-127.572V32h42.721c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12H26.659c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12H69.38v228.818c0 106.811 63.591 158.094 154.913 158.094 89.287 0 154.337-52.813 154.337-158.094V32h42.721c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12H303.142c-6.628 0-12 5.373-12 12z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);