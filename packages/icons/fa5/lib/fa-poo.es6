import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32c27.8 0 69 32.1 69 63 0 24.3-6 35-15.4 49H340c30.9 0 56 25.1 56 56 0 20-8.4 38.8-25 55.8l-.2.2H382c30.9 0 56 25.1 56 56 0 14.6-4.4 35.4-24.1 56H424c30.9 0 56 25.1 56 56s-25.1 56-56 56H88c-28.9 0-56-26.2-56-56 0-28.9 17.3-49.7 45.7-55 .2 0 11.5-2.2 29.2-5.9-16.6-7.5-32-32.1-32-51 0-27.4 11.2-44.3 37.2-53.1.2-.1 12.5-4.2 30.8-11-13.2-7.9-26.9-24-26.9-41 0-26.6 9.1-48 33.6-58.3C151.4 147.9 256 129 256 32m0-32h-32v32c0 27.6-11.2 48.9-34.2 65-9 6.3-24.3 14.9-46.3 20.2-1.8.4-3.9.9-6.5 2-18.6 7.8-32.6 20.4-41.7 37.4C87.8 170.7 84 187.7 84 207c0 8.9 1.9 17.9 5.6 26.6C59 248.3 42.9 275.1 42.9 312c0 10.6 2.6 21.7 7.1 32.3C19 358.1 0 387.6 0 424c0 22.6 9.7 45.2 26.7 61.9C43.4 502.5 65.8 512 88 512h336c48.5 0 88-39.5 88-88 0-34-19.3-63.5-47.6-78.2 4.3-12.7 5.6-24.4 5.6-33.8 0-34-19.4-63.6-47.7-78.2 3.8-10.9 5.7-22.2 5.7-33.8 0-43.1-31.2-79.1-72.2-86.6.7-5.5 1.1-11.6 1.1-18.4 0-13.1-3.8-26.3-11.2-39-5.9-10.1-14.2-19.9-23.9-28.3C301.7 10.3 277.1 0 256 0zm96 352H160c-6.6 0-10.4 7.5-6.4 12.8C176.9 395.9 214.1 416 256 416s79.1-20.1 102.4-51.2c4-5.3.2-12.8-6.4-12.8zM200 224c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 32c-8.8 0-16 7.2-16 16 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-17.6 14.4-32 32-32 4.4 0 8 3.6 8 8s-3.6 8-8 8zm112-32c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 32c-8.8 0-16 7.2-16 16 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-17.6 14.4-32 32-32 4.4 0 8 3.6 8 8s-3.6 8-8 8z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaPoo';
export default styled(icon);