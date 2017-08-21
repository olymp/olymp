import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M96 152c39.765 0 72-32.235 72-72S135.765 8 96 8 24 40.235 24 80s32.235 72 72 72zm0-112c22.056 0 40 17.944 40 40s-17.944 40-40 40-40-17.944-40-40 17.944-40 40-40zm0 144c-39.765 0-72 32.235-72 72s32.235 72 72 72 72-32.235 72-72-32.235-72-72-72zm0 112c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40zm0 64c-39.765 0-72 32.235-72 72s32.235 72 72 72 72-32.235 72-72-32.235-72-72-72zm0 112c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaEllipsisV';
export default styled(icon);