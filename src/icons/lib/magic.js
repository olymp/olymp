import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg width={size || width} height={size || height} viewBox="0 0 1792 1792" {...rest}><path d="M1254 581l293-293-107-107-293 293zm447-293q0 27-18 45l-1286 1286q-18 18-45 18t-45-18l-198-198q-18-18-18-45t18-45l1286-1286q18-18 45-18t45 18l198 198q18 18 18 45zm-1351-190l98 30-98 30-30 98-30-98-98-30 98-30 30-98zm350 162l196 60-196 60-60 196-60-196-196-60 196-60 60-196zm930 478l98 30-98 30-30 98-30-98-98-30 98-30 30-98zm-640-640l98 30-98 30-30 98-30-98-98-30 98-30 30-98z" fill={color}/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);