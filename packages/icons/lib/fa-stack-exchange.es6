import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1515 1253v66q0 85-57.5 144.5t-138.5 59.5h-57l-260 269v-269h-529q-81 0-138.5-59.5t-57.5-144.5v-66h1238zm0-326v255h-1238v-255h1238zm0-328v255h-1238v-255h1238zm0-140v67h-1238v-67q0-84 57.5-143.5t138.5-59.5h846q81 0 138.5 59.5t57.5 143.5z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaStackExchange';
export default styled(icon);