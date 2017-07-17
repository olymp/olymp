import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-162.6-84.6l-79.9-52.1c-5.6-3.6-7.1-11.1-3.5-16.6l6.6-10.1c3.6-5.6 11.1-7.1 16.6-3.5l59.9 39L264 213.3c3.6-5.5 11.1-7.1 16.6-3.5l10 6.6c5.5 3.6 7.1 11.1 3.5 16.6L190 391.9c-3.6 5.5-11.1 7.1-16.6 3.5z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);