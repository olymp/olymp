import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M256 88.017v335.964c0 21.436-25.942 31.999-40.971 16.971L126.059 352H24c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h102.059l88.971-88.954C230.037 56.038 256 66.551 256 88.017zm-32 19.311l-77.659 77.644A24.001 24.001 0 0 1 129.372 192H32v128h97.372a24.001 24.001 0 0 1 16.969 7.028L224 404.67V107.328z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);