import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1699 186q0 35-43 78l-632 632v768h320q26 0 45 19t19 45-19 45-45 19h-896q-26 0-45-19t-19-45 19-45 45-19h320v-768l-632-632q-43-43-43-78 0-23 18-36.5t38-17.5 43-4h1408q23 0 43 4t38 17.5 18 36.5z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaGlass';
export default styled(icon);