import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M403.7 24c-42.8 0-83.9 25.7-115.7 54.7C256.2 49.8 215.1 24 172.3 24 80.8 24 24 80.6 24 171.7c0 73.2 62.4 132.4 68.1 137.7l170.3 168.2c14.1 13.9 37.1 14 51.2 0l170.2-167.8.5-.5c15.9-15.5 67.7-71.1 67.7-137.6C552 80.6 495.2 24 403.7 24zm57.7 263L291.2 454.7c-1.8 1.8-4.5 1.8-6.3 0L114.3 286.4C85.8 259.6 56 214 56 171.7 56 98.2 98.4 56 172.3 56c45.1 0 85.4 37 115.7 67.4C303.8 107.6 351.7 56 403.7 56 477.6 56 520 98.2 520 171.7c0 42.4-28.2 85.2-58.6 115.3z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaHeart';
export default styled(icon);