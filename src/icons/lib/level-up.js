import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg width={size || width} height={size || height} viewBox="0 0 1792 1792" {...rest}><path d="M1402 603q-18 37-58 37h-192v864q0 14-9 23t-23 9h-704q-21 0-29-18-8-20 4-35l160-192q9-11 25-11h320v-640h-192q-40 0-58-37-17-37 9-68l320-384q18-22 49-22t49 22l320 384q27 32 9 68z" fill={color}/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);