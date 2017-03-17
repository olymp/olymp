import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg width={size || width} height={size || height} viewBox="0 0 1792 1792" {...rest}><path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z" fill={color}/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);