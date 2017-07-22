import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path d="M6 384h20c3.3 0 6 2.7 6 6v116c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V390c0-3.3 2.7-6 6-6zm122-42v164c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6V342c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6zm128-80v244c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6V262c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6zm128-112v356c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6V150c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6zM512 6v500c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6V6c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaSignal';
export default styled(icon);