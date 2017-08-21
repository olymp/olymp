import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M488 352h-40V86.7l55.6-55.6c4.7-4.7 4.7-12.3 0-17l-5.7-5.7c-4.7-4.7-12.3-4.7-17 0L425.3 64H160V24c0-13.2-10.8-24-24-24H88C74.8 0 64 10.8 64 24v40H24C10.8 64 0 74.8 0 88v48c0 13.2 10.8 24 24 24h40v264c0 13.2 10.8 24 24 24h264v40c0 13.2 10.8 24 24 24h48c13.2 0 24-10.8 24-24v-40h40c13.2 0 24-10.8 24-24v-48c0-13.2-10.8-24-24-24zM96 32h32v32H96V32zm-64 96V96h361.4l-32 32H32zm128 201.4V160h169.4L160 329.4zm192-146.8V352H182.6L352 182.6zM128 160v201.4l-32 32V160h32zm-9.4 256l32-32H352v32H118.6zM416 480h-32V150.6l32-32V480zm64-64h-32v-32h32v32z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaCrop';
export default styled(icon);