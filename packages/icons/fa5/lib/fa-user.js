import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M430.8 312.6l-48.7-13.9C413.5 266.6 432 223.1 432 176 432 78.8 353.2 0 256 0S80 78.8 80 176c0 47.1 18.5 90.6 49.9 122.8l-48.7 13.9C33.4 326.3 0 370 0 420.3V448c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-27.7c0-49.7-32.8-93.8-81.2-107.7zM112 176c0-79.5 64.5-144 144-144s144 64.5 144 144c0 79.6-64.5 144-144 144-79.7 0-144-64.7-144-144zm368 272c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-27.7c0-35.7 23.7-67.1 58-76.9l69.8-19.9c27.5 18 60.6 28.5 96.1 28.5 35.6 0 68.6-10.6 96.1-28.5l69.8 19.9c34.3 9.8 58 41.2 58 76.9V448z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);