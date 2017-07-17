import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 192V81.9c0-6.4-2.5-12.5-7-17L351 7c-4.5-4.5-10.6-7-17-7H120c-13.2 0-24 10.8-24 24v168c-53 0-96 43-96 96v136c0 13.2 10.8 24 24 24h72v40c0 13.2 10.8 24 24 24h272c13.2 0 24-10.8 24-24v-40h72c13.2 0 24-10.8 24-24V288c0-53-43-96-96-96zM128 32h202.8L384 85.2V256H128V32zm256 448H128v-96h256v96zm96-64h-64v-40c0-13.2-10.8-24-24-24H120c-13.2 0-24 10.8-24 24v40H32V288c0-35.3 28.7-64 64-64v40c0 13.2 10.8 24 24 24h272c13.2 0 24-10.8 24-24v-40c35.3 0 64 28.7 64 64v128zm-28-112c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);