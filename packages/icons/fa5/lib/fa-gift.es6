import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M488 160h-72.044C426.024 146.62 432 129.996 432 112c0-44.112-35.888-80-80-80-49.048 0-75.315 34.969-94.543 80.224C239.098 66.478 209.724 32 160 32c-44.112 0-80 35.888-80 80 0 17.996 5.976 34.62 16.044 48H24c-13.255 0-24 10.745-24 24v112c0 13.255 10.745 24 24 24h8v112c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V320h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24zM352 64c26.468 0 48 21.532 48 48s-21.532 48-48 48h-80c24-88 57.025-96 80-96zm-240 48c0-26.468 21.533-48 48-48 15.228 0 54.856.003 80 96h-80c-26.467 0-48-21.532-48-48zM32 288v-96h160v96H32zm48 160c-8.822 0-16-7.178-16-16V320h128v128H80zm144 0V192h64v256h-64zm224-16c0 8.822-7.178 16-16 16H320V320h128v112zm32-144H320v-96h160v96z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaGift';
export default styled(icon);