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
      d="M2048 768h-128v640h128v384h-384v-128h-896v128h-384v-384h128v-128h-384v128h-384v-384h128v-640h-128v-384h384v128h896v-128h384v384h-128v128h384v-128h384v384zm-256-256v128h128v-128h-128zm-640-384v128h128v-128h-128zm-1280 0v128h128v-128h-128zm128 1152v-128h-128v128h128zm1280-128h-128v128h128v-128zm-1152 0h896v-128h128v-640h-128v-128h-896v128h-128v640h128v128zm512 512v-128h-128v128h128zm1280 0v-128h-128v128h128zm-128-256v-640h-128v-128h-384v384h128v384h-384v-128h-384v128h128v128h896v-128h128z"
      fill={color}
    />
  </svg>;
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
