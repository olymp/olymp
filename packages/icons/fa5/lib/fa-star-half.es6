import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" width="576" height="512" viewBox="0 0 576 512"><path d="M545.864 225.998L440.147 329.039l24.957 145.496c4.493 26.194-23.12 45.986-46.43 33.731L288 439.572l-130.673 68.694c-23.433 12.318-50.907-7.63-46.43-33.731l24.957-145.496L30.136 225.998c-18.965-18.485-8.466-50.771 17.735-54.578l146.097-21.228 65.337-132.377c11.764-23.835 45.708-23.671 57.391 0l65.337 132.377L528.13 171.42c26.209 3.808 36.693 36.099 17.734 54.578zm-22.36-22.892l-.008-.024-162.713-23.642-72.771-147.439-.023-.001-72.771 147.44-162.714 23.643-.008.024 117.741 114.76-27.795 162.043.024.017L288 403.42l145.519 76.499.036-.024-27.792-162.028 117.741-114.761zM288 367.268l-103.063 54.18 19.683-114.753-83.375-81.264 115.221-16.741L288 104.279v262.989z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaStarHalf';
export default styled(icon);