import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500 416c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v340h468zM387.7 167.4l87.9 175.9c2 4-.9 8.7-5.4 8.7H102c-3.3 0-6-2.7-6-6v-88.3c0-1.1.3-2.2.9-3.1l91.2-152c2-3.3 6.6-3.9 9.4-1.2l118.3 118.3c2.3 2.3 6.1 2.3 8.5 0l53.9-53.9c2.8-2.8 7.7-2 9.5 1.6zM128 266.5V314c0 3.3 2.7 6 6 6h284.5c4.5 0 7.4-4.7 5.4-8.7L379 221.5c-1.8-3.7-6.7-4.4-9.6-1.6L324.3 265c-2.3 2.3-6.2 2.3-8.5 0l-112-112a5.96 5.96 0 0 0-9.4 1.2l-65.5 109.2c-.6 1-.9 2-.9 3.1z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);