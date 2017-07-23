import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M237.27 72.083l-71.986-64c-12.125-10.777-30.395-10.777-42.52 0l-71.987 64C28.973 91.465 42.473 128 72.037 128h53.987v348h-94a11.996 11.996 0 0 0-8.485 3.515l-12 12C3.979 499.074 9.333 512 20.024 512h118c13.255 0 24-10.745 24-24V128h53.986c29.552 0 43.072-36.528 21.26-55.917zM72.024 96l72-64 72 64h-144z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaLevelUpAlt';
export default styled(icon);