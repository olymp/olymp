import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M272 160v64h184c13.233 0 24 10.767 24 24v80c0 13.233-10.767 24-24 24H272v148c0 6.627-5.373 12-12 12h-8c-6.627 0-12-5.373-12-12V352H83.313a23.84 23.84 0 0 1-16.97-7.029l-45.657-45.657c-6.249-6.248-6.249-16.379 0-22.627l45.657-45.657a23.84 23.84 0 0 1 16.97-7.029H240v-64H56c-13.233 0-24-10.767-24-24V56c0-13.233 10.767-24 24-24h184V12c0-6.627 5.373-12 12-12h8c6.627 0 12 5.373 12 12v20h156.687a23.84 23.84 0 0 1 16.97 7.029l45.657 45.657c6.249 6.248 6.249 16.379 0 22.627l-45.657 45.657a23.84 23.84 0 0 1-16.97 7.029H272zm185.373-64l-32-32H64v64h361.373l32-32zM448 256H86.627l-32 32 32 32H448v-64z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaMapSigns';
export default styled(icon);