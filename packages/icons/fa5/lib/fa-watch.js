import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M320 112.9V24c0-13.2-10.8-24-24-24H88C74.8 0 64 10.8 64 24v88.9C24.7 148.1 0 199.1 0 256s24.7 107.9 64 143.1V488c0 13.2 10.8 24 24 24h208c13.2 0 24-10.8 24-24v-88.9c39.3-35.2 64-86.2 64-143.1s-24.7-107.9-64-143.1zM96 32h192v57.7C259.8 73.3 227 64 192 64s-67.8 9.3-96 25.7V32zm192 448H96v-57.7c28.2 16.3 61 25.7 96 25.7s67.8-9.4 96-25.7V480zm-96-64c-88.6 0-160-71.8-160-160S103.5 96 192 96c88.4 0 160 71.6 160 160s-71.6 160-160 160zm49-92.2l-60.1-43.7c-3.1-2.3-4.9-5.9-4.9-9.7V150.3c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v109.9l51.8 37.7c5.4 3.9 6.5 11.4 2.6 16.8l-4.7 6.5c-3.8 5.3-11.3 6.5-16.7 2.6z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);