import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) =>
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 1792 1792"
    {...rest}
  >
    <path
      d="M1322 597l16-175h-884l47 534h612l-22 228-197 53-196-53-13-140h-175l22 278 362 100h4v-1l359-99 50-544h-644l-15-181h674zm-1130-469h1408l-128 1438-578 162-574-162z"
      fill={color}
    />
  </svg>;
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
