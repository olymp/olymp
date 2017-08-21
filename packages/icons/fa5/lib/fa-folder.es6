import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm16 272c0 8.837-7.163 16-16 16H48c-8.837 0-16-7.163-16-16V112c0-8.837 7.163-16 16-16h146.745l64 64H464c8.837 0 16 7.163 16 16v224z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaFolder';
export default styled(icon);