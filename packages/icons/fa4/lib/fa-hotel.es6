import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest}  viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg"><path d="M256 1024h1728q26 0 45 19t19 45v448h-256v-256h-1536v256h-256v-1216q0-26 19-45t45-19h128q26 0 45 19t19 45v704zm576-320q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm1216 256v-64q0-159-112.5-271.5t-271.5-112.5h-704q-26 0-45 19t-19 45v384h1152z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaHotel';
export default styled(icon);