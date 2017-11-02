import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} width="2048" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg"><path d="M2048 1536v128h-2048v-1536h128v1408h1920zm-384-1024l256 896h-1664v-576l448-576 576 576z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaAreaChart';
export default styled(icon);