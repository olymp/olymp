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
      d="M512 0q13 0 22.5 9.5t9.5 22.5v1472q0 20-17 28l-480 256q-7 4-15 4-13 0-22.5-9.5t-9.5-22.5v-1472q0-20 17-28l480-256q7-4 15-4zm1248 0q13 0 22.5 9.5t9.5 22.5v1472q0 20-17 28l-480 256q-7 4-15 4-13 0-22.5-9.5t-9.5-22.5v-1472q0-20 17-28l480-256q7-4 15-4zm-1120 0q8 0 14 3l512 256q18 10 18 29v1472q0 13-9.5 22.5t-22.5 9.5q-8 0-14-3l-512-256q-18-10-18-29v-1472q0-13 9.5-22.5t22.5-9.5z"
      fill={color}
    />
  </svg>;
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
