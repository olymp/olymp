import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M139.315 32c6.889 0 12.364 5.787 11.982 12.666l-14.667 264c-.353 6.359-5.613 11.334-11.982 11.334H67.352c-6.369 0-11.628-4.975-11.982-11.334l-14.667-264C40.321 37.787 45.796 32 52.685 32h86.63M96 352c35.29 0 64 28.71 64 64s-28.71 64-64 64-64-28.71-64-64 28.71-64 64-64M139.315 0h-86.63C27.457 0 7.353 21.246 8.753 46.441l14.667 264c.652 11.728 5.864 22.178 13.854 29.665C14.613 357.682 0 385.168 0 416c0 52.935 43.065 96 96 96s96-43.065 96-96c0-30.832-14.613-58.318-37.274-75.894 7.991-7.487 13.203-17.937 13.854-29.665l14.667-264C184.647 21.251 164.548 0 139.315 0z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaExclamation';
export default styled(icon);