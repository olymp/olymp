import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) =>
  (<svg
    width={size || width}
    height={size || height}
    viewBox="0 0 1792 1792"
    {...rest}
  >
    <path
      d="M896 434v434h-145v-434h145zm398 0v434h-145v-434h145zm0 760l253-254v-795h-1194v1049h326v217l217-217h398zm398-1194v1013l-434 434h-326l-217 217h-217v-217h-398v-1158l109-289h1483z"
      fill={color}
    />
  </svg>);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
