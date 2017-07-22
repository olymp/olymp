import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M32.032 352h255.93c28.425 0 42.767-34.488 22.627-54.627l-127.962-128c-12.496-12.496-32.758-12.497-45.255 0l-127.968 128C-10.695 317.472 3.55 352 32.032 352zM160 192l128 128H32l128-128z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaCaretUp';
export default styled(icon);