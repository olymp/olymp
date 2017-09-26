import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 512"><path d="M204.9 288l3.5 195.5c-11.3-2-20.9-3.5-28.7-3.5-7.5 0-17 1.5-28.7 3.5l3.5-195.5C105.7 203.7 56.5 113.1 0 28.5 10.6 31.3 20.4 32 29.5 32c8 0 18.1-.7 30.3-3.5 36.4 64.2 72.9 123.2 119.9 200.4 33.2-54.7 80.9-128.1 119.9-200.4 9.8 2.6 19.6 3.5 29.2 3.5 10.2 0 20.6-.9 31.1-3.5C329.4 71.1 243 221.3 204.9 288z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaYahoo';
export default styled(icon);