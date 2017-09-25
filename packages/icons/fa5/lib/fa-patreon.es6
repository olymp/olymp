import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M489.6 200.2c0 92.5-75.2 167.7-167.7 167.7-92.7 0-168.2-75.2-168.2-167.7 0-92.7 75.5-168.2 168.2-168.2 92.5 0 167.7 75.4 167.7 168.2zM22.4 480h82.1V32H22.4v448z" class="st1"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaPatreon';
export default styled(icon);