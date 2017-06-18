import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) =>
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 1792 1792"
    {...rest}
  >
    <path
      d="M1593 349l-640 1280q-17 35-57 35-5 0-15-2-22-5-35.5-22.5t-13.5-39.5v-576h-576q-22 0-39.5-13.5t-22.5-35.5 4-42 29-30l1280-640q13-7 29-7 27 0 45 19 15 14 18.5 34.5t-6.5 39.5z"
      fill={color}
    />
  </svg>;
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
