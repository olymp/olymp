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
      d="M1408 1195q0-88-62.5-151t-150.5-63q-84 0-145 58l-241-120q2-16 2-23t-2-23l241-120q61 58 145 58 88 0 150.5-63t62.5-151-62.5-150.5-150.5-62.5-151 62.5-63 150.5q0 7 2 23l-241 120q-62-57-145-57-88 0-150.5 62.5t-62.5 150.5 62.5 150.5 150.5 62.5q83 0 145-57l241 120q-2 16-2 23 0 88 63 150.5t151 62.5 150.5-62.5 62.5-150.5zm256-779v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
      fill={color}
    />
  </svg>);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
