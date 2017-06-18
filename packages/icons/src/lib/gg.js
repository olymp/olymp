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
      d="M608 800l384 384-384 384-672-672 672-672 168 168-96 96-72-72-480 480 480 480 193-193-289-287zm576-576l672 672-672 672-168-168 96-96 72 72 480-480-480-480-193 193 289 287-96 96-384-384z"
      fill={color}
    />
  </svg>;
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
