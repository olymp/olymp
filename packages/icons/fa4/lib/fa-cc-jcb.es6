import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  <svg fill={color} width={size || width} height={size || height} {...rest} width="2304" viewBox="0 0 2304 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1951 998q0 26-15.5 44.5t-38.5 23.5q-8 2-18 2h-153v-140h153q10 0 18 2 23 5 38.5 23.5t15.5 44.5zm-18-213q0 25-15 42t-38 21q-3 1-15 1h-139v-129h139q3 0 8.5.5t6.5.5q23 4 38 21.5t15 42.5zm-1205 164v-308h-228v308q0 58-38 94.5t-105 36.5q-108 0-229-59v112q53 15 121 23t109 9l42 1q328 0 328-217zm714 184v-113q-99 52-200 59-108 8-169-41t-61-142 61-142 169-41q101 7 200 58v-112q-48-12-100-19.5t-80-9.5l-28-2q-127-6-218.5 14t-140.5 60-71 88-22 106 22 106 71 88 140.5 60 218.5 14q101-4 208-31zm734-115q0-54-43-88.5t-109-39.5v-3q57-8 89-41.5t32-79.5q0-55-41-88t-107-36q-3 0-12-.5t-14-.5h-455v510h491q74 0 121.5-36.5t47.5-96.5zm128-762v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z"/></svg>
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaCcJcb';
export default styled(icon);