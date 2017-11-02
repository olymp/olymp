import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} width="2048" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg"><path d="M704 896q-159 0-271.5-112.5t-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5-112.5 271.5-271.5 112.5zm1077 320l249 249q9 9 9 23 0 13-9 22l-136 136q-9 9-22 9-14 0-23-9l-249-249-249 249q-9 9-23 9-13 0-22-9l-136-136q-9-9-9-22 0-14 9-23l249-249-249-249q-9-9-9-23 0-13 9-22l136-136q9-9 22-9 14 0 23 9l249 249 249-249q9-9 23-9 13 0 22 9l136 136q9 9 9 22 0 14-9 23zm-498 0l-181 181q-37 37-37 91 0 53 37 90l83 83q-21 3-44 3h-874q-121 0-194-69t-73-190q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q19 0 39 17 154 122 319 122t319-122q20-17 39-17 28 0 57 6-28 27-41 50t-13 56q0 54 37 91z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaUserTimes';
export default styled(icon);