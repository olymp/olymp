import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M392 32H56C25.1 32 0 57.1 0 88v336c0 30.9 25.1 56 56 56h336c30.9 0 56-25.1 56-56V88c0-30.9-25.1-56-56-56zM194.9 371.4c0 14.8-12 26.9-26.9 26.9H85.1c-14.8 0-26.9-12-26.9-26.9V117.1c0-14.8 12-26.9 26.9-26.9H168c14.8 0 26.9 12 26.9 26.9v254.3zm194.9-112c0 14.8-12 26.9-26.9 26.9H280c-14.8 0-26.9-12-26.9-26.9V117.1c0-14.8 12-26.9 26.9-26.9h82.9c14.8 0 26.9 12 26.9 26.9v142.3z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaTrello';
export default styled(icon);