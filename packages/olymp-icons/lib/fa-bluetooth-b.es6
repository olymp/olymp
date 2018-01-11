import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M980 1423l173-172-173-172v344zm0-710l173-172-173-172v344zm32 183l356 356-539 540v-711l-297 296-108-108 372-373-372-373 108-108 297 296v-711l539 540z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaBluetoothB';
export default styled(icon);