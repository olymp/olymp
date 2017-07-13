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
      d="M1408 303l-303 582 24 31h279v415h-507l-44 30-142 273-30 30h-301v-303l303-583-24-30h-279v-415h507l44-30 142-273 30-30h301v303z"
      fill={color}
    />
  </svg>);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
