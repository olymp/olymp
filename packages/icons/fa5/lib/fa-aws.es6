import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M282.6 48.2l74.8 22.2-.1 110.8-74.7-24.9V48.2zm94.2 133l74.5-25 .3-108-74.8 22.2v110.8zM366.6 15l-68.8 21.5L366.7 55l69.6-18.5L366.6 15zM471 156.3l74.7 24.9.1-110.8L471 48.2v108.1zm94.2-85.9v110.8l74.5-25 .3-108-74.8 22.2zM555 15l-68.8 21.5L555.1 55l69.6-18.5L555 15zM0 314.2l74.7 24.9.1-110.8L0 206.1v108.1zm94.2 24.9l74.5-25 .3-108-74.8 22.2v110.8zM84 172.9l-68.8 21.5 68.9 18.5 69.6-18.5L84 172.9zm104.4 141.3l74.7 24.9.1-110.8-74.8-22.2v108.1zm94.2 24.9l74.5-25 .3-108-74.8 22.2v110.8zm-10.2-166.2l-68.8 21.5 68.9 18.5 69.6-18.5-69.7-21.5zM94.2 472.1l74.7 24.9.1-110.8L94.2 364v108.1zm94.2 24.9l74.5-25 .3-108-74.8 22.2V497zm-10.2-166.2l-68.8 21.5 68.9 18.5 69.6-18.5-69.7-21.5z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaAws';
export default styled(icon);