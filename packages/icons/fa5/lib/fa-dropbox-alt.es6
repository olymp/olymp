import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M412.6 177.2l99.4-74.8L355.1 0 256 82.7 156.9 0 0 102.4l99.4 74.8L0 256.8l105.4 68.8v59.3l150.9 90.5 150.9-90.5v-59.7L512 256.8l-99.4-79.6zm-284.8 0L256 102.8l128.2 74.4L256 256.4l-128.2-79.2zm271.2 9.9l85.3 68.3L356.2 339l-86.4-72.1L399 187.1zM356.3 20.2l128.1 83.6-85.4 63.5-129.2-75 86.5-72.1zm-200.6 0l86.4 72.1-129.2 75-85.3-63.5 128.1-83.6zm-42.8 166.9l129.2 79.8-86.4 72.1-128-83.6 85.2-68.3zm278 188.6l-134.6 80.8-134.7-80.8v-39.5l35.3 23 99.1-82.7 99.1 82.7 35.8-23.4v39.9z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaDropboxAlt';
export default styled(icon);