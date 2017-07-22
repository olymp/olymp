import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M336 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zm16 464c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v416zm-85.3-211.78C280.02 235.74 288 214.78 288 192c0-52.93-43.07-96-96-96s-96 43.07-96 96c0 22.78 7.98 43.74 21.3 60.22-14.84 5.23-27.61 14.58-37.17 27.24C69.58 293.45 64 310.11 64 327.64V392c0 30.88 25.12 56 56 56h144c30.88 0 56-25.12 56-56v-64.36c0-17.53-5.58-34.19-16.13-48.18-9.56-12.66-22.33-22.01-37.17-27.24zM192 128c35.35 0 64 28.65 64 64 0 35.465-28.762 64-64 64-35.227 0-64-28.524-64-64 0-35.35 28.65-64 64-64zm96 264c0 13.25-10.75 24-24 24H120c-13.25 0-24-10.75-24-24v-64.36c0-21.44 14.21-40.27 34.81-46.16l16.29-4.65C160.51 283.96 175.79 288 192 288s31.49-4.04 44.9-11.17l16.29 4.65c20.6 5.89 34.81 24.72 34.81 46.16V392z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);