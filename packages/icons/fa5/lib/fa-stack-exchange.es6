import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M43.5 322.8h361.1V342c0 33-25.7 59.5-57.2 59.5h-16.6L254.9 480v-78.5H100.6c-31.5 0-57.2-26.5-57.2-59.5v-19.2zm0-20.7h361.1v-74.4H43.5v74.4zm0-95.7h361.1V132H43.5v74.4zM347.4 32H100.6c-31.5 0-57.2 26.5-57.2 59.2v19.5h361.1V91.2c0-32.7-25.6-59.2-57.1-59.2z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaStackExchange';
export default styled(icon);