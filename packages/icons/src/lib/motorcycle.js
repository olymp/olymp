import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) =>
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 1792 1792"
    {...rest}
  >
    <path
      d="M2045 1036q12 103-22 198.5t-99 163.5-158.5 106-196.5 31q-161-11-279.5-125t-134.5-274q-12-111 27.5-210.5t118.5-170.5l-71-107q-96 80-151 194t-55 244q0 27-18.5 46.5t-45.5 19.5h-325q-23 164-149 274t-294 110q-185 0-316.5-131.5t-131.5-316.5 131.5-316.5 316.5-131.5q76 0 152 27l24-45q-123-110-304-110h-64q-26 0-45-19t-19-45 19-45 45-19h128q78 0 145 13.5t116.5 38.5 71.5 39.5 51 36.5h627l-85-128h-222q-30 0-49-22.5t-14-52.5q4-23 23-38t43-15h253q33 0 53 28l70 105 114-114q19-19 46-19h101q26 0 45 19t19 45v128q0 26-19 45t-45 19h-179l115 172q131-63 275-36 143 26 244 134.5t118 253.5zm-1853 372q115 0 203-72.5t111-183.5h-314q-35 0-55-31-18-32-1-63l147-277q-47-13-91-13-132 0-226 94t-94 226 94 226 226 94zm1408 0q132 0 226-94t94-226-94-226-226-94q-60 0-121 24l174 260q15 23 10 49t-27 40q-15 11-36 11-35 0-53-29l-174-260q-93 95-93 225 0 132 94 226t226 94z"
      fill={color}
    />
  </svg>;
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
