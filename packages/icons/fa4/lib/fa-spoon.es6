import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1216 528q0 145-57 243.5t-152 135.5l45 821q2 26-16 45t-44 19h-192q-26 0-44-19t-16-45l45-821q-95-37-152-135.5t-57-243.5q0-128 42.5-249.5t117.5-200 160-78.5 160 78.5 117.5 200 42.5 249.5z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaSpoon';
export default styled(icon);