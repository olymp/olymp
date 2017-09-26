import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M412 284h-24c-2.25 0-4 1.75-4 4v28h-32V160c0-2.25-1.75-4-4-4h-24c-2.25 0-4 1.75-4 4v28h-32v-28c0-2.25-1.75-4-4-4h-24c-2.25 0-4 1.75-4 4v28h-32v-28c0-5.25-7-4-10.25-4v-33.25c7.25-1.75 15-3 22.5-3 9.501 0 18.251 3.75 27.5 3.75 4 0 24.25-1 24.25-7V64c0-2.25-1.75-4-4-4-4.5 0-13.25 3.75-21 3.75-8.499 0-18.25-3.75-28.501-3.75-7 0-14 1-20.75 2.5v-4.25c4.75-2.25 8-7.25 8-12.5 0-18.149-27.499-18.167-27.499 0 0 5.25 3.25 10.25 8 12.5V156c-3.25 0-10.25-1.25-10.25 4v28h-32v-28c0-2.25-1.75-4-4-4h-24c-2.25 0-4 1.75-4 4v28H96v-28c0-2.25-1.75-4-4-4H68c-2.25 0-4 1.75-4 4v156H32v-28c0-2.25-1.75-4-4-4H4c-2.25 0-4 1.75-4 4v192h160v-84c0-63.507 96-63.525 96 0v84h160V288c0-2.25-1.75-4-4-4zm-252-4.001c0 2.25-1.75 4-4 4h-24c-2.25 0-4-1.75-4-4V224c0-2.25 1.75-4 4-4h24c2.25 0 4 1.75 4 4v55.999zm128 0c0 2.25-1.75 4-4 4h-24c-2.25 0-4-1.75-4-4V224c0-2.25 1.75-4 4-4h24c2.25 0 4 1.75 4 4v55.999z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaFortAwesome';
export default styled(icon);