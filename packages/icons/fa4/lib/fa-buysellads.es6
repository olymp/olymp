import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1043 1086h-294l147-551zm86 322h311l-324-1024h-440l-324 1024h311l383-314zm535-992v960q0 118-85 203t-203 85h-960q-118 0-203-85t-85-203v-960q0-118 85-203t203-85h960q118 0 203 85t85 203z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaBuysellads';
export default styled(icon);