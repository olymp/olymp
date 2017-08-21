import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M507.38 68.225L315.582 484.108C294.161 530.519 224 515.72 224 463.993V288H47.933c-51.323 0-66.635-70.111-20.115-91.582L443.683 4.529c39.945-18.437 82.602 22.735 63.697 63.696zm-50.156-34.697L41.278 225.457c-15.491 7.149-10.443 30.526 6.708 30.526H256v208c0 17.923 23.596 21.722 30.527 6.705L478.452 54.769c6.3-13.653-7.795-27.441-21.228-21.241z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaLocationArrow';
export default styled(icon);