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
      d="M224 1536h608v-1152h-640v1120q0 13 9.5 22.5t22.5 9.5zm1376-32v-1120h-640v1152h608q13 0 22.5-9.5t9.5-22.5zm128-1216v1216q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1344q66 0 113 47t47 113z"
      fill={color}
    />
  </svg>);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
