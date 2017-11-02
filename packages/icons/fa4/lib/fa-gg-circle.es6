import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M717 1354l271-271-279-279-88 88 192 191-96 96-279-279 279-279 40 40 87-87-127-128-454 454zm358-8l454-454-454-454-271 271 279 279 88-88-192-191 96-96 279 279-279 279-40-40-87 88zm717-450q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaGgCircle';
export default styled(icon);