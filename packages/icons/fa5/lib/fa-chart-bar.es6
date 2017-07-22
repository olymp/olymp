import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500 416c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v340h468zm-340-70v-84c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6v84c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6zm288 0V102c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6v244c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6zm-96 0V198c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6v148c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6zm-96 0V134c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6v212c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);