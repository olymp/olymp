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
      d="M768 1088v-128q0-14-9-23t-23-9h-192v-192q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v192h-192q-14 0-23 9t-9 23v128q0 14 9 23t23 9h192v192q0 14 9 23t23 9h128q14 0 23-9t9-23v-192h192q14 0 23-9t9-23zm576 64q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm256-256q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm256 128q0 212-150 362t-362 150q-192 0-338-128h-220q-146 128-338 128-212 0-362-150t-150-362 150-362 362-150h896q212 0 362 150t150 362z"
      fill={color}
    />
  </svg>);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
