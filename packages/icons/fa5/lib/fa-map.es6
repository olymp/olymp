import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M531.004 34.78L397.62 94.04 184.791 33.231a31.997 31.997 0 0 0-21.788 1.527l-144 64A32 32 0 0 0 0 128v319.978c0 23.291 23.994 38.577 44.996 29.242l133.384-59.26 212.829 60.808a31.997 31.997 0 0 0 21.788-1.527l144-64A31.997 31.997 0 0 0 576 384V64.022c0-23.291-23.994-38.577-44.996-29.242zM192 68.571l192 54.857v320l-192-54.857v-320zM32 448V128l128-56.889v320L32 448zm512-64l-128 56.889v-320L544 64v320z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaMap';
export default styled(icon);