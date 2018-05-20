import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg width={size || width} height={size || height} viewBox="0 0 1792 1792" {...rest}><path d="M640 1008v-224q0-16-16-16h-96q-16 0-16 16v224q0 16 16 16h96q16 0 16-16zm512 0v-224q0-16-16-16h-96q-16 0-16 16v224q0 16 16 16h96q16 0 16-16zm512 32v752h-640v-320q0-80-56-136t-136-56-136 56-56 136v320h-640v-752q0-16 16-16h96q16 0 16 16v112h128v-624q0-16 16-16h96q16 0 16 16v112h128v-112q0-16 16-16h96q16 0 16 16v112h128v-112q0-16 16-16h16v-393q-32-19-32-55 0-26 19-45t45-19 45 19 19 45q0 36-32 55v9h272q16 0 16 16v224q0 16-16 16h-272v128h16q16 0 16 16v112h128v-112q0-16 16-16h96q16 0 16 16v112h128v-112q0-16 16-16h96q16 0 16 16v624h128v-112q0-16 16-16h96q16 0 16 16z" fill={color}/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);