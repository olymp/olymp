import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512"><path d="M245.8 234.2c-24-24-54.5-37.8-85.8-41.3V160h44c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12h-44V57.8l32.1 32.1c4.7 4.7 12.3 4.7 17 0l5.7-5.7c4.7-4.7 4.7-12.3 0-17L152.5 5.1c-4.7-4.7-12.3-4.7-17 0L73.3 67.3c-4.7 4.7-4.7 12.3 0 17L79 90c4.7 4.7 12.3 4.7 17 0l32-32.2V128H84c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h44v32.9c-31.4 3.5-61.8 17.2-85.8 41.3-56.2 56.2-56.2 147.4 0 203.6 56.2 56.2 147.4 56.2 203.6 0 56.3-56.2 56.3-147.4 0-203.6zM144 448c-61.9 0-112-50-112-112 0-61.9 50-112 112-112 61.9 0 112 50 112 112 0 61.9-50 112-112 112z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);