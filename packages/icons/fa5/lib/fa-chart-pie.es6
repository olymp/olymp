import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 12.3V224h212c6.9 0 12.4-5.8 12-12.7C473.6 97.9 382.3 6.7 268.7.3c-6.9-.4-12.7 5.1-12.7 12zm32 22c80.3 13.4 144.3 77.3 157.7 157.7H288V34.3zM280 256l150 150.2c4.9 4.9 12.9 4.6 17.5-.5 34.9-39 53.8-88 56.5-137 .4-6.9-5.1-12.7-12-12.7H280zm156.9 111.8l-79.6-79.9h112.4c-4.8 28.6-16 56.3-32.8 79.9zM224 256V44.2c0-6.9-5.8-12.4-12.8-12C93.6 38.9.2 136.5 0 255.6c-.3 193.1 229.6 296 373.1 168 5.2-4.6 5.4-12.6.5-17.5L224 256zm-192 0c0-96.6 70.8-174.6 160-189.5V256c0 16.3-2.4 10.8 9.4 22.6L335.3 413C209.3 502.9 32 412 32 256z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaChartPie';
export default styled(icon);