import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M607.974 320H544V120c0-13.255-10.745-24-24-24H252.024c-10.998 0-16.202 13.562-8.028 20.919l8.889 8a12 12 0 0 0 8.028 3.081H512v192h-63.968c-29.239 0-43.177 36.192-21.407 55.785l79.969 72c12.169 10.952 30.644 10.953 42.814 0l79.974-72C651.113 356.226 637.264 320 607.974 320zM528 424l-80-72h160l-80 72zm-131.997-28.92l-8.889-8a12 12 0 0 0-8.028-3.08H128V192h63.968c29.239 0 43.177-36.192 21.407-55.785l-79.968-72c-12.169-10.952-30.644-10.953-42.814 0l-79.974 72C-11.114 155.774 2.738 192 32.026 192H96v200c0 13.255 10.745 24 24 24h267.976c10.998 0 16.202-13.562 8.027-20.92zM32 160l80-72 80 72H32z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaRetweetAlt';
export default styled(icon);