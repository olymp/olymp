import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1152 1248v416h-928q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1344q40 0 68 28t28 68v928h-416q-40 0-68 28t-28 68zm128 32h381q-15 82-65 132l-184 184q-50 50-132 65v-381z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaStickyNote';
export default styled(icon);