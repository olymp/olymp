import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M616 96H24c-13.255 0-24 10.745-24 24v272c0 13.255 10.745 24 24 24h592c13.255 0 24-10.745 24-24V120c0-13.255-10.745-24-24-24zm-8 224c-35.346 0-64 28.654-64 64H96c0-35.346-28.654-64-64-64V192c35.346 0 64-28.654 64-64h448c0 35.346 28.654 64 64 64v128zm-208-64c0 53.031-35.833 96-80 96-44.186 0-80-42.989-80-96 0-53.021 35.816-96 80-96s80 42.979 80 96z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaMoneyBill';
export default styled(icon);