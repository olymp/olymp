import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg width={size || width} height={size || height} viewBox="0 0 1792 1792" {...rest}><path d="M448 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm644-420l-682 682q-37 37-90 37-52 0-91-37l-106-108q-38-36-38-90 0-53 38-91l681-681q39 98 114.5 173.5t173.5 114.5zm634-435q0 39-23 106-47 134-164.5 217.5t-258.5 83.5q-185 0-316.5-131.5t-131.5-316.5 131.5-316.5 316.5-131.5q58 0 121.5 16.5t107.5 46.5q16 11 16 28t-16 28l-293 169v224l193 107q5-3 79-48.5t135.5-81 70.5-35.5q15 0 23.5 10t8.5 25z" fill={color}/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);