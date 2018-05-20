import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg width={size || width} height={size || height} viewBox="0 0 1792 1792" {...rest}><path d="M640 1280q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm351 94q-13-232-177-396t-396-177q-14-1-24 9t-10 23v128q0 13 8.5 22t21.5 10q154 11 264 121t121 264q1 13 10 21.5t22 8.5h128q13 0 23-10t9-24zm384 1q-5-154-56-297.5t-139.5-260-205-205-260-139.5-297.5-56q-14-1-23 9-10 10-10 23v128q0 13 9 22t22 10q204 7 378 111.5t278.5 278.5 111.5 378q1 13 10 22t22 9h128q13 0 23-10 11-9 9-23zm289-959v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z" fill={color}/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);