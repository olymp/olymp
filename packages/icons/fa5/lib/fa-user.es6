import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M376.788 304C412.456 270.302 432 224.227 432 176 432 78.817 353.231 0 256 0 158.817 0 80 78.769 80 176c0 48.403 19.674 94.424 55.212 128C52.749 304 0 365.933 0 434v25c0 29.224 23.776 53 53 53h406c29.224 0 53-23.776 53-53v-25c0-67.642-52.262-130-135.212-130zM112 176c0-79.529 64.471-144 144-144s144 64.471 144 144-64.471 144-144 144-144-64.471-144-144zm368 283c0 11.598-9.402 21-21 21H53c-11.598 0-21-9.402-21-21v-25c0-54.124 43.876-98 98-98h52.615c46.542 21.346 100.189 21.364 146.771 0H382c54.124 0 98 43.876 98 98v25z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaUser';
export default styled(icon);