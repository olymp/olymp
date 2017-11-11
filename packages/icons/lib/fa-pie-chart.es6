import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M768 890l546 546q-106 108-247.5 168t-298.5 60q-209 0-385.5-103t-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103v762zm187 6h773q0 157-60 298.5t-168 247.5zm709-128h-768v-768q209 0 385.5 103t279.5 279.5 103 385.5z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaPieChart';
export default styled(icon);