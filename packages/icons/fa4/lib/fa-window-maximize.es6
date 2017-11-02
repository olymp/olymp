import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M256 1408h1280v-768h-1280v768zm1536-1120v1216q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1472q66 0 113 47t47 113z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaWindowMaximize';
export default styled(icon);