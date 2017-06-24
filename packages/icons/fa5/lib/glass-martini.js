import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M508 26.6C517.1 16.3 509.7 0 496 0H16C2.3 0-5.1 16.3 4 26.6L240 294v186H122c-14.4 0-26 11.6-26 26 0 3.3 2.7 6 6 6h308c3.3 0 6-2.7 6-6 0-14.4-11.6-26-26-26H272V294L508 26.6zM460.5 32L256 263.8 51.5 32h409z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);