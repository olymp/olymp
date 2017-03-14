import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg width={size || width} height={size || height} viewBox="0 0 1792 1792" {...rest}><path d="M1408 1280q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zm-768-768q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zm1024 768q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5zm-96-1088q0 20-13 38l-1056 1408q-19 26-51 26h-160q-26 0-45-19t-19-45q0-20 13-38l1056-1408q19-26 51-26h160q26 0 45 19t19 45zm-672 320q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z" fill={color}/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);