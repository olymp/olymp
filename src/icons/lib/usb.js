import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg width={size || width} height={size || height} viewBox="0 0 1792 1792" {...rest}><path d="M2032 805q16 8 16 27t-16 27l-320 192q-8 5-16 5-9 0-16-4-16-10-16-28v-128h-858q37 58 83 165 16 37 24.5 55t24 49 27 47 27 34 31.5 26 33 8h96v-96q0-14 9-23t23-9h320q14 0 23 9t9 23v320q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-96h-96q-32 0-61-10t-51-23.5-45-40.5-37-46-33.5-57-28.5-57.5-28-60.5q-23-53-37-81.5t-36-65-44.5-53.5-46.5-17h-360q-22 84-91 138t-157 54q-106 0-181-75t-75-181 75-181 181-75q88 0 157 54t91 138h104q24 0 46.5-17t44.5-53.5 36-65 37-81.5q19-41 28-60.5t28.5-57.5 33.5-57 37-46 45-40.5 51-23.5 61-10h107q21-57 70-92.5t111-35.5q80 0 136 56t56 136-56 136-136 56q-62 0-111-35.5t-70-92.5h-107q-17 0-33 8t-31.5 26-27 34-27 47-24 49-24.5 55q-46 107-83 165h1114v-128q0-18 16-28t32 1z" fill={color}/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);