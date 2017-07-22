import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" width="576" height="512" viewBox="0 0 576 512"><path d="M32 76v244h532c6.627 0 12 5.373 12 12v116h-32v-96H32v96H0V76c0-6.627 5.373-12 12-12h8c6.627 0 12 5.373 12 12zm32 116c0-53.019 42.981-96 96-96s96 42.981 96 96-42.981 96-96 96-96-42.981-96-96zm32 0c0 35.29 28.71 64 64 64s64-28.71 64-64-28.71-64-64-64-64 28.71-64 64zm480 32v64H288V152c0-13.255 10.745-24 24-24h168c53.019 0 96 42.981 96 96zm-32 0c0-35.29-28.71-64-64-64H320v96h224v-32z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);