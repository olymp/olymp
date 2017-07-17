import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M493.3 56.2l-37.5-37.5c-25-25-65.5-25-90.5 0l-49.9 49.9L289 42.3c-9.4-9.4-24.6-9.4-33.9 0L125.2 172.2c-4.7 4.7-4.7 12.3 0 17l5.7 5.7c4.7 4.7 12.3 4.7 17 0L272 70.6l20.7 20.7L12.8 371.2.2 485.3c-1.7 15.3 11.2 28.2 26.5 26.5l114.2-12.7 352.4-352.4c24.9-24.9 24.9-65.5 0-90.5zM126.1 468.6L33 478.9l10.3-93.1 271.9-271.9 82.7 82.7-271.8 272zm344.5-344.5L420.7 174 338 91.3l49.9-49.9c12.5-12.5 32.7-12.5 45.3 0l37.5 37.5c12.4 12.4 12.4 32.7-.1 45.2z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);