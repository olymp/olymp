import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg width={size || width} height={size || height} viewBox="0 0 1792 1792" {...rest}><path d="M1408 1344v-896q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-512v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v896q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h512v320q0 26 19 45t45 19h128q26 0 45-19t19-45zm256-928v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z" fill={color}/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);