import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" width="640" height="512" viewBox="0 0 640 512"><path d="M616 320h-72v-48c0-26.468-21.532-48-48-48H336v-32h56c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H248c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h56v32H144c-26.467 0-48 21.532-48 48v48H24c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24V344c0-13.255-10.745-24-24-24h-40v-48c0-8.822 7.178-16 16-16h160v64h-56c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24V344c0-13.255-10.745-24-24-24h-56v-64h160c8.822 0 16 7.178 16 16v48h-40c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24V344c0-13.255-10.745-24-24-24zm-456 32v128H32V352h128zm224 0v128H256V352h128zM256 160V32h128v128H256zm352 320H480V352h128v128z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaSitemap';
export default styled(icon);