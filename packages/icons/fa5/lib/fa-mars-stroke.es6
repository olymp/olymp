import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M372 64h-88c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h45.4l-49.6 49.6-31.1-31.1c-4.7-4.7-12.3-4.7-17 0l-5.7 5.7c-4.7 4.7-4.7 12.3 0 17l31.1 31.1-23.3 23.3C209.2 171.8 178 160 144 160 64.5 160 0 224.5 0 304s64.5 144 144 144 144-64.5 144-144c0-34-11.8-65.2-31.5-89.9l23.3-23.3 31.1 31.1c4.7 4.7 12.3 4.7 17 0l5.7-5.7c4.7-4.7 4.7-12.3 0-17l-31.1-31.1 49.6-49.6V164c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V76c-.1-6.6-5.5-12-12.1-12zM144 416c-61.9 0-112-50-112-112 0-61.9 50-112 112-112 61.9 0 112 50 112 112 0 61.9-50 112-112 112z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);