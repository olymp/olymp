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
      d="M1088 832q0-26-19-45t-45-19h-256q-26 0-45 19t-19 45 19 45 45 19h256q26 0 45-19t19-45zm576-192v960q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-960q0-26 19-45t45-19h1408q26 0 45 19t19 45zm64-448v256q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1536q26 0 45 19t19 45z"
      fill={color}
    />
  </svg>);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
