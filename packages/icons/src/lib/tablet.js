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
      d="M960 1408q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm384-160v-960q0-13-9.5-22.5t-22.5-9.5h-832q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h832q13 0 22.5-9.5t9.5-22.5zm128-960v1088q0 66-47 113t-113 47h-832q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h832q66 0 113 47t47 113z"
      fill={color}
    />
  </svg>);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
