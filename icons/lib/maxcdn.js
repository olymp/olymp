import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg width={size || width} height={size || height} viewBox="0 0 1792 1792" {...rest}><path d="M1745 773l-164 763h-334l178-832q13-56-15-88-27-33-83-33h-169l-204 953h-334l204-953h-286l-204 953h-334l204-953-153-327h1276q101 0 189.5 40.5t147.5 113.5q60 73 81 168.5t0 194.5z" fill={color}/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);