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
      d="M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z"
      fill={color}
    />
  </svg>;
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
