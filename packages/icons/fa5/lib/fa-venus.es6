import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512"><path d="M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 74.1 56 135.2 128 143.1V384H76c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h52v52c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12v-52h52c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12h-52v-64.9c72-7.9 128-69 128-143.1zm-256 0c0-61.9 50-112 112-112 61.9 0 112 50 112 112 0 61.9-50 112-112 112-61.9 0-112-50-112-112z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaVenus';
export default styled(icon);