import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M21.7 193c-.1 86.8 29 159.5 78.7 212.1H0V.1h87.2C45.7 50.3 21.6 116.2 21.7 193zM640 .1h-83.6c31.4 42.7 48.7 97.5 46.2 162.7.5 6 .5 11.7 0 24.1H230.2c-.2 109.7 38.9 194.9 138.6 195.3 68.5-.3 118-51 151.9-106.1l96.4 48.2c-17.4 30.9-36.5 57.8-57.9 80.8H640V.1zm-80.8 405h-.2.2zM556.1.1h.3l-.1-.1-.2.1zM325.4 9.8c-45.9.1-85.1 33.5-89.2 83.2h169.9C405 43.3 371.6 9.9 325.4 9.8z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaErlang';
export default styled(icon);