import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" width="640" height="512" viewBox="0 0 640 512"><path d="M592 32H272c-26.51 0-48 21.49-48 48v48h-44.118a48 48 0 0 0-33.941 14.059l-99.882 99.882A48 48 0 0 0 32 275.882V384H20c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h45.604A80.321 80.321 0 0 0 64 432c0 44.183 35.817 80 80 80s80-35.817 80-80c0-5.48-.554-10.83-1.604-16h195.207a80.321 80.321 0 0 0-1.604 16c0 44.183 35.817 80 80 80s80-35.817 80-80c0-5.48-.554-10.83-1.604-16H592c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 384h-15.999c-14.595-19.43-37.829-32-64.001-32s-49.406 12.57-64.001 32H64V275.882c0-4.274 1.664-8.292 4.686-11.314l99.882-99.882A15.895 15.895 0 0 1 179.882 160H224v224zm384-16c0 8.822-7.177 16-16 16h-31.999c-14.595-19.43-37.829-32-64.001-32s-49.406 12.57-64.001 32H256V80c0-8.822 7.177-16 16-16h320c8.823 0 16 7.178 16 16v288zm-96-160v32c0 6.627-5.373 12-12 12h-56v56c0 6.627-5.373 12-12 12h-32c-6.627 0-12-5.373-12-12v-56h-56c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h56v-56c0-6.627 5.373-12 12-12h32c6.627 0 12 5.373 12 12v56h56c6.627 0 12 5.373 12 12zm-405.757 69.757l75.515-75.515c3.78-3.78 10.243-1.103 10.243 4.243V282a6 6 0 0 1-6 6h-75.515c-5.346 0-8.023-6.463-4.243-10.243zM496 384c26.467 0 48 21.533 48 48s-21.533 48-48 48-48-21.533-48-48 21.533-48 48-48m-352 0c26.467 0 48 21.533 48 48s-21.533 48-48 48-48-21.533-48-48 21.533-48 48-48"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaAmbulance';
export default styled(icon);