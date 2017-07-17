import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zm-194.6-52.6l-79.9-52.1c-5.6-3.6-7.1-11.1-3.5-16.6l6.6-10.1c3.6-5.6 11.1-7.1 16.6-3.5l59.9 39L296 245.3c3.6-5.5 11.1-7.1 16.6-3.5l10 6.6c5.5 3.6 7.1 11.1 3.5 16.6L222 423.9c-3.6 5.5-11.1 7.1-16.6 3.5z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);