import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1151 960h316q-1-3-2.5-8.5t-2.5-7.5l-212-496h-708l-212 496q-1 3-2.5 8.5t-2.5 7.5h316l95 192h320zm513 30v482q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-482q0-62 25-123l238-552q10-25 36.5-42t52.5-17h832q26 0 52.5 17t36.5 42l238 552q25 61 25 123z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaInbox';
export default styled(icon);