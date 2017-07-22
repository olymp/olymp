import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M472 120c75.2 0 136 60.8 136 136s-60.8 136-136 136c-42.1 0-80-24-97-40H265c-17 16-43.1 40-97 40-75.2 0-136-60.8-136-136s60.8-136 136-136h304m0-32H168C75.2 88 0 163.2 0 256s75.2 168 168 168c41.5 0 79.5-15.1 108.8-40h86.4c29.3 24.9 67.3 40 108.8 40 92.8 0 168-75.2 168-168S564.8 88 472 88zm40 100c-19.9 0-36 16.1-36 36s16.1 36 36 36 36-16.1 36-36-16.1-36-36-36zm-64 64c-19.9 0-36 16.1-36 36s16.1 36 36 36 36-16.1 36-36-16.1-36-36-36zm-268-16v-46c0-3.3-2.7-6-6-6h-28c-3.3 0-6 2.7-6 6v46H94c-3.3 0-6 2.7-6 6v28c0 3.3 2.7 6 6 6h46v46c0 3.3 2.7 6 6 6h28c3.3 0 6-2.7 6-6v-46h46c3.3 0 6-2.7 6-6v-28c0-3.3-2.7-6-6-6h-46z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaGamepad';
export default styled(icon);