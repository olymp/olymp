import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 0H48C21.5 0 0 21.5 0 48v288c0 26.5 21.5 48 48 48h192l-24 96h-72c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16h-72l-24-96h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM249 480l16-64h46l16 64h-78zm295-144c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-48h512v48zm0-80H32V48c0-8.8 7.2-16 16-16h480c8.8 0 16 7.2 16 16v208z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaDesktopAlt';
export default styled(icon);