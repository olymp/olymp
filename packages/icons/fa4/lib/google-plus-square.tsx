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
      d="M1045 905q0-26-6-64h-362v132h217q-3 24-16.5 50t-37.5 53-66.5 44.5-96.5 17.5q-99 0-169-71t-70-171 70-171 169-71q92 0 153 59l104-101q-108-100-257-100-160 0-272 112.5t-112 271.5 112 271.5 272 112.5q165 0 266.5-105t101.5-270zm345 46h109v-110h-109v-110h-110v110h-110v110h110v110h110v-110zm274-535v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
      fill={color}
    />
  </svg>);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
