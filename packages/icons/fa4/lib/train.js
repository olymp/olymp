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
      d="M1216 0q185 0 316.5 93.5t131.5 226.5v896q0 130-125.5 222t-305.5 97l213 202q16 15 8 35t-30 20h-1056q-22 0-30-20t8-35l213-202q-180-5-305.5-97t-125.5-222v-896q0-133 131.5-226.5t316.5-93.5h640zm-320 1344q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zm576-576v-512h-1152v512h1152z"
      fill={color}
    />
  </svg>);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
