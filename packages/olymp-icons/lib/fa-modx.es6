import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1427 709l-614-386 92-151h855zm-1022 265l-184-116v-858l1183 743zm1019-135l147 95v858l-532-335zm-37-21l-500 802h-855l356-571z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaModx';
export default styled(icon);