import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M160 352c53.019 0 96-42.981 96-96V96c0-53.019-42.981-96-96-96S64 42.981 64 96v160c0 53.019 42.981 96 96 96zM96 96c0-35.29 28.71-64 64-64s64 28.71 64 64h-58a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h58v32h-58a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h58v32h-58a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h58c0 35.29-28.71 64-64 64s-64-28.71-64-64V96zm224 124v36c0 82.825-63.26 151.149-144 159.202V480h68c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h68v-64.798C63.26 407.149 0 338.825 0 256v-36c0-6.627 5.373-12 12-12h8c6.627 0 12 5.373 12 12v36c0 70.579 57.42 128 128 128 70.579 0 128-57.421 128-128v-36c0-6.627 5.373-12 12-12h8c6.627 0 12 5.373 12 12z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaMicrophoneAlt';
export default styled(icon);