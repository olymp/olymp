import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M287.968 288H32.038c-28.425 0-42.767 34.488-22.627 54.627l127.962 128c12.496 12.496 32.758 12.497 45.255 0l127.968-128C330.695 322.528 316.45 288 287.968 288zM160 448L32 320h256L160 448z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);