import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) =>
  (<svg
    width={size || width}
    height={size || height}
    viewBox="0 0 1792 1792"
    {...rest}
  >
    <path
      d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zm0 1312q148 0 273-73t198-198 73-273-73-273-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73zm96-224q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h192q14 0 23 9t9 23v576q0 14-9 23t-23 9h-192zm-384 0q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h192q14 0 23 9t9 23v576q0 14-9 23t-23 9h-192z"
      fill={color}
    />
  </svg>);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
