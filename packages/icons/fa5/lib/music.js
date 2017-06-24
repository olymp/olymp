import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M469.9 1.7l-288 96C168.8 102 160 114.2 160 128v272.3c-17-10.1-39.4-16.3-64-16.3-53 0-96 28.6-96 64 0 35.3 43 64 96 64s96-28.7 96-64V225.7l288-96v206.6c-17-10.1-39.4-16.3-64-16.3-53 0-96 28.6-96 64 0 35.3 43 64 96 64s96-28.7 96-64V32c0-21.9-21.5-37.2-42.1-30.3zM96 484c-37 0-68-18.3-68-36 0-23 42.2-36 68-36 37 0 68 18.3 68 36 0 23-42.2 36-68 36zm96-292v-64l288-96v64l-288 96zm224 228c-37 0-68-18.3-68-36 0-23 42.2-36 68-36 37 0 68 18.3 68 36 0 23-42.2 36-68 36z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);