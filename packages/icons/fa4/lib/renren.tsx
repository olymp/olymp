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
      d="M1261 1570q-171 94-368 94-196 0-367-94 138-87 235.5-211t131.5-268q35 144 132.5 268t235.5 211zm-495-1428v485q0 252-126.5 459.5t-330.5 306.5q-181-215-181-495 0-187 83.5-349.5t229.5-269.5 325-137zm898 756q0 280-181 495-204-99-330.5-306.5t-126.5-459.5v-485q179 30 325 137t229.5 269.5 83.5 349.5z"
      fill={color}
    />
  </svg>);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
