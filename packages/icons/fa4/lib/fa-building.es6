import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1472 0q26 0 45 19t19 45v1664q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-1664q0-26 19-45t45-19h1280zm-832 288v64q0 14 9 23t23 9h64q14 0 23-9t9-23v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zm0 256v64q0 14 9 23t23 9h64q14 0 23-9t9-23v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zm0 256v64q0 14 9 23t23 9h64q14 0 23-9t9-23v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zm0 256v64q0 14 9 23t23 9h64q14 0 23-9t9-23v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zm-128 320v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zm512 1280v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-512v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 1024v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaBuilding';
export default styled(icon);