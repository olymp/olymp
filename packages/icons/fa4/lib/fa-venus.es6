import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 576q0 221-147.5 384.5t-364.5 187.5v260h224q14 0 23 9t9 23v64q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224h-224q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-260q-150-16-271.5-103t-186-224-52.5-292q11-134 80.5-249t182-188 245.5-88q170-19 319 54t236 212 87 306zm-1024 0q0 185 131.5 316.5t316.5 131.5 316.5-131.5 131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaVenus';
export default styled(icon);