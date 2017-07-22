import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304.51 64.201h47.851v175.07H95.639V64.201h47.851c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H13.698c-6.627 0-12 5.373-12 12v8.201c0 6.627 5.373 12 12 12h47.851v383.603H13.698c-6.627 0-12 5.373-12 12v8.2c0 6.627 5.373 12 12 12H143.49c6.627 0 12-5.373 12-12v-8.2c0-6.627-5.373-12-12-12H95.639V271.473h256.722v176.331H304.51c-6.627 0-12 5.373-12 12v8.2c0 6.627 5.373 12 12 12h129.792c6.627 0 12-5.373 12-12v-8.2c0-6.627-5.373-12-12-12h-47.851V64.201h47.851c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H304.51c-6.627 0-12 5.373-12 12v8.201c0 6.628 5.373 12 12 12z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaHeading';
export default styled(icon);