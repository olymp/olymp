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
      d="M1420 638q10-216-161-222-231-8-312 261 44-19 82-19 85 0 74 96-4 57-74 167t-105 110q-43 0-82-169-13-54-45-255-30-189-160-177-59 7-164 100l-81 72-81 72 52 67q76-52 87-52 57 0 107 179 15 55 45 164.5t45 164.5q68 179 164 179 157 0 383-294 220-283 226-444zm244-222v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
      fill={color}
    />
  </svg>);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
