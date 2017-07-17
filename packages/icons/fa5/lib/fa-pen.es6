import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M12.8 371.2L.2 485.3c-1.7 15.3 11.2 28.2 26.5 26.5l114.2-12.7 352.4-352.4c25-25 25-65.5 0-90.5l-37.5-37.5c-25-25-65.5-25-90.5 0L12.8 371.2zm113.3 97.4L33 478.9l10.3-93.1 271.9-271.9 82.7 82.7-271.8 272zm344.5-344.5L420.7 174 338 91.3l49.9-49.9c12.5-12.5 32.7-12.5 45.3 0l37.5 37.5c12.4 12.4 12.4 32.7-.1 45.2z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);