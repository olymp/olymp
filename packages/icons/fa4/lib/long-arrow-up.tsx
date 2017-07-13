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
      d="M1277 493q-9 19-29 19h-224v1248q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-1248h-224q-21 0-29-19t5-35l350-384q10-10 23-10 14 0 24 10l355 384q13 16 5 35z"
      fill={color}
    />
  </svg>);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
