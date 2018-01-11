import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M128 128h1536v1536h-1536v-1536zm1085 1115l-221-631 221-297h-634l221 297-221 631 317 304z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaBlackTie';
export default styled(icon);