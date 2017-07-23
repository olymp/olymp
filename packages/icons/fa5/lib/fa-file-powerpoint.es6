import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zM204.3 208H140c-6.6 0-12 5.4-12 12v184c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12v-60.4h44.3c38.7 0 67.7-27.3 67.7-69 0-38.6-23.8-66.6-67.7-66.6zm26 97.7c-7.5 7.6-17.8 11.4-31 11.4H160V233h39.7c12.9 0 23.1 3.7 30.6 11.1 15.3 15.1 15 46.5 0 61.6z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaFilePowerpoint';
export default styled(icon);