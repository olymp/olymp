import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M464 96H352V56c0-13.255-10.745-24-24-24H184c-13.255 0-24 10.745-24 24v40H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V144c0-26.51-21.49-48-48-48zM192 64h128v32H192V64zm192 64v320H128V128h256zM32 432V144c0-8.822 7.178-16 16-16h48v320H48c-8.822 0-16-7.178-16-16zm448 0c0 8.822-7.178 16-16 16h-48V128h48c8.822 0 16 7.178 16 16v288z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaSuitcase';
export default styled(icon);