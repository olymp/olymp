import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm16 336c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V112c0-8.822 7.178-16 16-16h416c8.822 0 16 7.178 16 16v288zm-44-80H332c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-64H332c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-64H332c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-185.84 60.17l-6.14-2.11C251.62 237.83 256 223.42 256 208c0-44.11-35.89-80-80-80s-80 35.89-80 80c0 15.42 4.38 29.83 11.98 42.06l-6.14 2.11C79.21 259.93 64 281.22 64 305.14V340c0 24.26 19.74 44 44 44h136c24.26 0 44-19.74 44-44v-34.86c0-23.92-15.21-45.21-37.84-52.97zM128 208c0-26.51 21.49-48 48-48s48 21.49 48 48c0 26.425-21.413 48-48 48-26.533 0-48-21.52-48-48zm128 132c0 6.63-5.37 12-12 12H108c-6.63 0-12-5.37-12-12v-34.86c0-10.25 6.52-19.37 16.22-22.7l20.66-7.08c12.45 8 27.25 12.64 43.12 12.64s30.67-4.64 43.12-12.64l20.66 7.08c9.7 3.33 16.22 12.45 16.22 22.7V340z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaAddressCard';
export default styled(icon);