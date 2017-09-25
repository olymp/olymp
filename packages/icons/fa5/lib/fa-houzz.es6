import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M12.2 256L160 341.1 12.2 426.6V256M160 512l147.8-85.4V256L160 341.1V512zm0-512L12.2 85.4V256L160 170.6V0zm0 170.6L307.8 256V85.4L160 170.6z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaHouzz';
export default styled(icon);