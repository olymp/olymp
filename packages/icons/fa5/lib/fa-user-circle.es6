import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 32c118.663 0 216 96.055 216 216 0 45.887-14.373 88.578-38.928 123.692-11.413-36.912-44.537-64.38-84.385-67.413C371.483 288.374 384 257.149 384 224c0-70.741-57.249-128-128-128-70.74 0-128 57.249-128 128 0 33.149 12.517 64.374 35.313 88.279-39.861 3.033-72.994 30.519-84.396 67.45C54.424 344.761 40 302.154 40 256c0-118.663 96.055-216 216-216zm-96 184c0-53.019 42.981-96 96-96s96 42.981 96 96-42.981 96-96 96-96-42.981-96-96zm-53.333 188.058c0-43.808 31.782-68.058 64-68.058h40.622c28.662 10.663 60.712 10.68 89.422 0h40.622c32.717 0 64 24.665 64 68.073-83.416 79.913-215.066 79.926-298.666-.015z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaUserCircle';
export default styled(icon);