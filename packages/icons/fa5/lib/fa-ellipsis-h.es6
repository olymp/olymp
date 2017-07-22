import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M256 184c-39.764 0-72 32.235-72 72s32.236 72 72 72c39.765 0 72-32.235 72-72s-32.235-72-72-72zm0 112c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40zm176-112c-39.764 0-72 32.235-72 72s32.236 72 72 72c39.765 0 72-32.235 72-72s-32.235-72-72-72zm0 112c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40zM80 184c-39.765 0-72 32.235-72 72s32.235 72 72 72 72-32.235 72-72-32.235-72-72-72zm0 112c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaEllipsisH';
export default styled(icon);