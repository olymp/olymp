import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M104 128H88c-13.3 0-24-10.7-24-24V88c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24zm120-24V88c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24zm96 0V88c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24zm256-56v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h480c26.5 0 48 21.5 48 48zm-32 144H32v272c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V192zm0-32V48c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v112h512z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaWindow';
export default styled(icon);