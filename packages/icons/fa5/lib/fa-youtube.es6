import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.3 120.3c-5.9-22.2-23.2-39.6-45.3-45.6C416.1 64 256 64 256 64S95.9 64 56 74.8c-22 5.9-39.4 23.4-45.3 45.6C0 160.5 0 244.4 0 244.4s0 83.8 10.7 124c5.9 22.2 23.2 38.9 45.3 44.8C95.9 424 256 424 256 424s160.1 0 200-10.8c22-5.9 39.4-22.7 45.3-44.8 10.7-40.2 10.7-124 10.7-124s0-83.9-10.7-124.1zM203.6 320.5V168.2l133.8 76.1-133.8 76.2z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaYoutube';
export default styled(icon);