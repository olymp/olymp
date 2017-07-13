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
      d="M1892 11q28 20 28 53v1408q0 20-11 36t-29 23l-640 256q-24 11-48 0l-616-246-616 246q-10 5-24 5-19 0-36-11-28-20-28-53v-1408q0-20 11-36t29-23l640-256q24-11 48 0l616 246 616-246q32-13 60 6zm-1284 135v1270l576 230v-1270zm-608 217v1270l544-217v-1270zm1792 1066v-1270l-544 217v1270z"
      fill={color}
    />
  </svg>);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
